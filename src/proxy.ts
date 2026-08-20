import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionByToken } from '@/lib/auth';

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith('/admin')) {
    if (path === '/admin/login' || path === '/admin/forgot-password' || path === '/admin/reset-password') {
      return NextResponse.next();
    }

    const token = request.cookies.get('dh_admin_token')?.value;
    if (!token || !getSessionByToken(token)) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
