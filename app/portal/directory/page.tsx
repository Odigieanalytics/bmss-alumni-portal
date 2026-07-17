import { createClient } from '@/lib/supabase/server';
import type { Member } from '@/lib/types';
import DirectoryGrid from './DirectoryGrid';

export const dynamic = 'force-dynamic';

// This is the answer to "only members access the directory": this query
// runs on the server, as the signed-in visitor (their session cookie is
// what the Supabase client reads). If there's no session, middleware
// already redirected before this file even executes. If there IS a
// session but the RLS policy on `members` ever required something this
// user doesn't have, the query returns zero rows — not an error, not a
// partial leak, just nothing. The privacy boundary lives in the
// database, not in this component, which is exactly where it should be.
export default async function DirectoryPage() {
  const supabase = createClient();

  const { data: members, error } = await supabase
    .from('members')
    .select('id, full_name, grad_year, profession, city, state, country, email, linkedin_url, photo_url, is_mentor, is_business_owner, skills, help_offers, role, exco_title')
    .order('full_name');

  if (error) {
    return (
      <div className="text-red-400">
        Could not load the directory: {error.message}
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-display text-3xl mb-1">The Brotherhood Directory</h1>
      <p className="text-ivory/50 mb-8">
        {members?.length ?? 0} brothers, members-only.
      </p>
      <DirectoryGrid members={(members ?? []) as Member[]} />
    </div>
  );
}
