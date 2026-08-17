'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { FAQS } from '@/lib/mockData';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CONSULT_AREAS = [
  { title: 'Layout', desc: 'Make better use of your existing space.' },
  { title: 'Materials', desc: 'Choose finishes and materials with confidence.' },
  { title: 'Furniture', desc: 'Know what to buy, what to avoid and where it should go.' },
  { title: 'Storage', desc: 'Find practical storage opportunities.' },
  { title: 'Lighting', desc: 'Improve ambience and functionality.' },
  { title: 'Renovation', desc: 'Understand what is worth changing.' },
  { title: 'Modular Design', desc: 'Get guidance before approaching a contractor or manufacturer.' },
  { title: 'Commercial', desc: 'Design direction for offices, cafés, restaurants and retail spaces.' },
];

const STEPS = [
  { num: '01', title: 'BOOK', desc: 'Choose your consultation and preferred time.' },
  { num: '02', title: 'PAY', desc: 'Complete secure online payment before the appointment is confirmed.' },
  { num: '03', title: 'CONSULT', desc: 'Discuss your space, requirements and design concerns.' },
  { num: '04', title: 'LEAVE WITH CLARITY', desc: 'Get practical recommendations you can actually act on.' },
];

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: '100vh',
          background: 'var(--color-off-white)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '6rem',
          paddingBottom: '4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background grid decoration */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(var(--color-near-black) 1px, transparent 1px), linear-gradient(90deg, var(--color-near-black) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '720px' }}>
            {/* Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <span className="badge badge-dark">FIRST 15 MINUTES COMPLIMENTARY</span>
            </div>

            {/* Headline */}
            <h1 className="heading-display" style={{ marginBottom: '1.5rem', letterSpacing: '-0.035em' }}>
              Your Space.<br />One Hour.<br />Better Decisions.
            </h1>

            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1875rem)', color: 'var(--color-charcoal-light)', maxWidth: '520px', lineHeight: 1.7, marginBottom: '1rem' }}>
              Professional design consultation for homes, rentals and commercial spaces — without committing to a complete interior project.
            </p>

            <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'var(--color-grey)', marginBottom: '2rem' }}>
              📍 On-site consultations across Mumbai — Bandra to Churchgate
            </p>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.025em' }}>₹3,999</span>
              <span className="label-caps" style={{ color: 'var(--color-grey)' }}>60-MINUTE SESSION · FIRST 15 MINS COMPLIMENTARY</span>
            </div>

            {/* CTAs and Availability */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <Link href="/book" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '0.8125rem' }}>
                See Availability
                <ArrowRight size={15} />
              </Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }}></span>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>Only 3 slots left this week</span>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)', marginBottom: '2.5rem' }}>
              ⭐ Trusted by over 250+ clients in Mumbai.
            </p>
          </div>

          {/* Hero feature cards */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '4rem' }}>
            {['On-site or video consultation', 'Fixed duration. Fixed price.', 'Pay before. Guaranteed slot.'].map((f) => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={14} style={{ color: 'var(--color-charcoal)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-light)', fontWeight: 500 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div style={{ borderTop: '1px solid var(--color-light-grey)', borderBottom: '1px solid var(--color-light-grey)', padding: '1.25rem 0', background: 'var(--color-white)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <p className="label-caps" style={{ color: 'var(--color-charcoal)' }}>
            Residential · Rental · Modular · Office · Retail · Hospitality
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-grey)' }}>
            Professional design guidance when you need it.
          </p>
        </div>
      </div>

      {/* ── PROBLEM SECTION ── */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2 className="heading-2" style={{ marginBottom: '1.5rem' }}>
                You don't always need a full interior project.
              </h2>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-light)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Sometimes you simply need someone experienced to answer the right questions.
              </p>
              <Link href="/book" className="btn btn-primary" style={{ padding: '0.875rem 1.75rem', fontSize: '0.75rem' }}>
                Book a Consultation
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                'Should this wall be removed?',
                'Where should the storage go?',
                'Which material makes sense?',
                'Is this layout actually practical?',
                'Where should the lighting go?',
                'Should I renovate or simply redesign?',
              ].map((q, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1.125rem 0',
                    borderBottom: '1px solid var(--color-light-grey)',
                    fontSize: '1.0625rem',
                    color: 'var(--color-charcoal)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                  }}
                >
                  "{q}"
                </div>
              ))}
              <p style={{ paddingTop: '1.25rem', fontSize: '0.875rem', color: 'var(--color-grey)' }}>
                TAAS exists for exactly those decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE CONSULT ON ── */}
      <section className="section" style={{ background: 'var(--color-off-white)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>What We Consult On</p>
            <h2 className="heading-2">Expert guidance across every area of design.</h2>
          </div>
          <div className="grid-4">
            {CONSULT_AREAS.map((area, i) => (
              <div
                key={i}
                style={{
                  padding: '1.75rem',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-light-grey)',
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-charcoal)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-light-grey)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                <p style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-grey)', marginBottom: '0.75rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{area.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ background: 'var(--color-black)', color: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <p className="label-caps" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>How It Works</p>
            <h2 className="heading-2">Simple. Professional. Efficient.</h2>
          </div>
          <div className="grid-4">
            {STEPS.map((step, i) => (
              <div key={i} style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                <p style={{ fontSize: '1.75rem', fontWeight: 800, color: 'rgba(255,255,255,0.15)', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>{step.num}</p>
                <h3 style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.12em', marginBottom: '0.75rem', color: 'var(--color-white)' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <p style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.015em', marginBottom: '0.25rem' }}>Ready to get started?</p>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)' }}>Your appointment is confirmed after successful payment.</p>
            </div>
            <Link href="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-white)', color: 'var(--color-black)', padding: '0.875rem 2rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Book My Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: 'var(--color-off-white)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>Client Stories</p>
            <h2 className="heading-2">What our clients say.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { quote: "TAAS saved us from making a ₹5 Lakh mistake with our living room layout. The 60-minute session was the best investment we made.", name: "Riya S.", loc: "Bandra West", stars: 5 },
              { quote: "I just needed a professional set of eyes on my modular kitchen plans before sending them to the contractor. Got exactly the clarity I needed.", name: "Kunal M.", loc: "Andheri West", stars: 5 },
              { quote: "We were confused about material finishes for our cafe. The designer solved our dilemma in 30 minutes and suggested better alternatives.", name: "The Daily Brew", loc: "Colaba", stars: 5 }
            ].map((t, i) => (
              <div key={i} style={{ padding: '2rem', background: 'var(--color-white)', border: '1px solid var(--color-light-grey)' }}>
                <div style={{ display: 'flex', gap: '0.25rem', color: '#fbbf24', marginBottom: '1rem' }}>
                  {'★'.repeat(t.stars)}
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--color-charcoal)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>"{t.quote}"</p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.875rem' }}>{t.name}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-grey)' }}>{t.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTATION TIMELINE ── */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>Inside a TAAS Session</p>
            <h2 className="heading-2">What happens in 60 minutes.</h2>
          </div>

          {/* Visual timeline bar */}
          <div style={{ display: 'flex', height: '6px', marginBottom: '3rem', background: 'var(--color-light-grey)', overflow: 'hidden' }}>
            <div style={{ width: '25%', background: 'var(--color-mid-grey)' }} />
            <div style={{ width: '25%', background: 'var(--color-charcoal-light)' }} />
            <div style={{ width: '50%', background: 'var(--color-charcoal)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { time: '00:00 — 15:00', phase: 'DISCOVER', title: 'First 15 minutes complimentary.', desc: 'Understand the space, requirements and goals.' },
              { time: '15:00 — 30:00', phase: 'DIAGNOSE', title: 'Identify design problems.', desc: 'Pinpoint issues and explore possible solutions.' },
              { time: '30:00 — 60:00', phase: 'DIRECT', title: 'Professional recommendations.', desc: 'Detailed, actionable design direction you can act on.' },
            ].map((seg, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--color-light-grey)' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', color: 'var(--color-grey)', marginBottom: '0.5rem' }}>{seg.time}</p>
                <p className="label-caps" style={{ marginBottom: '0.75rem', color: 'var(--color-charcoal)' }}>{seg.phase}</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{seg.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="section" style={{ background: 'var(--color-off-white)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>Pricing</p>
            <h2 className="heading-2">Simple, transparent pricing.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Quick Consultation', duration: '30 Minutes', price: '₹1,999', desc: 'For focused design questions and quick decisions.', cta: 'Reserve 30 Minutes', featured: false, bullets: ['1 specific room or problem', 'Quick material feedback', 'Layout sanity check'] },
              { name: 'TAAS', duration: '60 Minutes', price: '₹3,999', badge: 'MOST POPULAR', desc: 'First 15 minutes complimentary. For detailed design consultation.', cta: 'Check Availability', featured: true, bullets: ['Up to 3 rooms/spaces', 'Detailed layout planning', 'Storage & lighting strategy'] },
              { name: 'Deep Dive', duration: '90 Minutes', price: '₹5,999', desc: 'For larger spaces or multiple design concerns.', cta: 'Book 90 Minutes', featured: false, bullets: ['Full home walkthrough', 'Complete material palette', 'Contractor briefing prep'] },
            ].map((plan) => (
              <div
                key={plan.name}
                style={{
                  padding: '2rem',
                  background: plan.featured ? 'var(--color-near-black)' : 'var(--color-white)',
                  border: `1px solid ${plan.featured ? 'var(--color-near-black)' : 'var(--color-light-grey)'}`,
                  color: plan.featured ? 'var(--color-white)' : 'var(--color-near-black)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  height: '100%',
                }}
              >
                {plan.badge && (
                  <span style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.15em', padding: '0.3rem 0.625rem', background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', display: 'inline-block', width: 'fit-content' }}>
                    {plan.badge}
                  </span>
                )}
                <div>
                  <p style={{ fontSize: '0.75rem', letterSpacing: '0.08em', opacity: 0.6, marginBottom: '0.25rem' }}>{plan.duration}</p>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>{plan.name}</h3>
                </div>
                <div>
                  <p style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>{plan.price}</p>
                </div>
                <p style={{ fontSize: '0.875rem', opacity: 0.65, lineHeight: 1.65 }}>{plan.desc}</p>
                
                <ul style={{ margin: '1rem 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {plan.bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.8125rem', opacity: 0.8 }}>
                      <CheckCircle size={14} style={{ flexShrink: 0, marginTop: '2px', color: plan.featured ? 'var(--color-white)' : 'var(--color-near-black)' }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.875rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    background: plan.featured ? 'var(--color-white)' : 'var(--color-near-black)',
                    color: plan.featured ? 'var(--color-near-black)' : 'var(--color-white)',
                    marginTop: 'auto'
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Commercial */}
          <div style={{ marginTop: '1.5rem', padding: '2rem', border: '1px solid var(--color-light-grey)', background: 'var(--color-white)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '0.5rem' }}>Commercial Consultation</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>From ₹7,500</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)', marginTop: '0.25rem' }}>Offices · Cafés · Restaurants · Retail · Studios</p>
            </div>
            <Link href="/commercial" className="btn btn-secondary" style={{ padding: '0.875rem 1.75rem', fontSize: '0.75rem' }}>
              Enquire for Commercial
            </Link>
          </div>
          
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal-light)' }}>
              Full refund available up to 24 hours before your slot. <Link href="/cancellation-policy" style={{ color: 'var(--color-charcoal)', fontWeight: 600 }}>Read Cancellation Policy.</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── DESIGNER PROFILE & GALLERY ── */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>The Expert</p>
              <h2 className="heading-2" style={{ marginBottom: '1.5rem' }}>Meet your designer.</h2>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal)', fontWeight: 500, marginBottom: '0.5rem' }}>Sharvayu Sawant, Principal Designer</p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                With over 12 years of experience designing premium residential and commercial spaces across Mumbai, Sharvayu brings practical, contractor-ready advice to every consultation.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                <li style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)', display: 'flex', gap: '0.5rem' }}><CheckCircle size={14} color="var(--color-grey)"/> 150+ Projects Completed</li>
                <li style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)', display: 'flex', gap: '0.5rem' }}><CheckCircle size={14} color="var(--color-grey)"/> B.Arch, Sir J.J. College of Architecture</li>
              </ul>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ aspectRatio: '4/5', background: 'var(--color-light-grey)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #e5e5e5, #f5f5f5)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ aspectRatio: '1', background: 'var(--color-light-grey)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #e5e5e5, #f5f5f5)' }} />
                </div>
                <div style={{ aspectRatio: '1', background: 'var(--color-light-grey)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #e5e5e5, #f5f5f5)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
            <div>
              <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>FAQ</p>
              <h2 className="heading-2" style={{ marginBottom: '1.5rem' }}>Common questions.</h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Still have questions? We're happy to help.
              </p>
              <Link href="/contact" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem' }}>
                Contact Us
              </Link>
            </div>
            <FAQAccordion items={FAQS.slice(0, 5)} />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: 'var(--color-near-black)', color: 'var(--color-white)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="label-caps" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>Take the next step</p>
          <h2 className="heading-1" style={{ marginBottom: '1rem', color: 'var(--color-white)' }}>
            Stop overthinking your layout.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.55)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            A single 60-minute session can save you weeks of stress and thousands in contractor mistakes. Let's solve your design problems today.
          </p>
          <Link href="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-white)', color: 'var(--color-black)', padding: '1rem 2.5rem', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Check Available Slots <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
