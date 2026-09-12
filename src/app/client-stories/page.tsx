"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CLIENT_STORIES,
  PUBLISHED_STORIES,
  TOTAL_SLOTS,
  padSlot,
} from "./data";
import "./client-stories.css";

function pad(n: number) { return padSlot(n); }

/* ── Story row in the editorial index ──────────────────────────────────────── */
function StoryRow({ story, index }: { story: typeof CLIENT_STORIES[0]; index: number }) {
  const isPublished = story.status === 'client-approved' && story.permissionGranted;
  const mainImage = story.images.find(i => i.type === 'project' || i.type === 'site')?.src
    ?? story.images[0]?.src
    ?? null;

  const rowContent = (
    <motion.div
      className={`cs-row ${isPublished ? 'cs-row-published' : 'cs-row-draft'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Slot number */}
      <div className="cs-row-slot">{pad(story.slot)}</div>

      {/* Content */}
      <div className="cs-row-content">
        <span className="cs-row-category">{story.adminCategory}</span>
        {isPublished ? (
          <>
            <h3 className="cs-row-name">{story.clientName}</h3>
            <p className="cs-row-decision">{story.indexDecision}</p>
            <div className="cs-row-tags">
              {story.topics.map(t => (
                <span key={t} className="cs-row-tag">{t}</span>
              ))}
            </div>
          </>
        ) : (
          <>
            <h3 className="cs-row-name" style={{ opacity: 0.28 }}>——</h3>
            <span className="cs-row-draft-label">Story in documentation</span>
          </>
        )}
      </div>

      {/* Image column */}
      <div className="cs-row-img-col">
        {mainImage ? (
          <img src={mainImage} alt="" className="cs-row-img" />
        ) : (
          <div className="cs-row-img-placeholder">
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.15 }}>
              {isPublished ? 'Image' : ''}
            </span>
          </div>
        )}
        {isPublished && <div className="cs-row-arrow">Read story →</div>}
      </div>
    </motion.div>
  );

  if (!isPublished) return rowContent;

  return (
    <Link href={`/client-stories/${story.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      {rowContent}
    </Link>
  );
}

/* ── PAGE ───────────────────────────────────────────────────────────────────── */
export default function ClientStoriesPage() {
  const publishedCount = PUBLISHED_STORIES.length;

  return (
    <main className="cs-page">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="cs-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cs-hero-meta">
            <span>{TOTAL_SLOTS} Client Stories</span>
            <div className="cs-hero-meta-divider" />
            <span>Mumbai</span>
            <div className="cs-hero-meta-divider" />
            <span>TAAS Design Hour</span>
          </div>

          <h1 className="cs-hero-headline">
            The Decisions<br />Behind the<br />Spaces.
          </h1>

          <p className="cs-hero-sub">
            Real conversations. Real interior problems. Real decisions made with
            professional design direction.
          </p>

          <Link href="/book" className="cs-hero-cta">
            Book Your Design Hour →
          </Link>
        </motion.div>
      </section>

      <div className="cs-hero-divider" />

      {/* ── EDITORIAL INDEX ───────────────────────────────────────────────── */}
      <section className="cs-index">
        <div className="cs-index-header">
          <span className="cs-index-header-num" aria-hidden="true">
            {publishedCount > 0 ? pad(publishedCount) : TOTAL_SLOTS}
          </span>
          <div>
            <div className="cs-index-header-label">
              {publishedCount > 0
                ? `${publishedCount} Published · ${TOTAL_SLOTS - publishedCount} In Documentation`
                : `${TOTAL_SLOTS} Stories Being Documented`}
            </div>
          </div>
        </div>

        {CLIENT_STORIES.map((story, i) => (
          <StoryRow key={story.slug} story={story} index={i} />
        ))}
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
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
          <Link href="/process" className="cs-cta-secondary">
            See How It Works →
          </Link>
        </div>
      </motion.section>

    </main>
  );
}
