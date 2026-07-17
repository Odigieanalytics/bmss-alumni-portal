// This is the gate. It runs on every request before any page renders,
// so a signed-out visitor's browser never even receives portal HTML,
// let alone member data. Combined with the row-level security policies
// in the database, this is two independent layers: middleware keeps
// signed-out visitors off /portal, and RLS keeps a signed-in member
// from ever pulling another member's private data even if he tries.
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request: { headers: request.headers } });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          response = NextResponse.next({ request: { headers: request.headers } });
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          response = NextResponse.next({ request: { headers: request.headers } });
          response.cookies.set({ name, value: '', ...options });
        }
      }
    }
  );

  const { data: { session } } = await supabase.auth.getSession();

  if (!session && request.nextUrl.pathname.startsWith('/portal')) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('next', request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: ['/portal/:path*']
};
