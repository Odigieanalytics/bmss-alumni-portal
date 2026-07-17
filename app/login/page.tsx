'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const next = searchParams.get('next') ?? '/portal/directory';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`
      }
    });
    setLoading(false);
    if (error) setError(error.message);
    else setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold mb-2">Check your email, brother.</p>
        <p className="text-ivory/60">Click the link we sent to {email} to sign in.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <label className="block text-xs uppercase tracking-widest text-ivory/50 mb-2">
        Your email
      </label>
      <input
        type="email"
        required
        autoFocus
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 focus:border-gold outline-none mb-4"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-full bg-gradient-to-br from-gold to-gold-deep text-navy-950 font-semibold disabled:opacity-50"
      >
        {loading ? 'Sending…' : 'Send my sign-in link'}
      </button>
      {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
      <p className="text-ivory/40 text-xs mt-6 text-center">
        No password needed. Use the email your directory profile is
        registered under.
      </p>
    </form>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="font-display text-3xl mb-8">Member Sign In</h1>
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
