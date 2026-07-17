'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function SignOutButton() {
  const router = useRouter();
  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  }
  return (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 rounded-full border border-white/15 text-sm hover:border-gold hover:text-gold"
    >
      Sign out
    </button>
  );
}
