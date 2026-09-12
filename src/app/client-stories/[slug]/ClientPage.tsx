"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { CLIENT_STORIES, padSlot, DURATION_LABELS } from "../data";
import "../client-stories.css";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
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

  const nextIdx = (idx + 1) % CLIENT_STORIES.length;
  const prevIdx = (idx - 1 + CLIENT_STORIES.length) % CLIENT_STORIES.length;
  const nextStory = CLIENT_STORIES[nextIdx];
  const prevStory = CLIENT_STORIES[prevIdx];

  return (
    <main className="cs-page">
      {/* ── NAVBAR ──────────────────────────────────────────────────────────── */}
      <nav className="cs-navbar">
        <Link href="/" className="cs-nav-logo">TAAS</Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/client-stories" className="cs-nav-link">← Journal</Link>
          <Link href="/" className="cs-nav-link">Main Site</Link>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <div className="cs-case-hero">
        <div className="cs-eyebrow">The TAAS Journal / {padSlot(story.slot)}</div>
        <h1 className="cs-case-headline">
          {story.indexHeadline}
        </h1>
        <div className="cs-detail-meta">
          <span style={{ color: '#111827', fontWeight: 600 }}>{name}</span>
          <span>{story.location}</span>
          <span>{DURATION_LABELS[story.consultationDuration] || 'Design Hour'}</span>
        </div>

        {hImg && (
          <motion.div 
            className="cs-case-hero-img-wrap" 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src={hImg.src} alt="" className="cs-story-img" loading="eager" />
            {hImg.illustrative && (
              <div className="cs-case-illustrative-label">
                Illustrative interior — fictionalized story
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* ── BODY ────────────────────────────────────────────────────────────── */}
      <div className="cs-case-body-content">
        
        {story.situation && (
          <FadeIn>
            <div className="cs-section-label">The Situation</div>
            {story.situation.split('\n\n').map((p, i) => (
              <p key={i} className="cs-body-text">{p}</p>
            ))}
          </FadeIn>
        )}

        {story.whatUnsureAbout && (
          <FadeIn>
            <div className="cs-section-label" style={{ marginTop: '5rem' }}>The Uncertainty</div>
            <p className="cs-body-text">{story.whatUnsureAbout}</p>
          </FadeIn>
        )}

        {story.whatTheyAsked && (
          <FadeIn>
            <blockquote className="cs-quote-block">
              {story.whatTheyAsked}
            </blockquote>
          </FadeIn>
        )}

        {story.taasLookedAt && story.taasLookedAt.length > 0 && (
          <FadeIn>
            <div className="cs-section-label" style={{ marginTop: '5rem' }}>The Analysis</div>
            <div style={{ marginTop: '3rem' }}>
              {story.taasLookedAt.map((item, i) => (
                <div key={i} className="cs-list-item">
                  <div className="cs-list-num">{padSlot(i + 1)}</div>
                  <div className="cs-list-text">{item}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {story.recommendation && (
          <FadeIn>
            <div className="cs-section-label" style={{ marginTop: '5rem' }}>The Direction</div>
            {story.recommendation.split('\n\n').map((p, i) => (
              <p key={i} className="cs-body-text">{p}</p>
            ))}
          </FadeIn>
        )}

        {story.designDecisions && story.designDecisions.length > 0 && (
          <FadeIn>
            <div className="cs-section-label" style={{ marginTop: '5rem' }}>Decisions Made</div>
            <div className="cs-decision-grid">
              {story.designDecisions.map((d, i) => (
                <div key={i} className="cs-decision-card">
                  <div className="cs-decision-col-label">Before</div>
                  <div className="cs-decision-col-text" style={{ marginBottom: '1.5rem' }}>{d.before}</div>
                  
                  <div className="cs-decision-col-label">TAAS Direction</div>
                  <div className="cs-decision-col-text" style={{ marginBottom: '1.5rem' }}>{d.taasDirection}</div>
                  
                  <div className="cs-decision-col-label" style={{ color: '#111827' }}>Outcome</div>
                  <div className="cs-decision-col-text" style={{ color: '#111827', fontWeight: 500 }}>{d.finalDecision}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {story.clientPerspective && (
          <FadeIn>
            <div className="cs-section-label" style={{ marginTop: '6rem', justifyContent: 'center' }}>
              Fictionalized Client Perspective
            </div>
            <blockquote className="cs-quote-block cs-serif" style={{ margin: '2rem 0', color: '#1A1918' }}>
              &ldquo;{story.clientPerspective}&rdquo;
            </blockquote>
            <div style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8C857B' }}>
              — {name}
            </div>
          </FadeIn>
        )}
      </div>

      {/* ── PROJECT VISUALS ───────────────────────────────────────────────── */}
      {story.projectImages && story.projectImages.length > 0 && (
        <FadeIn>
          <div className="cs-gallery-grid">
            {story.projectImages.map((img, i) => (
              <div key={i} className="cs-gallery-img-wrap">
                <img src={img.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                {img.caption && (
                  <div style={{ position: 'absolute', bottom: '-2.5rem', left: 0, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8C857B' }}>
                    {img.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      )}

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <div className="cs-cta-section" style={{ marginTop: '10rem' }}>
        <h2 className="cs-cta-title">Ask before you spend.</h2>
        <p className="cs-cta-sub">
          Sometimes you don't need a full interior design project. You just need an experienced designer to look at the decision before you commit.
        </p>
        <Link href="/book" className="cs-btn-pri-mag">
          Book a Design Hour
        </Link>
      </div>

      {/* ── FOOTER NAV ────────────────────────────────────────────────────── */}
      <div className="cs-footer-nav">
        {idx === 0 ? (
          <Link href="/client-stories" className="cs-footer-link">← All Stories</Link>
        ) : (
          <Link href={`/client-stories/${prevStory?.slug}`} className="cs-footer-link">← Prev Story</Link>
        )}
        
        {idx > 0 && idx < CLIENT_STORIES.length - 1 && (
          <Link href="/client-stories" className="cs-footer-link" style={{ color: '#2A2825' }}>All Stories</Link>
        )}

        {idx === CLIENT_STORIES.length - 1 ? (
          <Link href="/client-stories" className="cs-footer-link">All Stories →</Link>
        ) : (
          <Link href={`/client-stories/${nextStory?.slug}`} className="cs-footer-link">Next Story →</Link>
        )}
      </div>

      <div className="cs-disclaimer">
        The stories shown on this page are fictionalized examples created to demonstrate the TAAS consultation experience. They are not presented as verified client testimonials.
      </div>
    </main>
  );
}
