'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';

function useInView(t = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: t });
    o.observe(el); return () => o.disconnect();
  }, [t]);
  return { ref, v };
}

const HOOKS = ['Is your layout actually working?','Will your furniture really fit?','Are you choosing the right materials?','Is your lighting planned correctly?','Is your design worth approving?'];

function RotatingHook() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (done) return;
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIdx(p => { const n = p + 1; if (n >= HOOKS.length) { setDone(true); return p; } return n; });
        setFading(false);
      }, 300);
    }, 1900);
    return () => clearInterval(t);
  }, [done]);
  return (
    <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1rem,2vw,1.25rem)', color: '#7D766C', opacity: fading ? 0 : 1, transition: 'opacity 0.3s ease' }}>
      {done ? 'Better to check before you commit.' : HOOKS[idx]}
    </p>
  );
}

function getHL(src: string|null, cmp: string|null) {
  if (src==='google'&&cmp==='consultation') return ['Interior Design Consultation in Mumbai','Get practical design direction without committing to a full interior project.'];
  if (src==='google'&&cmp==='second-opinion') return ['Already Have a Design? Get a Second Opinion.','Validate every critical decision before execution begins.'];
  if (src==='meta'&&cmp==='mistakes') return ['Before You Renovate,\nCheck These 3 Things.','Layout. Materials. Lighting. One wrong decision can become an expensive correction.'];
  if (src==='meta'&&cmp==='materials') return ["Choosing Materials?\nDon't Choose From Samples Alone.",'Get an expert eye on your selections before you commit.'];
  if (src==='meta'&&cmp==='second-opinion') return ['Before You Approve the Design,\nGet Another Perspective.','One session. Practical direction. No project commitment required.'];
  return ["Before You Spend on Your Interiors,\nCheck This.",'One wrong decision can become an expensive correction.'];
}

