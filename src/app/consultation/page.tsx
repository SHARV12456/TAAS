import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = { title: 'Design Consultation | Design Hour', description: 'Professional interior design consultation by the hour. Homes, rentals, offices and commercial spaces.' };

export default function ConsultationPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
        <div style={{ background: 'var(--color-off-white)', padding: '5rem 0' }}>
          <div className="container" style={{ maxWidth: 680 }}>
            <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>The Service</p>
            <h1 className="heading-1" style={{ marginBottom: '1.25rem' }}>Professional design advice. Booked by the hour.</h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-light)', lineHeight: 1.75, marginBottom: '2rem' }}>
              Design Hour is a productized design consultation service. You book a professional designer for a fixed time, pay upfront, and walk away with clarity.
            </p>
            <Link href="/book" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
              Book My Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div style={{ padding: '4rem 0', background: 'var(--color-white)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <h2 className="heading-2" style={{ marginBottom: '1.5rem' }}>This is not a traditional interior design service.</h2>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-light)', lineHeight: 1.75, marginBottom: '1rem' }}>
                  You don't always need to hire an interior designer for a full project. Sometimes, you just need someone experienced to look at your space and answer the right questions.
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-light)', lineHeight: 1.75 }}>
                  Design Hour gives you access to professional design expertise on your terms — for the decision you need to make, not a year-long project commitment.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Residential interiors', 'Rental homes', 'Modular kitchens', 'Living rooms', 'Bedrooms',
                  'Offices', 'Retail spaces', 'Cafés and restaurants', 'Commercial interiors', 'Space planning decisions',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={15} style={{ color: 'var(--color-charcoal)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '4rem 0', background: 'var(--color-off-white)' }}>
          <div className="container">
            <h2 className="heading-2" style={{ marginBottom: '2.5rem' }}>Consultation formats.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {[
                { type: 'On-Site', desc: 'The designer visits your space. Best for spatial assessment and material selection.', note: 'Available within Mumbai.' },
                { type: 'Video', desc: 'Share photos, floor plans and walk through your space over video call.', note: 'Available anywhere in India.' },
              ].map(({ type, desc, note }) => (
                <div key={type} style={{ padding: '2rem', background: 'var(--color-white)', border: '1px solid var(--color-light-grey)' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem' }}>{type} Consultation</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-light)', lineHeight: 1.65, marginBottom: '0.75rem' }}>{desc}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-grey)', letterSpacing: '0.05em' }}>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
