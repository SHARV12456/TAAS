"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { CLIENT_STORIES, padSlot, DURATION_LABELS, TOTAL_SLOTS } from "../data";
import "../client-stories.css";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function ClientPage({ slug }: { slug: string }) {
  const idx = CLIENT_STORIES.findIndex(s => s.slug === slug);
  const story = CLIENT_STORIES[idx];

  if (!story || (!story.published && story.permissionStatus !== 'approved')) {
    notFound();
  }

  const name = story.clientDisplayName || story.clientName;
  const hImg = story.heroImage;

  // Prev / next logic
  const nextIdx = (idx + 1) % CLIENT_STORIES.length;
  const prevIdx = (idx - 1 + CLIENT_STORIES.length) % CLIENT_STORIES.length;
  const nextStory = CLIENT_STORIES[nextIdx];
  const prevStory = CLIENT_STORIES[prevIdx];

  return (
    <main className="cs-page">
      {/* ── HEADER ──────────────────────────────────────────────────────────── */}
      <div style={{ position: 'fixed', top: '1.75rem', left: '5%', zIndex: 100 }}>
        <Link href="/client-stories" style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', mixBlendMode: 'difference', color: 'white' }}>
          ← Client Stories
        </Link>
      </div>

      {/* ── HERO IMAGE ──────────────────────────────────────────────────────── */}
      {hImg && (
        <div className="cs-case-hero-img-container">
          <motion.div 
            className="cs-case-hero-img-wrap" 
            style={{ viewTransitionName: `story-img-${story.slug}` }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          >
            <img src={hImg.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="eager" />
            {hImg.illustrative && (
              <div className="cs-case-illustrative-label">
                Illustrative project image — fictionalized client story.
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* ── CLIENT / LOCATION / PROJECT ─────────────────────────────────────── */}
      <div className="cs-case-header">
        <FadeIn>
          <div className="cs-eyebrow" style={{ marginBottom: '1.5rem' }}>
            Client Story / {padSlot(story.slot)}
          </div>
          
          <h1 className="cs-case-headline">
            &ldquo;{story.whatTheyAsked}&rdquo;
          </h1>
          
          <div className="cs-case-meta">
            <span>{name}</span>
            <span>{story.location} &nbsp;·&nbsp; {story.propertyType}</span>
            <span>{DURATION_LABELS[story.consultationDuration] || 'Design Hour'}</span>
          </div>
        </FadeIn>
      </div>

      {/* ── BODY ────────────────────────────────────────────────────────────── */}
      <div className="cs-case-body-content">
        
        {/* THE SITUATION */}
        {story.situation && (
          <FadeIn>
            <div className="cs-section-label" style={{ marginTop: '3rem' }}>The Situation</div>
            {story.situation.split('\n\n').map((p, i) => (
              <p key={i} className="cs-body-text">{p}</p>
            ))}
          </FadeIn>
        )}

        {/* WHAT THEY WERE UNSURE ABOUT */}
        {story.whatUnsureAbout && (
          <FadeIn>
            <div className="cs-section-label" style={{ marginTop: '4rem' }}>What They Were Unsure About</div>
            <p className="cs-body-text">{story.whatUnsureAbout}</p>
          </FadeIn>
        )}

        {/* WHAT THEY CAME TO TAAS FOR */}
        {story.topics && story.topics.length > 0 && (
          <FadeIn>
            <div className="cs-section-label" style={{ marginTop: '4rem' }}>What They Came To TAAS For</div>
            <div className="cs-topic-grid">
              {story.topics.map(t => (
                <div key={t} className="cs-topic-item">{t}</div>
              ))}
            </div>
          </FadeIn>
        )}

        {/* THE DESIGN QUESTION */}
        {story.whatTheyAsked && (
          <FadeIn>
            <div className="cs-section-label" style={{ marginTop: '4rem' }}>The Design Question</div>
            <blockquote className="cs-quote-block">
              &ldquo;{story.whatTheyAsked}&rdquo;
            </blockquote>
          </FadeIn>
        )}

        {/* WHAT TAAS LOOKED AT */}
        {story.taasLookedAt && story.taasLookedAt.length > 0 && (
          <FadeIn>
            <div className="cs-section-label" style={{ marginTop: '4rem' }}>What TAAS Looked At</div>
            <div style={{ marginTop: '2rem' }}>
              {story.taasLookedAt.map((item, i) => (
                <div key={i} className="cs-list-item">
                  <div className="cs-list-num">{padSlot(i + 1)} —</div>
                  <div className="cs-list-text">{item}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {/* THE RECOMMENDATION */}
        {story.recommendation && (
          <FadeIn>
            <div className="cs-section-label" style={{ marginTop: '4rem' }}>The Recommendation</div>
            {story.recommendation.split('\n\n').map((p, i) => (
              <p key={i} className="cs-body-text">{p}</p>
            ))}
          </FadeIn>
        )}

        {/* THE DECISION */}
        {story.designDecisions && story.designDecisions.length > 0 && (
          <FadeIn>
            <div className="cs-section-label" style={{ marginTop: '4rem' }}>The Decision</div>
            {story.designDecisions.map((d, i) => (
              <div key={i} className="cs-decision-block">
                <div className="cs-decision-label">Before</div>
                <div className="cs-decision-text">{d.before}</div>
                
                <div className="cs-decision-label" style={{ marginTop: '2rem' }}>TAAS Direction</div>
                <div className="cs-decision-text">{d.taasDirection}</div>
                
                <div className="cs-decision-label" style={{ marginTop: '2rem' }}>Final Decision</div>
                <div className="cs-decision-text">{d.finalDecision}</div>
              </div>
            ))}
          </FadeIn>
        )}

        {/* CLIENT PERSPECTIVE */}
        {story.clientPerspective && (
          <FadeIn>
            <div className="cs-section-label" style={{ marginTop: '4rem' }}>Client's Words</div>
            <blockquote className="cs-quote-block" style={{ fontStyle: 'italic', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              &ldquo;{story.clientPerspective}&rdquo;
            </blockquote>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em' }}>{name}</div>
          </FadeIn>
        )}
      </div>

      {/* ── PROJECT VISUALS ───────────────────────────────────────────────── */}
      {story.projectImages && story.projectImages.length > 0 && (
        <FadeIn>
          <div style={{ maxWidth: 'var(--taas-container)', margin: '0 auto', padding: '0 5% 6rem' }}>
            <div className="cs-section-label">The Project</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
              {story.projectImages.map((img, i) => (
                <div key={i} style={{ position: 'relative', background: 'var(--taas-bg-elevated)', aspectRatio: '4/3' }}>
                  <img src={img.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  {img.caption && (
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', color: 'white', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      {img.caption}
                    </div>
                  )}
                  {img.illustrative && (
                    <div className="cs-case-illustrative-label" style={{ bottom: 'auto', top: '1rem', background: 'rgba(0,0,0,0.4)' }}>
                      Illustrative
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      {/* ── WHAT CHANGED ──────────────────────────────────────────────────── */}
      {story.outcomes && story.outcomes.length > 0 && (
        <div className="cs-case-body-content" style={{ paddingTop: '2rem' }}>
          <FadeIn>
            <div className="cs-section-label">What Changed</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {story.outcomes.map((o, i) => (
                <li key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.5rem', color: 'var(--taas-text-muted)', lineHeight: 1 }}>•</span>
                  <span className="cs-body-text" style={{ margin: 0 }}>{o}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      )}

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <div className="cs-cta-section">
        <div className="cs-section-label">Ask Before You Spend.</div>
        <h2 className="cs-cta-title">You don't always need a full interior design project.</h2>
        <p className="cs-cta-sub">Sometimes, you just need an experienced designer to look at it before you commit.</p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/book" className="cs-btn-pri" style={{ padding: '1.2rem 2.5rem', fontSize: '0.75rem' }}>
            Book a Design Hour
          </Link>
          <Link href="/services" style={{ padding: '1.2rem 2.5rem', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taas-text-primary)', textDecoration: 'none', border: '1px solid var(--taas-line)' }}>
            Explore the Consultation →
          </Link>
        </div>
      </div>

      {/* ── NEXT / PREV FOOTER ────────────────────────────────────────────── */}
      <div style={{ maxWidth: 'var(--taas-container)', margin: '0 auto', padding: '4rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href={`/client-stories/${prevStory?.slug || ''}`} style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', textDecoration: 'none' }}>
          ← Previous
        </Link>
        
        <Link href="/client-stories" style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--taas-text-primary)', textDecoration: 'none' }}>
          All Stories
        </Link>
        
        <Link href={`/client-stories/${nextStory?.slug || ''}`} style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', textDecoration: 'none' }}>
          Next →
        </Link>
      </div>

      {/* ── DISCLAIMER ────────────────────────────────────────────────────── */}
      <div className="cs-disclaimer" style={{ borderTop: 'none', paddingBottom: '6rem' }}>
        <p>The stories shown on this page are fictionalized examples created to demonstrate the TAAS consultation experience. They are not presented as verified client testimonials.</p>
      </div>
    </main>
  );
}
