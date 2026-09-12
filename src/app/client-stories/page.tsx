"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CLIENT_STORIES, PUBLISHED_STORIES, TOTAL_SLOTS, padSlot, DURATION_LABELS } from "./data";
import "./client-stories.css";

const FILTERS = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'LAYOUT', 'KITCHEN', 'MATERIALS', 'STORAGE', 'SECOND OPINION'];

function pad(n: number) { return padSlot(n); }

function StoryCard({ story, index }: { story: typeof CLIENT_STORIES[0]; index: number }) {
  const isPublished = story.status === 'client-approved' && story.permissionGranted;
  const mainImage = story.images.find(i => i.type === 'project' || i.type === 'site')?.src
    ?? story.images[0]?.src
    ?? null;
    
  const displayName = story.clientDisplayName || story.clientName;

  const cardContent = (
    <motion.article
      layout
      className={`cs-card ${isPublished ? 'cs-card-published' : 'cs-card-draft'}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <div className="cs-card-header">
        {pad(story.slot)} / {pad(TOTAL_SLOTS)}
      </div>
      
      <h2 className="cs-card-name">
        {isPublished ? displayName : 'Project in documentation'}
      </h2>

      <div className="cs-card-meta">
        {isPublished ? (
          <>
            <span>{story.location}</span>
            <span>·</span>
            <span>{story.propertyType}</span>
          </>
        ) : (
          <span>{story.adminCategory}</span>
        )}
      </div>

      <div className="cs-card-img-wrap" style={{ viewTransitionName: isPublished ? `story-img-${story.slug}` : 'none' }}>
        {mainImage ? (
          <img src={mainImage} alt="" className="cs-card-img" />
        ) : (
          <div className="cs-card-placeholder">
            {isPublished ? 'Project Image' : 'Image Pending'}
          </div>
        )}
      </div>

      {isPublished && story.indexDecision && (
        <div style={{ flexGrow: 1 }}>
          <div className="cs-card-problem-label">The Problem</div>
          <p className="cs-card-problem-text">{story.indexDecision}</p>
        </div>
      )}

      {isPublished && story.topics.length > 0 && (
        <div className="cs-card-tags">
          {story.topics.slice(0, 3).map(t => (
            <span key={t} className="cs-card-tag">{t}</span>
          ))}
        </div>
      )}

      <div className="cs-card-footer">
        <span className="cs-card-duration">
          {isPublished ? DURATION_LABELS[story.consultationDuration] : 'Consultation'}
        </span>
        {isPublished && (
          <span className="cs-card-read">View Case Study →</span>
        )}
      </div>
    </motion.article>
  );

  if (!isPublished) return cardContent;

  return (
    <Link href={`/client-stories/${story.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      {cardContent}
    </Link>
  );
}

export default function ClientStoriesPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredStories = CLIENT_STORIES.filter(story => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'RESIDENTIAL') return story.propertyType.toLowerCase().includes('residential') || story.propertyType.toLowerCase().includes('bhk') || story.propertyType.toLowerCase().includes('villa');
    if (activeFilter === 'COMMERCIAL') return story.propertyType.toLowerCase().includes('commercial') || story.propertyType.toLowerCase().includes('office') || story.propertyType.toLowerCase().includes('cafe');
    return story.topics.map(t => t.toUpperCase()).includes(activeFilter);
  });

  return (
    <main className="cs-page">
      <section className="cs-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="cs-hero-meta">
            <span>{TOTAL_SLOTS} Project Stories</span>
            <div className="cs-hero-meta-divider" />
            <span>Mumbai</span>
            <div className="cs-hero-meta-divider" />
            <span>TAAS Design Hour</span>
          </div>

          <h1 className="cs-hero-headline">
            Real Clients.<br />Real Projects.<br />Real Design<br />Decisions.
          </h1>

          <p className="cs-hero-sub">
            Explore the interior problems our clients brought to TAAS — and the decisions we helped them make.
          </p>

          <Link href="/book" className="cs-btn-pri">Book a Design Hour →</Link>
        </motion.div>
      </section>

      {/* FILTER BAR */}
      <div className="cs-filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`cs-filter-btn ${activeFilter === f ? 'active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <section className="cs-index">
        <AnimatePresence mode="popLayout">
          {filteredStories.map((story, i) => (
            <StoryCard key={story.slug} story={story} index={i} />
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}
