import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  createSession,
  getClientIp,
  getConfiguredAdminCredentials,
  isRateLimited,
  isValidEmail,
  sanitizeInput,
  secureCompare,
} from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = sanitizeInput(body.email);
    const password = typeof body.password === 'string' ? body.password : '';

    const configuredCredentials = getConfiguredAdminCredentials();
    if (!configuredCredentials) {
      return NextResponse.json(
        { success: false, error: 'Authentication is not configured. Set ADMIN_EMAIL and ADMIN_PASSWORD in your environment.' },
        { status: 503 }
      );
    }

    if (!isValidEmail(email) || !password) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password.' },
        { status: 401 }
      );
    }

    const ip = getClientIp(request);
    const rateLimitKey = `admin-login:${ip}:${email.toLowerCase()}`;
    if (isRateLimited(rateLimitKey, 5, 15 * 60 * 1000)) {
      return NextResponse.json(
        { success: false, error: 'Too many attempts. Please try again later.' },
        { status: 429 }
      );
    }

    const matchesEmail = secureCompare(email.toLowerCase(), configuredCredentials.email);
    const matchesPassword = secureCompare(password, configuredCredentials.password);

    if (!matchesEmail || !matchesPassword) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password.' },
        { status: 401 }
      );
    }

    const cookieStore = await cookies();
    const { token } = createSession(email.toLowerCase());

    cookieStore.set('dh_admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
