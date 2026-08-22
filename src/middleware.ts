import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { proxy } from './proxy';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect all /admin routes
  if (path.startsWith('/admin')) {
    // Check if admin panel is enabled via environment variable
    const adminEnabled = process.env.ADMIN_PANEL_ENABLED === 'true';
    
    if (!adminEnabled) {
      // Rewrite to a non-existent route to trigger the standard Next.js 404 page
      // This hides the existence of the admin panel completely
      request.nextUrl.pathname = '/404';
      return NextResponse.rewrite(request.nextUrl);
    }
    
    // If enabled, pass to the existing authentication proxy logic
    return proxy(request);
  }

  return NextResponse.next();
}

// Only run middleware on /admin routes to minimize performance impact
export const config = {
  matcher: ['/admin/:path*'],
};
