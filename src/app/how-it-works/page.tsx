import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = { title: 'How It Works | TAAS', description: 'Book, pay, consult and leave with clarity. See how TAAS works.' };

const STEPS = [
  { num: '01', title: 'BOOK', desc: 'Choose your consultation type and preferred time slot. 30, 60, or 90 minutes.', detail: 'Select from available time slots Monday through Saturday. Choose on-site or video consultation at checkout.' },
  { num: '02', title: 'PAY', desc: 'Complete secure online payment before the appointment is confirmed.', detail: 'Payment is required upfront. Your appointment is only confirmed after successful payment. This ensures a committed consultation time for both parties.' },
  { num: '03', title: 'CONSULT', desc: 'Discuss your space, requirements and design concerns with your designer.', detail: 'The first 15 minutes of your 60-minute session are complimentary — used to understand your space and goals.' },
  { num: '04', title: 'LEAVE WITH CLARITY', desc: 'Get practical recommendations you can actually act on.', detail: 'Walk away with specific design direction, material recommendations, layout guidance and a clear path forward — without having to commit to a full interior project.' },
];

export default function HowItWorksPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '6rem', paddingBottom: '0', background: 'var(--color-white)', minHeight: '100vh' }}>
        {/* Hero */}
        <div style={{ background: 'var(--color-off-white)', padding: '5rem 0' }}>
          <div className="container" style={{ maxWidth: 640 }}>
            <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>How It Works</p>
            <h1 className="heading-1" style={{ marginBottom: '1rem' }}>Simple. Professional. Efficient.</h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
              Book a professional designer for exactly the time you need. No retainers, no project commitments.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: 800 }}>
          {STEPS.map((step, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '3rem', paddingBottom: '3rem', marginBottom: '3rem', borderBottom: i < STEPS.length - 1 ? '1px solid var(--color-light-grey)' : 'none', alignItems: 'start' }}>
              <div>
                <p style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--color-light-grey)', lineHeight: 1 }}>{step.num}</p>
              </div>
              <div>
                <p className="label-caps" style={{ color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>{step.title}</p>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.015em', marginBottom: '0.75rem' }}>{step.desc}</h2>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ background: 'var(--color-off-white)', padding: '4rem 0' }}>
          <div className="container">
            <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>Session Structure</p>
            <h2 className="heading-2" style={{ marginBottom: '2.5rem' }}>Inside a 60-minute consultation.</h2>
            <div style={{ height: 6, background: 'var(--color-light-grey)', marginBottom: '1.5rem', overflow: 'hidden', display: 'flex' }}>
              <div style={{ width: '25%', background: '#9b9a97' }} />
              <div style={{ width: '25%', background: '#6b6a68' }} />
              <div style={{ width: '50%', background: '#1a1917' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {[
                { span: '25%', time: '0 – 15 min', phase: 'DISCOVER', body: 'Complimentary. Understanding your space, goals and requirements.' },
                { span: '25%', time: '15 – 30 min', phase: 'DIAGNOSE', body: 'Identifying design problems, constraints and possible directions.' },
                { span: '50%', time: '30 – 60 min', phase: 'DIRECT', body: 'Detailed recommendations on layout, materials, furniture, lighting and more.' },
              ].map(seg => (
                <div key={seg.phase} style={{ padding: '1.5rem', background: 'var(--color-white)', border: '1px solid var(--color-light-grey)' }}>
                  <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', color: 'var(--color-grey)', marginBottom: '0.5rem' }}>{seg.time}</p>
                  <p className="label-caps" style={{ marginBottom: '0.5rem' }}>{seg.phase}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>{seg.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'var(--color-near-black)', color: 'white', padding: '5rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2 className="heading-2" style={{ color: 'white', marginBottom: '1rem' }}>Ready to book?</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', fontSize: '0.9375rem' }}>60 minutes · ₹3,999 · First 15 minutes complimentary</p>
            <Link href="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: 'black', padding: '1rem 2.5rem', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Book My Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
