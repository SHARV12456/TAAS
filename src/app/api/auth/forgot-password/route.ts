import { NextResponse } from 'next/server';
import { createResetToken, getConfiguredAdminCredentials, isValidEmail, sanitizeInput } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = sanitizeInput(body.email).toLowerCase();

    const configuredEmail = getConfiguredAdminCredentials()?.email;
    const genericResponse = {
      success: true,
      message: 'If that email is registered, a reset link has been sent.',
    };

    if (!configuredEmail || !isValidEmail(email)) {
      return NextResponse.json(genericResponse);
    }

    if (email !== configuredEmail) {
      return NextResponse.json(genericResponse);
    }

    const rawResetToken = createResetToken(email);
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const resetLink = `${appUrl}/admin/reset-password?token=${encodeURIComponent(rawResetToken)}`;

    console.info('[password-reset]', {
      event: 'password_reset_requested',
      email,
      resetLink: resetLink.replace(rawResetToken, '[REDACTED]'),
    });

    return NextResponse.json(genericResponse);
  } catch {
    return NextResponse.json({
      success: true,
      message: 'If that email is registered, a reset link has been sent.',
    });
  }
}
