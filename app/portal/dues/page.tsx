import { createClient } from '@/lib/supabase/server';
// (narrow type matching exactly the columns selected below, not the full row)
type DuesRow = { cycle_month: string; amount: number; currency: 'USD' | 'CAD' };

export const dynamic = 'force-dynamic';

const MONTHS = ['Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'];

// Note what this query does NOT do: it does not filter `where member_id = me`.
// It doesn't need to. The RLS policy `dues_read_self` on the dues_payments
// table already restricts every select to the caller's own rows (or all
// rows, if the caller is EXCO). A bug in this component literally cannot
// leak another brother's dues — the database won't return them regardless
// of what this code asks for.
export default async function DuesPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: me } = await supabase
    .from('members')
    .select('id, full_name')
    .eq('auth_id', user?.id)
    .single();

  const { data: payments } = await supabase
    .from('dues_payments')
    .select('cycle_month, amount, currency')
    .order('cycle_month');

  const rows = (payments ?? []) as DuesRow[];
  const total = rows.reduce((sum, p) => sum + Number(p.amount), 0);
  const paidMonths = new Set(rows.map((p) => new Date(p.cycle_month).getMonth()));

  return (
    <div>
      <h1 className="font-display text-3xl mb-1">Dues &amp; Status</h1>
      <p className="text-ivory/50 mb-8">{me?.full_name}, this cycle · $20/month</p>

      <div className="rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/5 to-navy-900 p-6 mb-6">
        <div className="text-xs uppercase tracking-widest text-gold mb-2">Total this cycle</div>
        <div className="font-display text-4xl">${total.toFixed(0)}</div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {MONTHS.map((label, i) => {
          // Sep=8 (0-indexed month), matches the 12-month cycle offset
          const monthIndex = (i + 8) % 12;
          const paid = paidMonths.has(monthIndex);
          return (
            <div
              key={label}
              className={`text-center text-xs font-bold rounded-lg py-2 border ${
                paid
                  ? 'bg-teal/10 border-teal/30 text-teal'
                  : 'border-white/10 text-ivory/30'
              }`}
            >
              {label}
              <br />
              {paid ? '✓' : '·'}
            </div>
          );
        })}
      </div>
    </div>
  );
}
