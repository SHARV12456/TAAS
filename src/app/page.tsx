'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      setProgress(Math.max(0, Math.min(1, -rect.top / total)));
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [ref]);
  return progress;
}

function IntroReveal({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'idle' | 'zoom' | 'exit'>('idle');
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('zoom'), 800);
    const t2 = setTimeout(() => setPhase('exit'), 2800);
    const t3 = setTimeout(onDone, 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);
  return (
    <div className="taas-intro" style={{ opacity: phase === 'exit' ? 0 : 1, pointerEvents: phase === 'exit' ? 'none' : 'all', transition: phase === 'exit' ? 'opacity 1s ease' : 'none' }}>
      <div className="taas-intro-noise" aria-hidden="true" />
      <span className="taas-intro-word" style={{
        transform: phase === 'zoom' ? 'scale(20) translateZ(0)' : 'scale(1) translateZ(0)',
        opacity: phase === 'zoom' ? 0 : 1,
        transition: phase === 'zoom' ? 'transform 2s cubic-bezier(0.16,1,0.3,1), opacity 1.2s ease 0.5s' : 'none',
      }}>TAAS</span>
    </div>
  );
}

const FRAGMENTS = ['Space', 'Budget', 'Layout', 'Materials', 'Lighting', 'Function', 'Aesthetic'];
const PROCESS_STEPS = [
  { num: '01', word: 'TALK',       body: "Tell us what you're trying to achieve." },
  { num: '02', word: 'UNDERSTAND', body: 'We understand the space, lifestyle, requirements and constraints.' },
  { num: '03', word: 'DEFINE',     body: 'We identify what actually needs to be solved.' },
  { num: '04', word: 'DESIGN',     body: 'We develop the direction, recommendations and design decisions.' },
  { num: '05', word: 'DECIDE',     body: 'You leave with clarity on what to do next.' },
];
const SERVICES = [
  { num: '01', title: 'DESIGN DIRECTION',           body: "You have the space.\nWe help you understand what it should become." },
  { num: '02', title: 'SPACE PLANNING',             body: 'Better planning before expensive decisions.' },
  { num: '03', title: 'MATERIAL & FINISH GUIDANCE', body: 'Know what to choose, why to choose it, and where to use it.' },
  { num: '04', title: 'DESIGN CONSULTATION',        body: "A focused design session to solve the decisions you're stuck on." },
  { num: '05', title: 'PROJECT REVIEW',             body: 'An experienced design eye before you commit to execution.' },
];

/* Pre-defined components to avoid hooks-in-map */
function ServiceItem({ s, idx }: { s: typeof SERVICES[0]; idx: number }) {
  const { ref, visible } = useInView(0.2);
  return (
    <div ref={ref} className={`taas-service-item ${visible ? 'in-view' : ''} ${idx % 2 === 1 ? 'reverse' : ''}`}>
      <div className="taas-service-num">{s.num}</div>
      <div className="taas-service-content">
        <h3 className="taas-service-title">{s.title}</h3>
        <p className="taas-service-body">{s.body}</p>
      </div>
    </div>
  );
}

function PricingCard({ p }: { p: { name: string; duration: string; price: string; desc: string; featured?: boolean } }) {
  const { ref, visible } = useInView(0.2);
  return (
    <div ref={ref} className={`taas-pricing-card ${p.featured ? 'featured' : ''} ${visible ? 'in-view' : ''}`}>
      <span className="taas-pricing-duration">{p.duration}</span>
      <h3 className="taas-pricing-name">{p.name}</h3>
      <p className="taas-pricing-price">{p.price}</p>
      <p className="taas-pricing-desc">{p.desc}</p>
      <Link href="/book" className={p.featured ? 'taas-cta-primary' : 'taas-cta-outline'}>Reserve</Link>
    </div>
  );
}

function Testimonial({ t, i }: { t: { quote: string; name: string; loc: string }; i: number }) {
  const { ref, visible } = useInView(0.2);
  return (
    <div ref={ref} className={`taas-testimonial ${visible ? 'in-view' : ''}`} style={{ transitionDelay: `${i * 0.15}s` }}>
      <span className="taas-testimonial-num">{String(i + 1).padStart(2, '0')}</span>
      <blockquote className="taas-testimonial-quote">"{t.quote}"</blockquote>
      <footer className="taas-testimonial-footer"><strong>{t.name}</strong><span>{t.loc}</span></footer>
    </div>
  );
}

const TESTIMONIALS = [
  { quote: 'TAAS saved us from making a ₹5 Lakh mistake with our living room layout. The 60-minute session was the best investment we made.', name: 'Riya S.', loc: 'Bandra West' },
  { quote: 'I needed a professional eye on my modular kitchen plans before sending them to the contractor. Got exactly the clarity I needed.', name: 'Kunal M.', loc: 'Andheri West' },
  { quote: 'The designer solved our material dilemma in 30 minutes and suggested better alternatives we had never considered.', name: 'The Daily Brew', loc: 'Colaba' },
];

