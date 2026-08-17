import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata = { title: 'Design Consultation | TAAS', description: 'Book a professional interior design consultation for your home, office or rental space.' };

const FAQS = [
  { q: 'Is this a full interior-design service?', a: 'No. This is a focused professional consultation. You can use the advice independently or discuss a larger project separately.' },
  { q: 'What happens in the first 15 minutes?', a: 'We understand your space, requirements and key concerns. The first 15 minutes are complimentary.' },
  { q: 'Do I have to hire you after the consultation?', a: 'No.' },
  { q: 'Do I need to prepare anything?', a: 'Photos, measurements, floor plans or references can be helpful, but they are not mandatory.' },
  { q: 'Can you consult on commercial spaces?', a: 'Yes. Commercial consultations are available.' },
  { q: 'Is payment required before booking?', a: 'Yes. The appointment is confirmed after successful online payment.' }
];

export default function AdsLandingPage() {
  return (
    <main className="ad-page">
      {/* Mini Nav for Ads Page (No distractions) */}
      <header style={{ padding: '1.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <span className="label-caps" style={{ fontSize: '1.125rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-white)' }}>
            TAAS
          </span>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: '5rem 0 4rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.375rem 0.875rem', borderRadius: '100px', marginBottom: '2rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#16a34a' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', color: 'white' }}>FIRST 15 MINUTES COMPLIMENTARY</span>
          </div>
          
          <h1 className="heading-display" style={{ color: 'white', marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Have a Design Problem?<br />Book an Expert for One Hour.
          </h1>
          
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: 600, margin: '0 auto 2.5rem' }}>
            Get professional design advice for your home, rental, office or commercial space — without hiring an interior designer for the entire project.
          </p>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>₹3,999 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)' }}>/ 60 MINUTES</span></p>
          </div>
          
          <Link href="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'white', color: 'black', padding: '1.125rem 2.5rem', fontSize: '0.9375rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2 }}>
            BOOK MY CONSULTATION <ArrowRight size={16} />
          </Link>
          
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span>Online payment</span> • <span>Fixed duration</span> • <span>Professional design guidance</span>
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ padding: '4rem 0', background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-2" style={{ color: 'white' }}>Before You Spend Lakhs, Spend One Hour Getting It Right.</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', maxWidth: 900, margin: '0 auto' }}>
            {[
              "Will this layout work?",
              "Where should I place storage?",
              "Which material should I choose?",
              "Do I actually need renovation?",
              "How should I plan my kitchen?",
              "How can I make this commercial space work better?"
            ].map((q, i) => (
              <div key={i} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)', fontSize: '1.0625rem', fontStyle: 'italic', textAlign: 'center' }}>
                "{q}"
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/book" style={{ color: 'white', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              GET DESIGN ADVICE →
            </Link>
          </div>
        </div>
      </section>

      {/* Offer / Process Side by Side */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            {/* Offer Card */}
            <div style={{ background: 'white', color: 'black', padding: '3rem 2.5rem', borderRadius: 4 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>TAAS</h3>
              <p style={{ fontSize: '1rem', color: 'var(--color-charcoal-light)', marginBottom: '1.5rem' }}>60-minute professional consultation</p>
              
              <p style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '2rem' }}>₹3,999</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.5rem' }}>
                {[
                  'On-site or video consultation',
                  'Space assessment & Layout guidance',
                  'Material & Furniture recommendations',
                  'Storage & Lighting planning',
                  'Practical design direction'
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle size={18} style={{ color: 'black', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'var(--color-charcoal)' }}>{f}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ padding: '1rem', background: 'var(--color-off-white)', textAlign: 'center', marginBottom: '1.5rem', border: '1px dashed var(--color-mid-grey)' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.05em' }}>FIRST 15 MINUTES COMPLIMENTARY</span>
              </div>
              
              <Link href="/book" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', color: 'white', padding: '1.125rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textDecoration: 'none' }}>
                BOOK & PAY ₹3,999
              </Link>
            </div>
            
            {/* Process */}
            <div>
              <h2 className="heading-2" style={{ color: 'white', marginBottom: '3rem' }}>How it works.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {[
                  { title: 'BOOK', desc: 'Choose your preferred date and time.' },
                  { title: 'PAY', desc: 'Pay securely online to confirm your slot.' },
                  { title: 'CONSULT', desc: 'Discuss your space over video or on-site.' },
                  { title: 'DECIDE', desc: 'Leave with a clear, actionable design direction.' }
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.375rem', letterSpacing: '0.05em' }}>{step.title}</h3>
                      <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ specific to ads */}
      <section style={{ padding: '4rem 0 5rem', background: 'rgba(255,255,255,0.03)' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <h2 className="heading-2" style={{ color: 'white', marginBottom: '2.5rem', textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ background: 'white', borderRadius: 4, overflow: 'hidden' }}>
             <FAQAccordion items={FAQS} style={{ color: 'black' }} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-1" style={{ color: 'white', marginBottom: '1rem' }}>Don't Guess Your Design.</h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem' }}>Get professional advice before you spend.</p>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', letterSpacing: '0.05em' }}>60 MINUTES • ₹3,999 • FIRST 15 MINUTES COMPLIMENTARY</p>
          <Link href="/book" style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: 'black', padding: '1.125rem 3rem', fontSize: '0.9375rem', fontWeight: 700, letterSpacing: '0.05em', textDecoration: 'none', borderRadius: 2 }}>
            BOOK MY CONSULTATION
          </Link>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer style={{ padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
            <Link href="/terms" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textDecoration: 'none' }}>Terms</Link>
            <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/cancellation-policy" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textDecoration: 'none' }}>Cancellation Policy</Link>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>© {new Date().getFullYear()} TAAS</p>
        </div>
      </footer>
    </main>
  );
}
