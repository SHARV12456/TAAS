"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CLIENT_STORIES, padSlot, DURATION_LABELS } from "./data";
import "./client-stories.css";

export default function ClientStoriesPage() {
  const visibleStories = CLIENT_STORIES.filter(s => s.published);

  return (
    <main className="cs-page">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="cs-index-hero">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="cs-eyebrow">TAAS / CLIENT STORIES</div>
          
          <h1 className="cs-index-headline">
            Design Decisions,<br />Before They Become Expensive Mistakes.
          </h1>
          
          <p className="cs-index-sub">
            Five fictionalized stories showing the kinds of decisions homeowners and businesses bring to a TAAS Design Hour.
          </p>
          
          <div className="cs-index-note">
            Fictionalized stories created for presentation purposes.
          </div>
          
          <Link href="/book" className="cs-btn-pri" style={{ marginTop: '1rem' }}>
            Book a Design Hour →
          </Link>
        </motion.div>
      </section>

      {/* ── STORY LIST ────────────────────────────────────────────────────── */}
      <section className="cs-story-list">
        <AnimatePresence>
          {visibleStories.map((story, i) => {
            const img = story.heroImage;
            return (
              <Link key={story.slug} href={`/client-stories/${story.slug}`} style={{ textDecoration: 'none' }}>
                <motion.article 
                  className="cs-story-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="cs-story-num">{padSlot(story.slot)}</div>
                  
                  <div>
                    <h2 className="cs-story-headline">{story.indexHeadline}</h2>
                    <div className="cs-story-meta">
                      <span>{story.clientDisplayName || story.clientName}</span>
                      <span>{story.location}</span>
                      <span>{story.propertyType} &nbsp;·&nbsp; {story.topics.join(' + ')}</span>
                    </div>
                    <div className="cs-read-cta">Read Story →</div>
                  </div>
                  
                  <div className="cs-story-img-wrap" style={{ viewTransitionName: `story-img-${story.slug}` }}>
                    {img && (
                      <img src={img.src} alt="" className="cs-story-img" loading="lazy" />
                    )}
                    {img?.illustrative && (
                      <div className="cs-case-illustrative-label" style={{ padding: '0.3rem 0.6rem', fontSize: '0.45rem', bottom: '0.5rem', right: '0.5rem' }}>
                        Illustrative
                      </div>
                    )}
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </AnimatePresence>
      </section>

      {/* ── DISCLAIMER ────────────────────────────────────────────────────── */}
      <div className="cs-disclaimer">
        <p>
          The stories shown on this page are fictionalized examples created to demonstrate the TAAS consultation experience. They are not presented as verified client testimonials.
        </p>
      </div>
    </main>
  );
}
