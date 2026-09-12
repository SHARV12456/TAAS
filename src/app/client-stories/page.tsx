"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CLIENT_STORIES, PUBLISHED_STORIES, TOTAL_SLOTS, type ClientStory } from "./data";
import "./client-stories.css";

/* ─── helpers ──────────────────────────────────────────────────────────────── */
function pad(n: number) {
  return String(n).padStart(2, "0");
}

const CONSULTATION_LABELS: Record<string, string> = {
  "30-min": "Quick Clarity · 30 min",
  "60-min": "Deep Dive · 60 min",
  "90-min": "Complete Direction · 90 min",
};

const SOURCE_LABELS: Record<string, string> = {
  google: "Google",
  whatsapp: "WhatsApp",
  email: "Email",
  instagram: "Instagram",
  "in-person": "In-person",
};

/* ─── Placeholder image pane ───────────────────────────────────────────────── */
function ImgPane({
  src,
  alt,
  slot,
}: {
  src?: string | null;
  alt: string;
  slot: number;
}) {
  return (
    <div className="cs-story-img-pane">
      {src ? (
        <img src={src} alt={alt} className="cs-story-img" />
      ) : (
        <div
          className="cs-story-img"
          style={{
            background: "var(--taas-bg-elevated)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              opacity: 0.2,
              userSelect: "none",
            }}
          >
            Project image
          </span>
        </div>
      )}
      <div className="cs-story-slot-num">
        {pad(slot)} / {pad(TOTAL_SLOTS)}
      </div>
      <div className="cs-story-read-label">Read their story →</div>
    </div>
  );
}

