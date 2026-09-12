"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CLIENT_STORIES, PUBLISHED_STORIES, TOTAL_SLOTS, padSlot, DURATION_LABELS } from "./data";
import "./client-stories.css";

function pad(n: number) { return padSlot(n); }

function StoryRow({ story, index }: { story: typeof CLIENT_STORIES[0]; index: number }) {
  const isPublished = story.status === 'client-approved' && story.permissionGranted;
  const mainImage = story.images.find(i => i.type === 'project' || i.type === 'site')?.src
    ?? story.images[0]?.src
    ?? null;

  const rowContent = (
    <motion.article
      className={`cs-row ${isPublished ? 'cs-row-published' : 'cs-row-draft'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <div className="cs-row-header">
        <span className="cs-row-num">{pad(story.slot)} / {pad(TOTAL_SLOTS)}</span>
        <h2 className="cs-case-name" style={{ margin: 0, fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          {isPublished ? story.clientName : 'Project in documentation'}
        </h2>
      </div>

      <div className="cs-row-meta">
        {isPublished ? (
          <>
            <span>{story.location}</span>
            <span>·</span>
            <span>{story.propertyType}</span>
            <span>·</span>
            <span>{story.projectType}</span>
            <span>·</span>
            <span>{DURATION_LABELS[story.consultationDuration]}</span>
          </>
        ) : (
          <span>{story.adminCategory}</span>
        )}
      </div>

      {isPublished && story.indexDecision && (
        <div>
          <div className="cs-row-problem-label">The Problem</div>
          <p className="cs-row-problem-text">{story.indexDecision}</p>
        </div>
      )}

      {mainImage ? (
        <img src={mainImage} alt="" className="cs-row-img" />
      ) : (
        <div className="cs-row-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.2 }}>
            {isPublished ? 'Project Image' : ''}
          </span>
        </div>
      )}

      {isPublished && (
        <div>
          <span className="cs-row-read">Read Case Study →</span>
        </div>
      )}
    </motion.article>
  );

  if (!isPublished) return rowContent;

  return (
    <Link href={`/client-stories/${story.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      {rowContent}
    </Link>
  );
}

export default function ClientStoriesPage() {
  return (
    <main className="cs-page">
      <section className="cs-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="cs-hero-meta">
            <span>{TOTAL_SLOTS} Case Studies</span>
            <div className="cs-hero-meta-divider" />
            <span>Mumbai</span>
            <div className="cs-hero-meta-divider" />
            <span>Interior Design Consultation</span>
          </div>

          <h1 className="cs-hero-headline">
            Real Projects.<br />Real Problems.<br />Real Design<br />Decisions.
          </h1>

          <p className="cs-hero-sub">
            Every project starts with uncertainty. These are the real interior decisions
            TAAS has helped clients navigate.
          </p>
        </motion.div>
      </section>

      <section className="cs-index">
        {CLIENT_STORIES.map((story, i) => (
          <StoryRow key={story.slug} story={story} index={i} />
        ))}
      </section>
    </main>
  );
}
