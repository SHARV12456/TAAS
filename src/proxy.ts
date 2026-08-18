import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Only protect /admin routes
  if (path.startsWith('/admin')) {
    // Exclude the login page from protection
    if (path === '/admin/login') {
      return NextResponse.next();
    }

    const token = request.cookies.get('dh_admin_token')?.value;
    
    // Very basic check — in production this should verify a JWT
    if (!token || token !== 'secure-admin-session-token') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
