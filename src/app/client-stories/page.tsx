"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CLIENT_STORIES, padSlot } from "./data";
import "./client-stories.css";

export default function ClientStoriesPage() {
  const visibleStories = CLIENT_STORIES.filter(s => s.published);

  return (
    <main className="cs-page">
      {/* ── NAVBAR ──────────────────────────────────────────────────────────── */}
      <nav className="cs-navbar">
        <Link href="/" className="cs-nav-logo">TAAS</Link>
        <Link href="/" className="cs-nav-link">Main Site →</Link>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="cs-index-hero">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="cs-eyebrow">The TAAS Journal</div>
          
          <h1 className="cs-index-headline cs-serif">
            Design Decisions,<br />
            <span style={{ fontStyle: 'italic', color: '#B57B59' }}>Before They Become</span><br />
            Expensive Mistakes.
          </h1>
          
          <p className="cs-index-sub">
            Five fictionalized stories showing the kinds of decisions homeowners and businesses bring to a TAAS Design Hour.
          </p>
          
        </motion.div>
      </section>

      {/* ── STORY LIST ────────────────────────────────────────────────────── */}
      <section className="cs-story-list">
        <AnimatePresence>
          {visibleStories.map((story, i) => {
            const img = story.heroImage;
            
            return (
              <Link key={story.slug} href={`/client-stories/${story.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <motion.article 
                  className="cs-story-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                  <div className="cs-story-img-wrap">
                    {img && (
                      <img src={img.src} alt="" className="cs-story-img" loading="lazy" />
                    )}
                  </div>

                  <div className="cs-story-content">
                    <div className="cs-story-num">{padSlot(story.slot)}</div>
                    
                    <h2 className="cs-story-headline">
                      {story.indexHeadline}
                    </h2>
                    
                    <div className="cs-story-meta">
                      <span>{story.clientDisplayName || story.clientName}</span>
                      <span>{story.location} &nbsp;·&nbsp; {story.propertyType}</span>
                    </div>
                    
                    <div className="cs-read-cta">
                      Read Story
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                </motion.article>
              </Link>
            );
          })}
        </AnimatePresence>
      </section>

      {/* ── DISCLAIMER ────────────────────────────────────────────────────── */}
      <div className="cs-disclaimer">
        <p>The stories shown on this page are fictionalized examples created to demonstrate the TAAS consultation experience. They are not presented as verified client testimonials.</p>
      </div>
    </main>
  );
}
