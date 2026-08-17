import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = { title: 'Pricing | Design Hour', description: 'Transparent consultation pricing from ₹1,999. Book 30, 60 or 90 minute sessions.' };

const PLANS = [
  { name: 'Quick Consultation', duration: '30 Minutes', price: '₹1,999', raw: 1999, desc: 'For focused design questions and quick decisions.', cta: 'Book 30 Minutes', featured: false },
  { name: 'Design Hour', duration: '60 Minutes', price: '₹3,999', raw: 3999, badge: 'MOST POPULAR', desc: 'First 15 minutes complimentary. For detailed design consultation.', cta: 'Book 60 Minutes', featured: true },
  { name: 'Deep Dive', duration: '90 Minutes', price: '₹5,999', raw: 5999, desc: 'For larger spaces or multiple design concerns.', cta: 'Book 90 Minutes', featured: false },
];

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '6rem', paddingBottom: '4rem', background: 'var(--color-off-white)', minHeight: '100vh' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: 560, margin: '0 auto 4rem' }}>
            <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>Pricing</p>
            <h1 className="heading-1">Simple, transparent pricing.</h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-light)', marginTop: '1rem', lineHeight: 1.7 }}>
              No retainers. No hidden costs. Book the time you need.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
            {PLANS.map(plan => (
              <div key={plan.name} style={{ padding: '2.5rem 2rem', background: plan.featured ? 'var(--color-near-black)' : 'var(--color-white)', border: `1px solid ${plan.featured ? 'transparent' : 'var(--color-light-grey)'}`, color: plan.featured ? 'white' : 'var(--color-near-black)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {plan.badge && <span style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.15em', padding: '0.25rem 0.625rem', background: 'rgba(255,255,255,0.15)', display: 'inline-block', width: 'fit-content' }}>{plan.badge}</span>}
                <div>
                  <p style={{ fontSize: '0.75rem', letterSpacing: '0.08em', opacity: 0.5, marginBottom: '0.375rem' }}>{plan.duration}</p>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{plan.name}</h2>
                </div>
                <p style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1 }}>{plan.price}</p>
                <p style={{ fontSize: '0.9375rem', opacity: 0.6, lineHeight: 1.65, flex: 1 }}>{plan.desc}</p>
                <Link href="/book" style={{ display: 'block', textAlign: 'center', padding: '0.875rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', background: plan.featured ? 'white' : 'var(--color-near-black)', color: plan.featured ? 'var(--color-near-black)' : 'white' }}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Commercial */}
          <div style={{ maxWidth: 900, margin: '1.5rem auto 0', padding: '2rem', background: 'var(--color-white)', border: '1px solid var(--color-light-grey)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '0.5rem' }}>Commercial</p>
              <p style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em' }}>From ₹7,500</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)', marginTop: '0.375rem' }}>Offices · Cafés · Restaurants · Retail · Studios</p>
            </div>
            <Link href="/commercial" className="btn btn-secondary" style={{ padding: '0.875rem 1.75rem', fontSize: '0.75rem' }}>Enquire for Commercial</Link>
          </div>

          {/* Payment note */}
          <div style={{ maxWidth: 900, margin: '3rem auto 0', padding: '1.5rem', border: '1px solid var(--color-light-grey)', background: 'var(--color-white)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal)' }}>
              <strong>Payment is required before the appointment is confirmed.</strong><br />
              <span style={{ color: 'var(--color-grey)', fontSize: '0.875rem' }}>Your appointment is confirmed after successful online payment.</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
