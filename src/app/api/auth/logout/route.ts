import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { deleteSession } from '@/lib/auth';

export async function POST(_request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get('dh_admin_token')?.value;

  if (token) {
    deleteSession(token);
  }

  cookieStore.delete('dh_admin_token');

  return NextResponse.json({ success: true });
}
