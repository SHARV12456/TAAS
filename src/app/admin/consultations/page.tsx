'use client';
import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { usePathname } from 'next/navigation';
import { MOCK_BOOKINGS } from '@/lib/mockData';
import { Search } from 'lucide-react';

export default function AdminConsultations() {
  const path = usePathname();
  const [search, setSearch] = useState('');
  
  // Reuse the MOCK_BOOKINGS but present them in a way more focused on the *consultation session* itself
  const filtered = MOCK_BOOKINGS.filter(b => 
    b.customer.toLowerCase().includes(search.toLowerCase()) || 
    b.service.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-off-white)' }}>
      <AdminSidebar activePath={path} />
      <div className="admin-main" style={{ flex: 1 }}>
        <div style={{ padding: '1.5rem 2rem', background: 'var(--color-white)', borderBottom: '1px solid var(--color-light-grey)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Consultations</h1>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-grey)', marginTop: '0.2rem' }}>Review upcoming and past design sessions.</p>
          </div>
          <div style={{ position: 'relative', width: 280 }}>
            <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-grey)' }} />
            <input className="input" placeholder="Search sessions…" value={search} onChange={e => setSearch(e.target.value)} style={{ paddingLeft: '2.25rem' }} />
          </div>
        </div>
        <div style={{ padding: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {filtered.map(b => (
              <div key={b.id} style={{ background: 'var(--color-white)', border: '1px solid var(--color-light-grey)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span className={`status-${b.status.toLowerCase()}`} style={{ fontSize: '0.625rem', fontWeight: 700, padding: '0.2rem 0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'inline-block' }}>{b.status}</span>
                    <h2 style={{ fontSize: '1.0625rem', fontWeight: 700 }}>{b.customer}</h2>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-light)' }}>{b.service}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>{b.date}</p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-grey)' }}>{b.time} ({b.duration}m)</p>
                  </div>
                </div>
                
                <div style={{ background: 'var(--color-off-white)', padding: '1rem', border: '1px solid var(--color-light-grey)' }}>
                  <p className="label" style={{ marginBottom: '0.25rem' }}>Project Type</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.75rem' }}>{b.propertyType}</p>
                  
                  <p className="label" style={{ marginBottom: '0.25rem' }}>Location</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>{b.location}</p>
                </div>
                
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                  <button className="btn btn-secondary" style={{ flex: 1, padding: '0.625rem', fontSize: '0.75rem', justifyContent: 'center' }}>View Notes</button>
                  <button className="btn btn-primary" style={{ flex: 1, padding: '0.625rem', fontSize: '0.75rem', justifyContent: 'center' }}>Message</button>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--color-grey)', background: 'var(--color-white)', border: '1px solid var(--color-light-grey)' }}>No consultations found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