const PRICING = [
  { name: 'Quick Consultation', duration: '30 Min', price: '₹1,999', desc: 'One focused space or question.' },
  { name: 'TAAS Session', duration: '60 Min', price: '₹3,999', desc: 'First 15 minutes complimentary. Most popular.', featured: true },
  { name: 'Deep Dive', duration: '90 Min', price: '₹5,999', desc: 'Larger spaces or multiple concerns.' },
];

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [bgOffset, setBgOffset] = useState(0);

  useEffect(() => {
    const h = () => setBgOffset(window.scrollY * 0.05);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const hero      = useInView(0.2);
  const ch01      = useInView(0.1);
  const ch02      = useInView(0.1);
  const services  = useInView(0.1);
  const transform = useInView(0.1);
  const ctaSec    = useInView(0.2);

  const processSectionRef = useRef<HTMLElement>(null);
  const transformRef      = useRef<HTMLElement>(null);
  const processProgress   = useScrollProgress(processSectionRef as React.RefObject<HTMLElement | null>);
  const transformProg     = useScrollProgress(transformRef as React.RefObject<HTMLElement | null>);

  const activeStep    = Math.min(PROCESS_STEPS.length - 1, Math.floor(processProgress * PROCESS_STEPS.length));
  const transformPhase = transformProg < 0.33 ? 0 : transformProg < 0.66 ? 1 : 2;

  return (
    <>
      {!introComplete && <IntroReveal onDone={() => setIntroComplete(true)} />}
      <Navbar />

      <main style={{ opacity: introComplete ? 1 : 0, transition: 'opacity 0.8s ease' }}>

        {/* ── HERO ── */}
        <section className="taas-hero" id="hero">
          <div className="taas-bg-word" aria-hidden="true" style={{ transform: `translateY(${bgOffset}px)` }}>TAAS</div>
          <div ref={hero.ref} className={`taas-hero-content ${hero.visible ? 'in-view' : ''}`}>
            <p className="taas-eyebrow">Design Consultation · Mumbai</p>
            <h1 className="taas-hero-headline">
              Design should not begin<br />with furniture.<br />
              <em>It should begin with<br />understanding.</em>
            </h1>
            <p className="taas-hero-sub">Design consultation, direction &amp; clarity for spaces that deserve to be thought through.</p>
            <div className="taas-hero-ctas">
              <Link href="/book" className="taas-cta-primary">Book a Consultation</Link>
              <Link href="#services" className="taas-cta-ghost">Explore TAAS</Link>
            </div>
          </div>
          <div className="taas-scroll-hint" aria-hidden="true">
            <span>Scroll</span>
            <div className="taas-scroll-line" />
          </div>
        </section>

        {/* ── CHAPTER 01 ── */}
        <section className="taas-chapter taas-ch01">
          <div ref={ch01.ref} className={`container taas-ch01-inner ${ch01.visible ? 'in-view' : ''}`}>
            <p className="taas-chapter-label">Chapter 01</p>
            <h2 className="taas-chapter-headline">
              You know what you want.<br />
              <span className="taas-muted">You just don't know where to begin.</span>
            </h2>
            <div className="taas-fragments" aria-hidden="true">
              {FRAGMENTS.map((f, i) => (
                <span key={f} className={`taas-fragment ${ch01.visible ? 'visible' : ''}`} style={{ transitionDelay: `${0.4 + i * 0.12}s` }}>{f}</span>
              ))}
            </div>
            <p className="taas-chapter-body">
              Every project begins with a tangle of decisions. Competing priorities. Expensive mistakes waiting to happen. A vision clear in your head but impossible to articulate.
            </p>
          </div>
        </section>

        {/* ── CHAPTER 02 ── */}
        <section className="taas-chapter taas-ch02" id="about">
          <div ref={ch02.ref} className={`container taas-ch02-inner ${ch02.visible ? 'in-view' : ''}`}>
            <p className="taas-chapter-label">Chapter 02</p>
            <h2 className="taas-ch02-hook">That's where TAAS begins.</h2>
            <p className="taas-ch02-sub">TAAS is the layer between your idea and the finished space — bringing professional design thinking to every decision.</p>
            <div className="taas-journey">
              {['IDEA', 'DIRECTION', 'DESIGN', 'DECISION'].map((word, i) => (
                <div key={word} className={`taas-journey-step ${ch02.visible ? 'visible' : ''}`} style={{ transitionDelay: `${0.2 + i * 0.18}s` }}>
                  <span className="taas-journey-word">{word}</span>
                  {i < 3 && <span className="taas-journey-arrow">→</span>}
                </div>
              ))}
            </div>
            <p className="taas-ch02-body">12 years. 250+ projects. One principal designer — Sharvayu Sawant — personally conducting every consultation.</p>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="taas-services-section" id="services">
          <div className="container">
            <div ref={services.ref} className={`taas-services-header ${services.visible ? 'in-view' : ''}`}>
              <p className="taas-chapter-label">What We Offer</p>
              <h2 className="taas-section-title">What do you actually need?</h2>
            </div>
          </div>
          <div className="taas-services-list">
            {SERVICES.map((s, idx) => <ServiceItem key={s.num} s={s} idx={idx} />)}
          </div>
          <div className="container" style={{ paddingTop: '4rem', textAlign: 'center' }}>
            <Link href="/book" className="taas-cta-primary">Book a Consultation</Link>
          </div>
        </section>

        {/* ── PROCESS (scroll-driven) ── */}
        <section className="taas-process-section" id="process" ref={processSectionRef}>
          <div className="taas-process-sticky">
            <div className="container taas-process-layout">
              <div className="taas-process-left">
                <p className="taas-chapter-label" style={{ marginBottom: '3rem' }}>How TAAS Works</p>
                {PROCESS_STEPS.map((step, i) => (
                  <div key={step.num} className={`taas-process-step ${i === activeStep ? 'active' : ''} ${i < activeStep ? 'past' : ''}`}>
                    <span className="taas-process-num">{step.num}</span>
                    <h3 className="taas-process-word">{step.word}</h3>
                    <p className="taas-process-body">{step.body}</p>
                  </div>
                ))}
              </div>
              <div className="taas-process-right">
                <div className="taas-process-dots">
                  {PROCESS_STEPS.map((_, i) => (
                    <div key={i} className={`taas-process-dot ${i === activeStep ? 'active' : ''} ${i < activeStep ? 'past' : ''}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRANSFORMATION ── */}
        <section className="taas-transform-section" ref={transformRef}>
          <div className="taas-transform-sticky">
            <div ref={transform.ref} className={`container taas-transform-inner ${transform.visible ? 'in-view' : ''}`}>
              <p className="taas-chapter-label">The Transformation</p>
              <div className="taas-transform-stages">
                {[
                  { label: 'BEFORE', word: 'Uncertainty', body: 'A space with potential — but no direction, no plan, and too many decisions.' },
                  { label: 'THROUGH', word: 'Direction', body: 'Design thinking applied. Materials, layouts and concepts brought into focus.' },
                  { label: 'AFTER', word: 'Clarity', body: 'You leave with a clear, confident, actionable design direction.' },
                ].map((stage, i) => (
                  <div key={i} className={`taas-transform-stage ${transformPhase >= i ? 'active' : ''}`}>
                    <span className="taas-transform-label">{stage.label}</span>
                    <h2 className="taas-transform-word">{stage.word}</h2>
                    <p>{stage.body}</p>
                  </div>
                ))}
              </div>
              <p className="taas-transform-tagline">From uncertainty to direction.</p>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="taas-testimonials-section">
          <div className="container">
            <p className="taas-chapter-label" style={{ marginBottom: '4rem' }}>Client Stories</p>
            <div className="taas-testimonials-grid">
              {TESTIMONIALS.map((t, i) => <Testimonial key={i} t={t} i={i} />)}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="taas-pricing-section">
          <div className="container">
            <p className="taas-chapter-label" style={{ marginBottom: '1rem' }}>Pricing</p>
            <h2 className="taas-section-title" style={{ marginBottom: '4rem' }}>Simple. Transparent. Fixed.</h2>
            <div className="taas-pricing-grid">
              {PRICING.map((p) => <PricingCard key={p.name} p={p} />)}
            </div>
            <p className="taas-pricing-note">Full refund up to 24 hours before your slot. <Link href="/cancellation-policy" style={{ color: 'var(--color-charcoal)' }}>Cancellation Policy →</Link></p>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="taas-cta-section">
          <div className="taas-cta-bg-word" aria-hidden="true">TAAS</div>
          <div ref={ctaSec.ref} className={`container taas-cta-content ${ctaSec.visible ? 'in-view' : ''}`}>
            <h2 className="taas-cta-headline">You don't need more ideas.<br />You need the right direction.</h2>
            <p className="taas-cta-brand">TAAS</p>
            <p className="taas-cta-tagline">Let's talk about your space.</p>
            <div className="taas-cta-buttons">
              <Link href="/book" className="taas-cta-primary">Book a Consultation</Link>
              <Link href="#services" className="taas-cta-ghost-dark">Explore TAAS</Link>
            </div>
          </div>
        </section>

        {/* ── FINALE ── */}
        <section className="taas-finale">
          <div className="container taas-finale-inner">
            <p className="taas-finale-word">TAAS</p>
            <p className="taas-finale-tagline">Design with direction.</p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
