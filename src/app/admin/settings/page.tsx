'use client';
import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { usePathname } from 'next/navigation';
import { Save } from 'lucide-react';
import { TRACKING_CONFIG } from '@/lib/mockData';

export default function AdminSettings() {
  const path = usePathname();
  const [config, setConfig] = useState(TRACKING_CONFIG);
  const [saved, setSaved] = useState(false);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const field = (label: string, key: keyof typeof config) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', marginBottom: '1rem' }}>
      <label className="label">{label}</label>
      <input className="input" value={config[key]} onChange={e => setConfig({ ...config, [key]: e.target.value })} style={{ fontFamily: 'monospace', fontSize: '0.8125rem' }} />
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-off-white)' }}>
      <AdminSidebar activePath={path} />
      <div className="admin-main" style={{ flex: 1 }}>
        <div style={{ padding: '1.5rem 2rem', background: 'var(--color-white)', borderBottom: '1px solid var(--color-light-grey)' }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Settings</h1>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-grey)', marginTop: '0.2rem' }}>Manage tracking pixels and integration IDs. (Mock — not persisted)</p>
        </div>
        <div style={{ padding: '2rem', maxWidth: 640 }}>
          <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-light-grey)', padding: '2rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-light-grey)' }}>Analytics & Tracking</h2>
            {field('Meta Pixel ID', 'META_PIXEL_ID')}
            {field('Google Analytics ID', 'GOOGLE_ANALYTICS_ID')}
            {field('Google Ads Conversion ID', 'GOOGLE_ADS_CONVERSION_ID')}
          </div>
          <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-light-grey)', padding: '2rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-light-grey)' }}>Google Ads Conversion Labels</h2>
            {field('Booking Started Label', 'GOOGLE_ADS_LABEL_BOOKING_STARTED')}
            {field('Booking Completed Label', 'GOOGLE_ADS_LABEL_BOOKING_COMPLETED')}
            {field('Payment Initiated Label', 'GOOGLE_ADS_LABEL_PAYMENT_INITIATED')}
            {field('Payment Completed Label', 'GOOGLE_ADS_LABEL_PAYMENT_COMPLETED')}
          </div>
          <button className="btn btn-primary" onClick={save} style={{ padding: '0.875rem 2rem', fontSize: '0.8125rem' }}>
            <Save size={14} /> {saved ? 'Saved!' : 'Save Changes'}
          </button>
          {saved && <p style={{ fontSize: '0.8125rem', color: '#16a34a', marginTop: '0.75rem' }}>✓ Changes saved (mock — no backend connected)</p>}
        </div>
      </div>
    </div>
  );
}
