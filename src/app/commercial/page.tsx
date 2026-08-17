'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Building2, Coffee, ShoppingBag, Utensils, Briefcase, Monitor } from 'lucide-react';



const COMMERCIAL_TYPES = [
  { icon: Briefcase, label: 'Offices', desc: 'Workspace planning, zoning, and productivity-focused layouts.' },
  { icon: Coffee, label: 'Cafés', desc: 'Seating, flow, ambience and brand expression.' },
  { icon: Utensils, label: 'Restaurants', desc: 'Dining zones, kitchen adjacency, lighting and material selection.' },
  { icon: ShoppingBag, label: 'Retail Spaces', desc: 'Customer flow, display strategy and brand environment.' },
  { icon: Building2, label: 'Studios', desc: 'Creative workspaces, acoustics and flexible layouts.' },
  { icon: Monitor, label: 'Co-working Spaces', desc: 'Hot-desking zones, meeting pods and collaborative environments.' },
];

export default function CommercialPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
        {/* Hero */}
        <div style={{ background: 'var(--color-near-black)', color: 'white', padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: 680 }}>
            <p className="label-caps" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>Commercial</p>
            <h1 className="heading-1" style={{ color: 'white', marginBottom: '1.25rem' }}>Design consultation for commercial spaces.</h1>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              Whether you're opening a café, redesigning an office or planning a retail space — get expert design guidance before you commit to contractors.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: 'black', padding: '0.875rem 1.75rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Enquire Now <ArrowRight size={13} />
              </Link>
              <Link href="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'white', padding: '0.875rem 1.75rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div style={{ background: 'var(--color-off-white)', padding: '4rem 0' }}>
          <div className="container">
            <div style={{ padding: '2.5rem', background: 'var(--color-white)', border: '1px solid var(--color-light-grey)', maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
              <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>Commercial Pricing</p>
              <p style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1, marginBottom: '0.5rem' }}>From ₹7,500</p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-light)', marginBottom: '1.5rem' }}>Pricing varies based on space size, complexity and consultation duration.</p>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.875rem' }}>
                Enquire for Commercial
              </Link>
            </div>
          </div>
        </div>

        {/* Types */}
        <div style={{ padding: '4rem 0', background: 'var(--color-white)' }}>
          <div className="container">
            <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>We Consult On</p>
            <h2 className="heading-2" style={{ marginBottom: '2.5rem' }}>Commercial space types.</h2>
            <div className="grid-3">
              {COMMERCIAL_TYPES.map(({ icon: Icon, label, desc }) => (
                <div key={label} style={{ padding: '1.75rem', border: '1px solid var(--color-light-grey)', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-charcoal)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-light-grey)'; }}>
                  <Icon size={18} style={{ color: 'var(--color-charcoal)', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{label}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div style={{ padding: '4rem 0', background: 'var(--color-off-white)' }}>
          <div className="container">
            <h2 className="heading-2" style={{ marginBottom: '2.5rem' }}>What to expect.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {[
                ['Space Assessment', 'Understand the physical constraints, traffic flow and brand requirements.'],
                ['Layout Direction', 'Optimise the spatial plan for function and experience.'],
                ['Material Guidance', 'Select appropriate finishes for durability and brand fit.'],
                ['Practical Recommendations', 'Actionable direction you can take to contractors and vendors.'],
              ].map(([title, body]) => (
                <div key={title} style={{ padding: '1.5rem', background: 'var(--color-white)', border: '1px solid var(--color-light-grey)' }}>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '0.5rem' }}>{title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>{body}</p>
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
