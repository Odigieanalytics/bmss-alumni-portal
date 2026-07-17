import Link from 'next/link';

// The public landing page. Nothing here reads from the members table —
// that's the whole point. This page ships identically to every visitor,
// signed in or not, because it contains no member data at all.
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-6">
        Boys Model Secondary School · Evboneka
      </span>
      <h1 className="font-display text-5xl md:text-7xl font-medium leading-tight mb-6">
        Building <em className="italic text-gold">Brotherhood</em>
        <br />
        Beyond Borders
      </h1>
      <p className="text-ivory/70 max-w-xl mb-10">
        The official portal of BMSS Alumni North America. Sign in with your
        email to reach the member directory, dues status, and more.
      </p>
      <Link
        href="/login"
        className="px-8 py-4 rounded-full bg-gradient-to-br from-gold to-gold-deep text-navy-950 font-semibold"
      >
        Member Sign In →
      </Link>
    </main>
  );
}
