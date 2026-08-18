import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Hardcoded credentials for now since there's no DB
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@designhour.in';
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin@2026';

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Set secure HttpOnly cookie
      const cookieStore = await cookies();
      cookieStore.set('dh_admin_token', 'secure-admin-session-token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid email or password.' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
