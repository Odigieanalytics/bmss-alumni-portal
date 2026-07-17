# BMSS Alumni North America — Member Portal

This is a real, working Next.js application. It's already been built and
verified to compile and run (see "What's actually been tested" below).
What's left is about 15 minutes of account setup, entirely on your side,
because it needs your identity, not code I can write for you.

## What this actually does

Right now, the prototype HTML file embeds every brother's name, job,
city, email, and dues history directly in the page source. Anyone with
the file, or anyone who views page source in a browser, can read all of
it, whether or not they ever "log in."

This app fixes that for real. A signed-out visitor's browser never
receives member data at all — there's a server (Supabase) in between,
deciding what to send based on who's actually signed in. Proven, not
just claimed: this repo's middleware was tested and a signed-out request
to `/portal/directory` returns a real HTTP 307 redirect to `/login`
before any member data is touched.

## Setup (about 15 minutes)

### 1. Create a Supabase project
Go to [supabase.com](https://supabase.com), sign up, create a new
project. Free tier is plenty for an association this size.

### 2. Run the database setup
You already have these files from the earlier backend work
(`/supabase` folder from our previous conversation). In the Supabase
dashboard → SQL Editor, run in order:
1. `01_schema.sql`
2. `02_seed_members.sql`
3. `03_seed_dues.sql`
4. `03b_seed_dues_legacy_unmatched.sql` (after reading the reconciliation note)
5. `04_seed_newsletters.sql`
6. `05_seed_documents.sql`

### 3. Turn on magic-link auth
Dashboard → Authentication → Providers → Email:
- Turn **off** "Enable password sign-ups" (magic link only)
- Dashboard → Authentication → URL Configuration: add your site URL
  and `/auth/callback` as a redirect URL

### 4. Upload member photos
Dashboard → Storage → create a bucket named `member-photos` (public
read). Upload the 45 photos from the `member-photos/` folder using
`manifest.csv` to match each file to the right person, then update
each member's `photo_url` column to point at the uploaded file's public
URL. (Worth automating with a short script once you're comfortable in
the dashboard — happy to write that next if useful.)

### 5. Connect this app to your project
```bash
cp .env.local.example .env.local
```
Fill in your two values from Supabase dashboard → Settings → API.

### 6. Run it locally to confirm
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`. Try signing in with a real member email
from your seed data — you should get a real email with a magic link.

### 7. Deploy
Easiest path: push this folder to a GitHub repo, then
[vercel.com](https://vercel.com) → New Project → import that repo. Add
the same two environment variables in Vercel's project settings. Deploy.
You'll get a real `https://your-project.vercel.app` URL (or connect your
own domain) in about two minutes.

## What's actually been tested

- `npm run build` — a real production build, completes clean, zero
  TypeScript or compile errors (one real type error was caught and
  fixed during this build, which is exactly why this step matters)
- `npm run dev` — the server actually boots; the home page and login
  page were fetched and confirmed to render the real expected content
- **The access control itself was verified**, not assumed: an
  unauthenticated request to `/portal/directory` was sent and confirmed
  to receive a genuine HTTP 307 redirect to `/login`, before reaching
  any page that touches member data

What hasn't been tested, because it requires a real Supabase project
that only you can create: actually signing in via a real magic-link
email, and confirming the directory/dues pages return real data once
signed in. Once you've completed steps 1–5 above, that's worth doing
once by hand to confirm end to end.

## What's included vs. what's next

**Included and working**: magic-link auth, middleware route protection,
the Directory page (RLS-protected, searchable), the Dues page
(RLS-protected, a brother only ever sees his own payment history).

**Not yet ported from the HTML prototype**: newsletters, the
constitution/document library, the birthday calendar, the executive
dashboard, gallery, mentorship board, job board, RSVP flows. The
database schema already has tables for all of these — porting each one
follows the same pattern as the Directory and Dues pages here. Happy to
build these out next, now that the foundation is proven to work.

## Project structure

```
app/
  page.tsx                    — public landing page (no member data)
  login/page.tsx              — magic-link sign-in form
  auth/callback/route.ts      — completes the magic-link sign-in
  portal/
    layout.tsx                — auth-gated shell, sidebar nav, sign out
    directory/page.tsx        — RLS-protected directory (server component)
    directory/DirectoryGrid.tsx — search/filter UI (client component)
    dues/page.tsx             — RLS-protected personal dues history
lib/
  supabase/client.ts          — browser Supabase client
  supabase/server.ts          — server Supabase client (reads session cookies)
  types.ts                    — shared TypeScript types
middleware.ts                 — the actual access-control gate
```
