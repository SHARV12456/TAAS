"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  CLIENT_STORIES,
  TOTAL_SLOTS,
  padSlot,
  DURATION_LABELS,
  SOURCE_LABELS,
  PHASE_LABELS,
  type StoryImage,
} from "../data";
import "../client-stories.css";

/* ── helpers ─────────────────────────────────────────────────────────────── */
function pad(n: number) { return padSlot(n); }

/* ── Lightbox ─────────────────────────────────────────────────────────────── */
function Lightbox({ img, onClose }: { img: StoryImage; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="cs-lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button className="cs-lightbox-close" onClick={onClose}>
          ✕ Close
        </button>
        <motion.img
          src={img.src}
          alt={img.caption}
          className="cs-lightbox-img"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Gallery ─────────────────────────────────────────────────────────────── */
function Gallery({ images }: { images: StoryImage[] }) {
  const [lightbox, setLightbox] = useState<StoryImage | null>(null);
  if (images.length === 0) return null;

  return (
    <section className="cs-gallery">
      <div className="cs-gallery-label">Project Photography</div>
      <div className="cs-gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="cs-gallery-img-wrap"
            onClick={() => setLightbox(img)}
          >
            <img src={img.src} alt={img.caption} className="cs-gallery-img" />
            <div className="cs-gallery-caption">{img.caption}</div>
          </div>
        ))}
      </div>
      {lightbox && (
        <Lightbox img={lightbox} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}

/* ── Decision accordion ────────────────────────────────────────────────────── */
function DecisionList({ decisions }: { decisions: typeof CLIENT_STORIES[0]['decisions'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="cs-decisions">
      {decisions.map((d, i) => (
        <div key={i}>
          <div
            className={`cs-decision-item${openIndex === i ? ' open' : ''}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="cs-decision-label">{d.label}</span>
            <span className="cs-decision-chevron">▾</span>
          </div>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                className="cs-decision-detail"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: 'hidden' }}
              >
                {d.detail}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ── PAGE ─────────────────────────────────────────────────────────────────── */
export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = CLIENT_STORIES.find(s => s.slug === params.slug);

  // 404 if story doesn't exist
  if (!story) { notFound(); }

  // 404 if not published
  if (story.status !== 'client-approved' || !story.permissionGranted) {
    notFound();
  }

  const heroImage = story.images.find(i => i.type === 'project' || i.type === 'site') ?? null;
  const clientPhoto = story.images.find(i => i.type === 'client') ?? null;
  const galleryImages = story.images.filter(i => i.type !== 'client');

  return (
    <main className="cs-case">

      {/* Back */}
      <Link href="/client-stories" className="cs-back">
        ← Client Stories
      </Link>

      {/* ── CASE HERO ──────────────────────────────────────────────────────── */}
      <div className="cs-case-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="cs-case-slot-num">
            {pad(story.slot)} / {pad(TOTAL_SLOTS)}
          </p>

          <h1 className="cs-case-name">{story.clientName}</h1>

          <div className="cs-case-meta-row">
            <span>Mumbai</span>
            <span className="cs-case-meta-sep">·</span>
            <span>{story.location}</span>
            <span className="cs-case-meta-sep">·</span>
            <span>{story.propertyType}</span>
            <span className="cs-case-meta-sep">·</span>
            <span>{story.projectType}</span>
            <span className="cs-case-meta-sep">·</span>
            <span>{DURATION_LABELS[story.consultationDuration]}</span>
            <span className="cs-case-meta-sep">·</span>
            <span>{story.consultationDate}</span>
          </div>
        </motion.div>
      </div>

      {/* Hero image */}
      {heroImage ? (
        <motion.img
          src={heroImage.src}
          alt={heroImage.caption}
          className="cs-case-hero-img"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      ) : (
        <div className="cs-case-hero-img-placeholder">
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.15 }}>
            Project image
          </span>
        </div>
      )}

      {/* ── CASE BODY ──────────────────────────────────────────────────────── */}
      <div className="cs-case-body">

        {/* THE SITUATION */}
        {story.situation && (
          <motion.section
            className="cs-case-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="cs-case-section-label">The Situation</div>
            <div className="cs-case-prose" style={{ whiteSpace: 'pre-line' }}>
              {story.situation}
            </div>
          </motion.section>
        )}

        {/* WHAT THEY WERE STUCK ON */}
        {story.decisions.length > 0 && (
          <motion.section
            className="cs-case-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="cs-case-section-label">What They Were Stuck On</div>
            <DecisionList decisions={story.decisions} />
          </motion.section>
        )}

        {/* BEFORE THE CONSULTATION */}
        {(story.beforeConsultation.hadAlready || story.beforeConsultation.wasConsidering) && (
          <motion.section
            className="cs-case-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="cs-case-section-label">Before TAAS</div>
            <div className="cs-before-grid">
              {story.beforeConsultation.hadAlready && (
                <div className="cs-before-cell">
                  <div className="cs-before-cell-label">Had Already</div>
                  <div className="cs-before-cell-text">{story.beforeConsultation.hadAlready}</div>
                </div>
              )}
              {story.beforeConsultation.wasConsidering && (
                <div className="cs-before-cell">
                  <div className="cs-before-cell-label">Was Considering</div>
                  <div className="cs-before-cell-text">{story.beforeConsultation.wasConsidering}</div>
                </div>
              )}
              {story.beforeConsultation.whatWasntWorking && (
                <div className="cs-before-cell">
                  <div className="cs-before-cell-label">What Wasn't Working</div>
                  <div className="cs-before-cell-text">{story.beforeConsultation.whatWasntWorking}</div>
                </div>
              )}
              {story.beforeConsultation.wasAfraidOf && (
                <div className="cs-before-cell">
                  <div className="cs-before-cell-label">Was Afraid Of</div>
                  <div className="cs-before-cell-text">{story.beforeConsultation.wasAfraidOf}</div>
                </div>
              )}
              {story.beforeConsultation.budget && (
                <div className="cs-before-cell">
                  <div className="cs-before-cell-label">Budget Context</div>
                  <div className="cs-before-cell-text">{story.beforeConsultation.budget}</div>
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* THE CONSULTATION TIMELINE */}
        {story.consultationTimeline.length > 0 && (
          <motion.section
            className="cs-case-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="cs-case-section-label">The Consultation</div>
            <div className="cs-timeline">
              {story.consultationTimeline.map((step, i) => (
                <div key={i} className="cs-timeline-step">
                  <div className="cs-timeline-num">{pad(i + 1)}</div>
                  <div>
                    <div className="cs-timeline-phase">
                      {PHASE_LABELS[step.phase]}
                    </div>
                    <div className="cs-timeline-text">{step.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* TAAS RECOMMENDATIONS */}
        {story.recommendations.length > 0 && (
          <motion.section
            className="cs-case-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="cs-case-section-label">What TAAS Helped With</div>
            <div className="cs-recs">
              {story.recommendations.map((rec, i) => (
                <div key={i} className="cs-rec-cell">
                  <div className="cs-rec-label">{rec.category}</div>
                  <div className="cs-rec-text">{rec.detail}</div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

      </div>

      {/* ── QUOTE ──────────────────────────────────────────────────────────── */}
      {story.exactQuote && (
        <motion.div
          className="cs-quote-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
        >
          <blockquote className="cs-quote-text">
            &ldquo;{story.exactQuote}&rdquo;
          </blockquote>
          <p className="cs-quote-attr">
            — {story.clientName} &nbsp;·&nbsp; {story.location}
          </p>
          {story.feedbackSource && (
            <div className="cs-quote-source">
              Client Feedback · {SOURCE_LABELS[story.feedbackSource]}
            </div>
          )}
        </motion.div>
      )}

      {/* ── WHAT CHANGED AFTER ─────────────────────────────────────────────── */}
      {story.whatChangedAfter && (
        <div className="cs-case-body" style={{ paddingTop: 0 }}>
          <motion.section
            className="cs-case-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="cs-case-section-label">What Changed After</div>
            <div className="cs-case-prose" style={{ whiteSpace: 'pre-line' }}>
              {story.whatChangedAfter}
            </div>
          </motion.section>
        </div>
      )}

      {/* ── GALLERY ────────────────────────────────────────────────────────── */}
      <Gallery images={galleryImages} />

      {/* ── CLIENT PROFILE ─────────────────────────────────────────────────── */}
      <motion.div
        className="cs-profile"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        {clientPhoto ? (
          <img
            src={clientPhoto.src}
            alt={story.clientName}
            className="cs-profile-photo"
          />
        ) : (
          <div className="cs-profile-photo-placeholder">
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.15 }}>
              Photo
            </span>
          </div>
        )}

        <div className="cs-profile-right">
          <h3 className="cs-profile-name">{story.clientName}</h3>
          <p className="cs-profile-sub">
            {story.location} &nbsp;·&nbsp; {story.projectType} &nbsp;·&nbsp;{' '}
            {DURATION_LABELS[story.consultationDuration]}
          </p>

          <div className="cs-profile-grid">
            {story.whyTheyCame && (
              <div>
                <div className="cs-profile-cell-label">Why They Came</div>
                <div className="cs-profile-cell-text">{story.whyTheyCame}</div>
              </div>
            )}
            {story.whatTheyNeeded && (
              <div>
                <div className="cs-profile-cell-label">What They Needed</div>
                <div className="cs-profile-cell-text">{story.whatTheyNeeded}</div>
              </div>
            )}
            {story.whatTheyLeftWith && (
              <div>
                <div className="cs-profile-cell-label">What They Left With</div>
                <div className="cs-profile-cell-text">{story.whatTheyLeftWith}</div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* ── IN-STORY CTA ───────────────────────────────────────────────────── */}
      <motion.section
        className="cs-final-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65 }}
      >
        <h2>
          You don&apos;t need<br />another opinion.
          <br />You need the right one.
        </h2>
        <p>
          Before you commit to a layout, material, contractor or expensive
          decision — talk it through with a designer.
        </p>
        <div className="cs-final-ctas">
          <Link href="/book" className="cs-cta-primary">
            Book a Design Hour →
          </Link>
          <Link href="/client-stories" className="cs-cta-secondary">
            ← All Stories
          </Link>
        </div>
      </motion.section>

    </main>
  );
}
