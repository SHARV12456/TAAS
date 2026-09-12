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
            
            // Layout rhythm: Stack, Left, Right, Left, Stack
            let layoutClass = 'cs-layout-left';
            if (i === 0 || i === 4) layoutClass = 'cs-layout-stack';
            else if (i === 2) layoutClass = 'cs-layout-right';

            return (
              <Link key={story.slug} href={`/client-stories/${story.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <motion.article 
                  className={`cs-story-card ${layoutClass}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="cs-story-img-wrap">
                    {img && (
                      <img src={img.src} alt="" className="cs-story-img" loading="lazy" />
                    )}
                  </div>

                  <div className="cs-story-content">
                    <div className="cs-story-num cs-serif">{padSlot(story.slot)}</div>
                    
                    <h2 className="cs-story-headline cs-serif">
                      {story.indexHeadline}
                    </h2>
                    
                    <div className="cs-story-meta">
                      <span style={{ color: '#2A2825' }}>{story.clientDisplayName || story.clientName}</span>
                      <span>{story.location} &nbsp;·&nbsp; {story.propertyType}</span>
                    </div>
                    
                    <div className="cs-read-cta">Read Story →</div>
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
