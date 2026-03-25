import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { jwtVerify } from 'jose';

const intlMiddleware = createMiddleware({
  locales: ['en', 'id'],
  defaultLocale: 'en',
  localePrefix: 'always',
});

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Guard /admin routes (except login page)
  if (pathname.startsWith('/admin')) {
    const isLoginPage = pathname === '/admin/login' || pathname === '/admin/login/';
    if (isLoginPage) return NextResponse.next();

    const token = request.cookies.get('admin_token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch {
      const res = NextResponse.redirect(new URL('/admin/login', request.url));
      res.cookies.delete('admin_token');
      return res;
    }
  }

  // Skip intl for API routes and static assets
  if (pathname.startsWith('/api') || pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/((?!_next|_vercel|_static|favicon.ico|robots.txt|sitemap.xml|images|assets).*)',
  ],
};
