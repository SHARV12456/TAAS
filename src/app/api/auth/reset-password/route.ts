import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  consumeResetToken,
  getConfiguredAdminCredentials,
  getPasswordError,
  invalidateAllSessionsForEmail,
  sanitizeInput,
  verifyResetToken,
} from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const token = sanitizeInput(body.token);
    const password = typeof body.password === 'string' ? body.password : '';
    const confirmPassword = typeof body.confirmPassword === 'string' ? body.confirmPassword : '';

    if (!token) {
      return NextResponse.json({ success: false, error: 'Invalid or expired reset link.' }, { status: 400 });
    }

    const resetToken = verifyResetToken(token);
    if (!resetToken) {
      return NextResponse.json({ success: false, error: 'Invalid or expired reset link.' }, { status: 400 });
    }

    const passwordError = getPasswordError(password);
    if (passwordError) {
      return NextResponse.json({ success: false, error: passwordError }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ success: false, error: 'Passwords do not match.' }, { status: 400 });
    }

    const configuredCredentials = getConfiguredAdminCredentials();
    if (!configuredCredentials) {
      return NextResponse.json({ success: false, error: 'Authentication is not configured.' }, { status: 503 });
    }

    if (resetToken.email !== configuredCredentials.email) {
      return NextResponse.json({ success: false, error: 'Invalid or expired reset link.' }, { status: 400 });
    }

    process.env.ADMIN_PASSWORD = password;
    consumeResetToken(token);
    invalidateAllSessionsForEmail(resetToken.email);

    const cookieStore = await cookies();
    cookieStore.delete('dh_admin_token');

    console.info('[password-reset]', {
      event: 'password_reset_completed',
      email: resetToken.email,
    });

    return NextResponse.json({ success: true, message: 'Password updated successfully.' });
  } catch {
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}
