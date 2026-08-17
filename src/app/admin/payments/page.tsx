'use client';
import AdminSidebar from '@/components/AdminSidebar';
import { usePathname } from 'next/navigation';

export default function AdminPayments() {
  const path = usePathname();
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-off-white)' }}>
      <AdminSidebar activePath={path} />
      <div className="admin-main" style={{ flex: 1 }}>
        <div style={{ padding: '1.5rem 2rem', background: 'var(--color-white)', borderBottom: '1px solid var(--color-light-grey)' }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Payments Management</h1>
        </div>
        <div style={{ padding: '2rem' }}>
          <p>This section is under construction.</p>
        </div>
      </div>
    </div>
  );
}