/* ─── Story Modal ──────────────────────────────────────────────────────────── */
function StoryModal({
  story,
  onClose,
}: {
  story: ClientStory;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const mainImage = story.projectImages[0] ?? null;
  const extraImages = story.projectImages.slice(1);

  return (
    <motion.div
      className="cs-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Back button */}
      <button className="cs-modal-close" onClick={onClose}>
        ← Client Stories
      </button>

      <div className="cs-modal-inner">
        {/* Slot */}
        <motion.div
          className="cs-modal-slot"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {pad(story.slot)} / {pad(TOTAL_SLOTS)}
        </motion.div>

        {/* Name */}
        <motion.h1
          className="cs-modal-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          {story.clientName}
        </motion.h1>

        {/* Meta */}
        <motion.div
          className="cs-modal-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span>{story.location}</span>
          <span>·</span>
          <span>{story.projectType}</span>
          <span>·</span>
          <span>{CONSULTATION_LABELS[story.consultationType]}</span>
          <span>·</span>
          <span>{story.consultationDate}</span>
          {story.verificationSource && (
            <>
              <span>·</span>
              <span>Verified via {SOURCE_LABELS[story.verificationSource]}</span>
            </>
          )}
        </motion.div>

        {/* Hero image */}
        {mainImage ? (
          <motion.img
            src={mainImage}
            alt={`${story.clientName} — ${story.projectType}`}
            className="cs-modal-image"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.22, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
        ) : (
          <motion.div
            className="cs-modal-image"
            style={{
              background: "var(--taas-bg-elevated)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.5 }}
          >
            <span
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                opacity: 0.2,
              }}
            >
              Project image
            </span>
          </motion.div>
        )}

        {/* Four-section grid */}
        <motion.div
          className="cs-modal-sections"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.55 }}
        >
          <div>
            <div className="cs-modal-section-label">The Decision</div>
            <p className="cs-modal-section-text">{story.theDecision}</p>
          </div>

          <div>
            <div className="cs-modal-section-label">The Problem</div>
            <p className="cs-modal-section-text">{story.theProblem}</p>
          </div>

          <div>
            <div className="cs-modal-section-label">The Consultation</div>
            <p className="cs-modal-section-text">{story.theConsultation}</p>
          </div>

          <div>
            <div className="cs-modal-section-label">The Outcome</div>
            <p className="cs-modal-section-text">{story.theOutcome}</p>
          </div>

          {/* Quote — full width */}
          <div className="cs-modal-quote-wrap">
            <blockquote className="cs-modal-quote-text">
              &ldquo;{story.exactQuote}&rdquo;
            </blockquote>
            <p className="cs-modal-quote-attr">
              — {story.clientName} &nbsp;·&nbsp; {story.location}
            </p>
          </div>
        </motion.div>

        {/* Extra images */}
        {extraImages.length > 0 && (
          <div className="cs-modal-images">
            {extraImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${story.clientName} — project detail ${i + 2}`}
                className="cs-modal-img-extra"
              />
            ))}
          </div>
        )}

        {/* In-modal CTA */}
        <div
          style={{
            paddingTop: "3rem",
            borderTop: "1px solid var(--taas-line)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--taas-text-muted)",
              marginBottom: "1.25rem",
            }}
          >
            Have a similar decision?
          </p>
          <Link href="/book" className="cs-cta-btn">
            Book a Design Hour →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Published story card ─────────────────────────────────────────────────── */
function StoryCard({
  story,
  index,
}: {
  story: ClientStory;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const isReverse = index % 2 === 1;

  const preview =
    story.exactQuote.length > 200
      ? story.exactQuote.slice(0, 200).trimEnd() + "…"
      : story.exactQuote;

  return (
    <>
      <motion.article
        className={`cs-story${isReverse ? " reverse" : ""}`}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`Read ${story.clientName}'s story`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen(true);
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Image pane */}
        <ImgPane
          src={story.clientPhoto ?? story.projectImages[0]}
          alt={`${story.clientName} — ${story.projectType}`}
          slot={story.slot}
        />

        {/* Text pane */}
        <div className="cs-story-content">
          {/* Meta row */}
          <div className="cs-story-meta">
            <span>{story.location}</span>
            <span className="cs-story-meta-sep">·</span>
            <span>{story.projectType}</span>
            <span className="cs-story-meta-sep">·</span>
            <span>{story.consultationDate}</span>
          </div>

          {/* Name */}
          <h2 className="cs-story-name">{story.clientName}</h2>

          {/* Quote preview */}
          <blockquote className="cs-story-quote">
            &ldquo;{preview}&rdquo;
          </blockquote>

          {/* Footer */}
          <div className="cs-story-footer">
            <div className="cs-story-topics">
              {story.topics.map((t) => (
                <span key={t} className="cs-story-topic-tag">
                  {t}
                </span>
              ))}
            </div>
            <span className="cs-story-arrow">View Story →</span>
          </div>

          {/* Verification */}
          {story.verificationSource && (
            <div className="cs-verified-badge">
              Verified client · {SOURCE_LABELS[story.verificationSource]}
            </div>
          )}
        </div>
      </motion.article>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <StoryModal story={story} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Empty state — editorial, honest ─────────────────────────────────────── */
function EmptyState() {
  return (
    <div className="cs-empty">
      <p className="cs-empty-eyebrow">In Progress</p>
      <h2 className="cs-empty-headline">
        We document<br />real decisions.
      </h2>
      <p className="cs-empty-body">
        TAAS is built on genuine client consultations — not fabricated
        testimonials. We&apos;re collecting stories from real Mumbai homeowners
        and businesses with their explicit permission.
        <br /><br />
        These 15 story slots will be filled only with verified, permission-approved
        case studies. Until then, you won&apos;t see placeholder content here.
      </p>

      {/* Slot preview — shows what's coming */}
      <div className="cs-coming-grid">
        {CLIENT_STORIES.map((s) => (
          <div
            key={s.slot}
            className={`cs-coming-slot${s.published ? " active-slot" : ""}`}
          >
            <span className="cs-coming-slot-num">{pad(s.slot)}</span>
            <span className="cs-coming-slot-cat">{s.adminCategory}</span>
            <span className="cs-coming-slot-status">
              {s.published ? "Published" : "Content required"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── PAGE ─────────────────────────────────────────────────────────────────── */
export default function ClientStoriesPage() {
  const published = PUBLISHED_STORIES;
  const count = published.length;

  return (
    <main className="cs-page">
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="cs-hero">
        <motion.div
          className="cs-hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="cs-hero-kicker">
            <span className="cs-hero-kicker-dot" />
            {count > 0
              ? `${count} Client ${count === 1 ? "Story" : "Stories"}`
              : "15 Client Stories"}
          </p>

          <h1 className="cs-hero-headline">
            Real People.<br />Real Interior<br />Decisions.
          </h1>

          <p className="cs-hero-sub">
            See how TAAS helped Mumbai homeowners and businesses make clearer
            interior decisions before spending.
          </p>
        </motion.div>

        <div className="cs-hero-right" aria-hidden="true">
          <div className="cs-hero-count">15</div>
          <div className="cs-hero-count-label">Client Stories</div>
        </div>
      </section>

      {/* ── STORIES or EMPTY STATE ─────────────────────────────────────────── */}
      {count === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <EmptyState />
        </motion.div>
      ) : (
        <section className="cs-grid">
          {published.map((story, i) => (
            <StoryCard key={story.slot} story={story} index={i} />
          ))}
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <motion.section
        className="cs-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65 }}
      >
        <p className="cs-cta-eyebrow">Ready to get clarity?</p>
        <h2 className="cs-cta-headline">
          Have an interior<br />decision you&apos;re stuck on?
        </h2>
        <p className="cs-cta-sub">Talk it through before you spend.</p>
        <Link href="/book" className="cs-cta-btn">
          Book a Design Hour →
        </Link>
      </motion.section>
    </main>
  );
}
