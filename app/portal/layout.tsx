import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import SignOutButton from './SignOutButton';

// Server Component: this runs before any child page renders. If there's
// no session, we bounce to /login immediately — middleware already
// does this too, but checking again here means the portal is safe even
// if middleware config ever drifts. Defense in depth, not decoration.
export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) redirect('/login');

  const { data: me } = await supabase
    .from('members')
    .select('full_name, role')
    .eq('auth_id', session.user.id)
    .single();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 flex items-center justify-between gap-4 px-6 py-4 bg-navy-950/90 backdrop-blur border-b border-gold/10">
        <Link href="/" className="text-sm text-ivory/50 hover:text-gold">
          ← Back to site
        </Link>
        <div className="text-center">
          <div className="font-semibold">{me?.full_name ?? session.user.email}</div>
          <div className="text-[10px] tracking-widest uppercase text-gold">Member Portal</div>
        </div>
        <SignOutButton />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] max-w-6xl mx-auto">
        <aside className="p-4 border-r border-white/5 flex md:flex-col gap-2 overflow-x-auto">
          <Link href="/portal/directory" className="px-4 py-2 rounded-xl hover:bg-white/5 whitespace-nowrap">
            ◉ Directory
          </Link>
          <Link href="/portal/dues" className="px-4 py-2 rounded-xl hover:bg-white/5 whitespace-nowrap">
            ◈ Dues &amp; Status
          </Link>
        </aside>
        <main className="p-6 md:p-10 min-w-0">{children}</main>
      </div>
    </div>
  );
}