function Inner() {
  const sp = useSearchParams();
  const [hl, sub] = getHL(sp.get('utm_source'), sp.get('utm_campaign'));
  const [phase, setPhase] = useState<'word'|'hero'>('word');
  useEffect(() => { const t = setTimeout(() => setPhase('hero'), 1300); return () => clearTimeout(t); }, []);

  const s1 = useInView(0.08);
  const s2 = useInView(0.12);
  const s3 = useInView(0.12);
  const s4 = useInView(0.12);
  const s5 = useInView(0.12);
  const s6 = useInView(0.12);

  return (
    <div style={{ background: '#F8F5F0', color: '#1C1A17', overflowX: 'hidden', fontFamily: 'var(--font-primary)' }}>

      {/* ── HERO (PURE TYPOGRAPHY) ── */}
      <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        
        {/* Cinematic TAAS wordmark (Watermark) */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '50%', left: '50%', zIndex: 0,
          fontFamily: 'var(--font-heading)', fontWeight: 900, color: '#E8E1D8', letterSpacing: '0.05em', lineHeight: 1,
          fontSize: 'clamp(8rem, 28vw, 32rem)', whiteSpace: 'nowrap', pointerEvents: 'none',
          transform: phase === 'word' ? 'translate(-50%,-50%) scale(1)' : 'translate(-50%,-50%) scale(2.5)',
          opacity: phase === 'word' ? 1 : 0.4,
          transition: 'transform 1.3s cubic-bezier(0.16,1,0.3,1), opacity 1s ease 0.4s', willChange: 'transform,opacity'
        }}>TAAS</div>

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 3, width: '100%', maxWidth: 1200, margin: '0 auto',
          padding: 'clamp(2rem,5vw,4rem) clamp(1.5rem,6vw,5rem)',
          opacity: phase === 'hero' ? 1 : 0, transform: phase === 'hero' ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s'
        }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            
            {/* Top Eyebrow */}
            <div style={{ borderBottom: '1px solid #D5CFC6', paddingBottom: '1.5rem', maxWidth: '300px' }}>
              <p style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#B0A89E' }}>
                TAAS — Design Direction
              </p>
            </div>

            {/* Massive Headline */}
            <div>
              <h1 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 600, lineHeight: 1.05,
                fontSize: 'clamp(3rem,8vw,7rem)', letterSpacing: '-0.03em', color: '#1C1A17',
                marginBottom: '1.5rem', whiteSpace: 'pre-line'
              }}>
                {hl}
              </h1>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: '#8C6A4E', maxWidth: 640, lineHeight: 1.4 }}>
                {sub}
              </p>
            </div>

            {/* CTA & Hooks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '2rem' }}>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
                <Link href="/book" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                  background: '#1C1A17', color: '#fff',
                  padding: '1.25rem 2.5rem', fontSize: '0.8125rem', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none',
                  transition: 'background 0.2s', border: '1px solid #1C1A17'
                }}>CHECK MY SPACE <ArrowRight size={14} /></Link>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', color: '#7D766C', textTransform: 'uppercase' }}>60 MIN · ₹3,999</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: '40px', height: '1px', background: '#D5CFC6' }} />
                <div style={{ color: '#1C1A17', fontWeight: 500 }}>
                  <RotatingHook />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── PROBLEM RECOGNITION ── */}
      <section style={{ padding: 'clamp(5rem,10vw,9rem) 0', background: '#F8F5F0' }}>
        <div ref={s1.ref} style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1.5rem,6vw,5rem)', opacity: s1.v?1:0, transform: s1.v?'none':'translateY(18px)', transition: 'all 0.9s ease' }}>

          {/* Oversized chapter label */}
          <p style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B0A89E', marginBottom: '4rem' }}>Why This Exists</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.025em', color: '#1C1A17', marginBottom: '2rem' }}>
                You don't need a full interior designer.
              </h2>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: '#8C6A4E', lineHeight: 1.3 }}>
                You might just need the right direction.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 'clamp(1rem,1.5vw,1.25rem)', color: '#504B44', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Most expensive design mistakes don't happen because of bad taste. They happen because of decisions made without enough information — before execution begins.
              </p>
              <Link href="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#1C1A17', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: 3 }}>
                Get My Space Reviewed <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* 3 problems — editorial grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', marginTop: '6rem', borderTop: '1px solid #E8E1D8' }}>
            {[
              { n: '01', label: 'LAYOUT', body: 'Will the flow actually work? Is every square foot being used intelligently?' },
              { n: '02', label: 'MATERIALS', body: 'Are you choosing what looks good, or what performs for your specific space?' },
              { n: '03', label: 'LIGHTING', body: 'Is your electrical planned before the ceiling is shut? Most people plan it last.' },
            ].map((p, i) => (
              <div key={p.n} style={{
                padding: '3rem 2.5rem', borderRight: i < 2 ? '1px solid #E8E1D8' : 'none',
                opacity: s1.v ? 1 : 0, transform: s1.v ? 'none' : 'translateY(12px)',
                transition: `all 0.8s ease ${0.2 + i * 0.15}s`
              }}>
                <p style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.15em', color: '#B0A89E', marginBottom: '2rem' }}>{p.n}</p>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, letterSpacing: '0.04em', color: '#1C1A17', marginBottom: '1.25rem' }}>{p.label}</h3>
                <p style={{ fontSize: '0.9375rem', color: '#7D766C', lineHeight: 1.65 }}>{p.body}</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(2rem,4vw,3rem)', color: '#8C6A4E', textAlign: 'center', marginTop: '5rem' }}>
            That's TAAS.
          </p>
        </div>
      </section>

      {/* ── TAAS REVEAL BAND ── */}
      <section style={{ background: '#1C1A17', padding: 'clamp(4rem,8vw,7rem) 0', overflow: 'hidden', position: 'relative' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(12rem,30vw,28rem)', color: 'rgba(255,255,255,0.025)', letterSpacing: '-0.05em', lineHeight: 0.8, pointerEvents: 'none' }}>TAAS</div>
        <div ref={s2.ref} style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1.5rem,6vw,5rem)', position: 'relative', zIndex: 1, opacity: s2.v?1:0, transform: s2.v?'none':'translateY(16px)', transition: 'all 0.9s ease' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 600, letterSpacing: '-0.025em', color: '#fff', maxWidth: 700, lineHeight: 1.1, marginBottom: '2rem' }}>
            Design clarity<br />before design commitment.
          </h2>
          <p style={{ fontSize: 'clamp(1rem,1.8vw,1.25rem)', color: 'rgba(255,255,255,0.5)', maxWidth: 520, lineHeight: 1.6 }}>
            TAAS is a design consultation and direction service. We help you make better decisions about your space before you commit time, money and materials.
          </p>
        </div>
      </section>

      {/* ── 3 STEPS ── */}
      <section style={{ background: '#F0EBE3', padding: 'clamp(5rem,10vw,9rem) 0' }}>
        <div ref={s3.ref} style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1.5rem,6vw,5rem)', opacity: s3.v?1:0, transform: s3.v?'none':'translateY(18px)', transition: 'all 0.9s ease' }}>
          <p style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B0A89E', marginBottom: '5rem' }}>The Experience</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start', marginBottom: '6rem' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem,4vw,3.5rem)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#1C1A17' }}>
                Bring us<br />the problem.
              </h2>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '2rem', color: '#8C6A4E', marginTop: '1rem' }}>Leave with direction.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { n: '01', t: 'SHOW',   b: 'Your space, floor plan, inspiration or problem.' },
                { n: '02', t: 'REVIEW', b: 'We identify what needs attention — before execution.' },
                { n: '03', t: 'DECIDE', b: 'You leave knowing exactly what to do next.' },
              ].map((step, i) => (
                <div key={step.n} style={{
                  display: 'grid', gridTemplateColumns: '48px 1fr', gap: '1.5rem',
                  padding: '2.5rem 0', borderBottom: '1px solid #D5CFC6',
                  opacity: s3.v ? 1 : 0, transform: s3.v ? 'none' : 'translateX(20px)',
                  transition: `all 0.7s ease ${0.15 + i * 0.15}s`
                }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.75rem', color: '#D5CFC6', lineHeight: 1, paddingTop: '0.25rem' }}>{step.n}</p>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.08em', color: '#1C1A17', marginBottom: '0.5rem' }}>{step.t}</h3>
                    <p style={{ fontSize: '1rem', color: '#7D766C', lineHeight: 1.6 }}>{step.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link href="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#1C1A17', color: '#fff', padding: '1.25rem 2.5rem', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Book My TAAS Session <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ background: '#fff', padding: 'clamp(5rem,10vw,9rem) 0' }}>
        <div ref={s4.ref} style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1.5rem,6vw,5rem)', opacity: s4.v?1:0, transform: s4.v?'none':'translateY(18px)', transition: 'all 0.9s ease' }}>
          <p style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B0A89E', marginBottom: '5rem' }}>Pricing</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem,4vw,3.5rem)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.025em', color: '#1C1A17', marginBottom: '2rem' }}>Start with one hour.</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(4rem,8vw,6rem)', color: '#8C6A4E', lineHeight: 1, marginBottom: '1rem' }}>₹3,999</p>
              <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.15em', color: '#B0A89E', textTransform: 'uppercase', marginBottom: '2.5rem' }}>60-minute design consultation</p>
              <p style={{ fontSize: '1rem', color: '#7D766C', marginBottom: '3rem', lineHeight: 1.6 }}>No full-project commitment required. No hidden charges. If TAAS isn't the right fit, we'll tell you.</p>
              <Link href="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#1C1A17', color: '#fff', padding: '1.25rem 2.5rem', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Get My Space Reviewed <ArrowRight size={14} />
              </Link>
            </div>

            <div style={{ borderLeft: '1px solid #E8E1D8', paddingLeft: '4rem' }}>
              {['Space discussion','Design analysis','Practical recommendations','Questions answered','Next-step direction'].map((item, i) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 0', borderBottom: '1px solid #F0EBE3', opacity: s4.v?1:0, transform: s4.v?'none':'translateX(10px)', transition: `all 0.6s ease ${0.1+i*0.1}s` }}>
                  <Check size={16} color="#8C6A4E" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1rem', fontWeight: 500, color: '#1C1A17' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST ── */}
      <section style={{ background: '#E8E1D8', padding: 'clamp(5rem,10vw,9rem) 0' }}>
        <div ref={s5.ref} style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1.5rem,6vw,5rem)', opacity: s5.v?1:0, transform: s5.v?'none':'translateY(18px)', transition: 'all 0.9s ease' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderBottom: '1px solid #D5CFC6', marginBottom: '5rem' }}>
            {[['250+','Projects reviewed'],['12 yrs','Design experience'],['100%','Objective advice']].map(([n,l],i) => (
              <div key={l} style={{ padding: '2.5rem 2rem', textAlign: 'center', borderRight: i<2?'1px solid #D5CFC6':'none' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700, color: '#1C1A17', marginBottom: '0.5rem' }}>{n}</p>
                <p style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B0A89E' }}>{l}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              { q: 'TAAS saved us from a ₹5 Lakh mistake with our living room layout. The 60-minute session was the best investment we made.', by: 'Riya S.', tag: 'Bandra West' },
              { q: "I just needed a professional eye on my modular kitchen plans. Got exactly the clarity I needed before sending to the contractor.", by: 'Kunal M.', tag: 'Andheri West' }
            ].map((t,i) => (
              <div key={i} style={{ background: '#fff', padding: '3rem', opacity: s5.v?1:0, transform: s5.v?'none':'translateY(12px)', transition: `all 0.7s ease ${i*0.15}s` }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.25rem', color: '#1C1A17', lineHeight: 1.55, marginBottom: '2rem' }}>"{t.q}"</p>
                <div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1C1A17' }}>{t.by}</p>
                  <p style={{ fontSize: '0.75rem', color: '#B0A89E', marginTop: '0.25rem' }}>{t.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CLOSE ── */}
      <section style={{ background: '#100F0D', padding: 'clamp(6rem,12vw,11rem) 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(12rem,30vw,30rem)', color: 'rgba(255,255,255,0.025)', letterSpacing: '-0.05em', lineHeight: 0.8, pointerEvents: 'none' }}>TAAS</div>
        <div ref={s6.ref} style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1.5rem,6vw,5rem)', opacity: s6.v?1:0, transform: s6.v?'none':'translateY(18px)', transition: 'all 1s ease' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem,5.5vw,5rem)', fontWeight: 600, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Before you spend more,
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#C4956A', marginBottom: '4rem' }}>
            get some direction.
          </p>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>TAAS</p>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.25rem', color: 'rgba(255,255,255,0.45)', marginBottom: '3.5rem' }}>Design clarity before commitment.</p>
          <Link href="/book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', color: '#1C1A17', padding: '1.25rem 2.75rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Book a TAAS Session <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* MOBILE STICKY */}
      <div className="ad-sticky-cta md:hidden">
        <Link href="/book" className="ad-sticky-btn">CHECK MY SPACE · ₹3,999</Link>
      </div>
    </div>
  );
}

export default function AdPage() {
  return <Suspense fallback={<div style={{ minHeight: '100vh', background: '#F8F5F0' }} />}><Inner /></Suspense>;
}
