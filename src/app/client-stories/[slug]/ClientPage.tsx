"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CLIENT_STORIES, TOTAL_SLOTS, padSlot,
  DURATION_LABELS, SOURCE_LABELS,
} from "../data";
import "../client-stories.css";

function pad(n: number) { return padSlot(n); }

// ── Thin divider ─────────────────────────────────────────────────────────────
const Divider = () => (
  <div style={{ borderTop: '1px solid var(--taas-line)', margin: '5rem 0' }} />
);

// ── Section label ─────────────────────────────────────────────────────────────
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', marginBottom: '2.5rem' }}>
    {children}
  </div>
);

// ── Body text ─────────────────────────────────────────────────────────────────
const Body = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: '1.15rem', lineHeight: 1.75, color: 'var(--taas-text-soft)', margin: '0 0 1.5rem' }}>
    {children}
  </p>
);

// ── Fade-in wrapper ───────────────────────────────────────────────────────────
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function ClientPage({ slug }: { slug: string }) {
  const idx   = CLIENT_STORIES.findIndex(s => s.slug === slug);
  const story = CLIENT_STORIES[idx];

  // Route exists but story not yet approved → show honest waiting state
  const isApproved = story?.permissionStatus === 'approved';

  // Prev / next published stories
  let prevStory = null, nextStory = null;
  for (let i = 1; i <= TOTAL_SLOTS; i++) {
    const ni = (idx + i) % CLIENT_STORIES.length;
    const pi = (idx - i + CLIENT_STORIES.length) % CLIENT_STORIES.length;
    if (!nextStory && CLIENT_STORIES[ni]?.permissionStatus === 'approved') nextStory = CLIENT_STORIES[ni];
    if (!prevStory && CLIENT_STORIES[pi]?.permissionStatus === 'approved') prevStory = CLIENT_STORIES[pi];
    if (nextStory && prevStory) break;
  }

  if (!story) {
    return (
      <main style={{ minHeight: '100vh', background: 'var(--taas-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', marginBottom: '2rem' }}>
            Story not found
          </p>
          <Link href="/client-stories" style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taas-text-primary)', textDecoration: 'none' }}>
            ← Back to client stories
          </Link>
        </div>
      </main>
    );
  }

  const name   = story.clientDisplayName || story.clientName;
  const hImg   = story.heroImage;

  // ── BODY ──────────────────────────────────────────────────────────────────
  return (
    <main style={{ minHeight: '100vh', background: 'var(--taas-bg)', color: 'var(--taas-text-primary)' }}>

      {/* Back link */}
      <div style={{ position: 'fixed', top: '1.75rem', left: '5%', zIndex: 100 }}>
        <Link href="/client-stories" style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', textDecoration: 'none' }}>
          ← Client Stories
        </Link>
      </div>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      {isApproved ? (
        <>
          {/* Story label */}
          <div style={{ maxWidth: 'var(--taas-container)', margin: '0 auto', padding: '130px 5% 0' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', marginBottom: '3rem' }}>
                Client Story · {pad(story.slot)} / {pad(TOTAL_SLOTS)}
              </div>

              {/* Full-bleed hero image */}
              {hImg ? (
                <div style={{ marginBottom: '3rem' }}>
                  <img src={hImg.src} alt="" style={{ width: '100%', aspectRatio: '16 / 7', objectFit: 'cover', background: 'var(--taas-bg-elevated)', display: 'block' }} />
                  {hImg.caption && (
                    <div style={{ marginTop: '1rem', fontSize: '0.62rem', color: 'var(--taas-text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                      {hImg.caption}
                    </div>
                  )}
                </div>
              ) : null}

              {/* Client + meta */}
              {name && (
                <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 900, letterSpacing: '-0.05em', textTransform: 'uppercase', lineHeight: 0.95, margin: '0 0 2rem' }}>
                  {name}
                </h1>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', marginBottom: '1rem' }}>
                {story.location && <span>{story.location}</span>}
                {story.propertyType && <span>· {story.propertyType}</span>}
                {story.consultationDuration && <span>· {DURATION_LABELS[story.consultationDuration]}</span>}
                {story.consultationDate && <span>· {story.consultationDate}</span>}
              </div>

              {story.primaryProblem && (
                <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'var(--taas-text-soft)', maxWidth: 700, lineHeight: 1.55, fontStyle: 'italic', marginTop: '2rem' }}>
                  &ldquo;{story.primaryProblem}&rdquo;
                </p>
              )}
            </motion.div>
          </div>

          {/* ── PROJECT SNAPSHOT ────────────────────────────────────────────── */}
          {(story.location || story.propertyType || story.area) && (
            <div style={{ borderTop: '1px solid var(--taas-line)', borderBottom: '1px solid var(--taas-line)', background: 'var(--taas-bg-elevated)', margin: '5rem 0 0' }}>
              <div style={{ maxWidth: 'var(--taas-container)', margin: '0 auto', padding: '3.5rem 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2.5rem' }}>
                {[
                  { label: 'Client',          value: name },
                  { label: 'Location',        value: story.location },
                  { label: 'Property',        value: story.propertyType },
                  { label: 'Area',            value: story.area },
                  { label: 'Project Stage',   value: story.projectType },
                  { label: 'Consultation',    value: DURATION_LABELS[story.consultationDuration] },
                  { label: 'Date',            value: story.consultationDate },
                ].filter(r => r.value).map(({ label, value }) => (
                  <div key={label}>
                    <div style={{ fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', marginBottom: '0.5rem' }}>{label}</div>
                    <div style={{ fontSize: '1rem', fontWeight: 500, lineHeight: 1.4 }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── BODY ────────────────────────────────────────────────────────── */}
          <div style={{ maxWidth: 800, margin: '0 auto', padding: '6rem 5%' }}>

            {/* THE SITUATION */}
            {story.clientSituation && (
              <FadeIn>
                <SectionLabel>The Situation</SectionLabel>
                {story.clientSituation.split('\n\n').map((para, i) => (
                  <Body key={i}>{para}</Body>
                ))}
                <Divider />
              </FadeIn>
            )}

            {/* WHAT THEY CAME FOR */}
            {story.topics.length > 0 && (
              <FadeIn>
                <SectionLabel>What They Came to TAAS For</SectionLabel>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
                  {story.topics.map(t => (
                    <div key={t} style={{ borderTop: '2px solid var(--taas-text-primary)', paddingTop: '1rem', fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {t}
                    </div>
                  ))}
                </div>
                <Divider />
              </FadeIn>
            )}

            {/* THE DESIGN QUESTION */}
            {story.designQuestion && (
              <FadeIn>
                <SectionLabel>The Design Question</SectionLabel>
                <blockquote style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.3, fontStyle: 'italic', margin: '0 0 5rem', padding: 0, borderLeft: 'none' }}>
                  &ldquo;{story.designQuestion}&rdquo;
                </blockquote>
                <Divider />
              </FadeIn>
            )}

            {/* WHAT TAAS LOOKED AT */}
            {story.analysis.length > 0 && (
              <FadeIn>
                <SectionLabel>What TAAS Looked At</SectionLabel>
                <div style={{ marginBottom: '5rem' }}>
                  {story.analysis.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--taas-line)' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--taas-text-muted)', paddingTop: '0.3rem', minWidth: '1.5rem' }}>
                        {pad(i + 1)}
                      </span>
                      <span style={{ fontSize: '1.1rem', color: 'var(--taas-text-primary)' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Divider />
              </FadeIn>
            )}

            {/* THE RECOMMENDATION */}
            {story.recommendations && (
              <FadeIn>
                <SectionLabel>The Recommendation</SectionLabel>
                {story.recommendations.split('\n\n').map((para, i) => (
                  <Body key={i}>{para}</Body>
                ))}
                <Divider />
              </FadeIn>
            )}

            {/* THE DECISIONS */}
            {story.designDecisions.length > 0 && (
              <FadeIn>
                <SectionLabel>The Decision</SectionLabel>
                {story.designDecisions.map((d, i) => (
                  <div key={i} style={{ marginBottom: '4rem', padding: '3rem', background: 'var(--taas-bg-elevated)' }}>
                    {[
                      { label: 'Before',         value: d.before },
                      { label: 'TAAS Direction',  value: d.taasDirection },
                      { label: 'Final Decision',  value: d.finalDecision },
                    ].map(({ label, value }) => (
                      <div key={label} style={{ marginBottom: '2rem' }}>
                        <div style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', marginBottom: '0.5rem' }}>{label}</div>
                        <div style={{ fontSize: '1.05rem', color: 'var(--taas-text-primary)', lineHeight: 1.6 }}>{value}</div>
                      </div>
                    ))}
                  </div>
                ))}
                <Divider />
              </FadeIn>
            )}
          </div>

          {/* CLIENT'S WORDS — full-width */}
          {story.review && (
            <FadeIn>
              <div style={{ borderTop: '1px solid var(--taas-line)', borderBottom: '1px solid var(--taas-line)', padding: '6rem 5%', textAlign: 'center' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', marginBottom: '3rem' }}>
                  Client&apos;s Words
                </div>
                <blockquote style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', fontWeight: 700, fontStyle: 'italic', letterSpacing: '-0.03em', lineHeight: 1.35, maxWidth: 960, margin: '0 auto 3rem', padding: 0, border: 'none' }}>
                  &ldquo;{story.review}&rdquo;
                </blockquote>
                {name && <div style={{ fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '0.5rem' }}>{name}</div>}
                {story.location && <div style={{ fontSize: '0.8rem', color: 'var(--taas-text-muted)', marginBottom: '1.5rem' }}>{story.location}</div>}
                {story.reviewSource && (
                  <div style={{ display: 'inline-block', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', border: '1px solid var(--taas-line)', padding: '0.4rem 0.8rem' }}>
                    {SOURCE_LABELS[story.reviewSource] || story.reviewSource}
                  </div>
                )}
              </div>
            </FadeIn>
          )}

          {/* THE PROJECT — gallery */}
          {story.projectImages.length > 0 && (
            <FadeIn>
              <div style={{ maxWidth: 'var(--taas-container)', margin: '0 auto', padding: '6rem 5%' }}>
                <SectionLabel>The Project</SectionLabel>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1rem' }}>
                  {story.projectImages.map((img, i) => (
                    <div key={i} style={{ gridColumn: i === 0 ? 'span 12' : 'span 6', overflow: 'hidden', background: 'var(--taas-bg-elevated)', position: 'relative' }}>
                      <img src={img.src} alt={img.caption || ''} style={{ width: '100%', height: i === 0 ? 500 : 350, objectFit: 'cover', display: 'block' }} />
                      {img.caption && (
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', background: 'linear-gradient(transparent, rgba(0,0,0,0.55))' }}>
                          {img.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* WHAT CHANGED */}
          {story.outcomes.length > 0 && (
            <FadeIn>
              <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 5% 6rem' }}>
                <Divider />
                <SectionLabel>What Changed</SectionLabel>
                {story.outcomes.map((o, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--taas-text-muted)', paddingTop: '0.3rem' }}>•</span>
                    <span style={{ fontSize: '1.1rem', color: 'var(--taas-text-primary)', lineHeight: 1.6 }}>{o}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}
        </>
      ) : (
        /* ── NOT YET APPROVED — shows structure without fake content ──────── */
        <div style={{ maxWidth: 'var(--taas-container)', margin: '0 auto', padding: '130px 5% 6rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', marginBottom: '3rem' }}>
              Client Story · {pad(story.slot)} / {pad(TOTAL_SLOTS)} &nbsp;·&nbsp; Being Documented
            </div>

            <div style={{ maxWidth: 640, paddingBottom: '6rem', borderBottom: '1px solid var(--taas-line)' }}>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.04em', textTransform: 'uppercase', margin: '0 0 2rem', opacity: 0.25 }}>——</h1>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--taas-text-soft)' }}>
                This story is currently being documented. It will be published once the client has reviewed and approved the content.
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid var(--taas-line)', padding: '6rem 5%', textAlign: 'center' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', marginBottom: '2rem' }}>
          Ask Before You Spend
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', textTransform: 'uppercase', margin: '0 auto 1.5rem', maxWidth: 640 }}>
          Not every interior decision needs a full design project.
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--taas-text-soft)', maxWidth: 500, margin: '0 auto 3rem', lineHeight: 1.65 }}>
          Sometimes, you just need an experienced designer to look at it before you commit.
        </p>
        <Link href="/book" style={{ display: 'inline-block', background: 'var(--taas-charcoal)', color: 'var(--taas-ivory)', padding: '1.1rem 2.5rem', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
          Book a Design Hour →
        </Link>
      </div>

      {/* ── PREV / NEXT / BACK ────────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid var(--taas-line)', maxWidth: 'var(--taas-container)', margin: '0 auto', padding: '4rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        {prevStory ? (
          <Link href={`/client-stories/${prevStory.slug}`} style={{ textDecoration: 'none', color: 'var(--taas-text-muted)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            ← Previous Story
          </Link>
        ) : <span />}

        <Link href="/client-stories" style={{ textDecoration: 'none', color: 'var(--taas-text-muted)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          All Client Stories
        </Link>

        {nextStory ? (
          <Link href={`/client-stories/${nextStory.slug}`} style={{ textDecoration: 'none', color: 'var(--taas-text-muted)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Next Story →
          </Link>
        ) : <span />}
      </div>

    </main>
  );
}
