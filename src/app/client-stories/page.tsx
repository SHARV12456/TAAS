"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CLIENT_STORIES, TOTAL_SLOTS, PUBLISHED_STORIES,
  padSlot, DURATION_LABELS,
} from "./data";
import "./client-stories.css";

const FILTERS = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'LAYOUT', 'KITCHEN', 'MATERIALS', 'STORAGE'];

export default function ClientStoriesPage() {
  const [filter, setFilter] = useState('ALL');

  const visible = CLIENT_STORIES.filter(s => {
    if (filter === 'ALL') return true;
    if (filter === 'RESIDENTIAL') return s.projectType?.toLowerCase().includes('residential');
    if (filter === 'COMMERCIAL')  return s.projectType?.toLowerCase().includes('commercial');
    return s.topics.map(t => t.toUpperCase()).includes(filter);
  });

  return (
    <main style={{ minHeight: '100vh', background: 'var(--taas-bg)', color: 'var(--taas-text-primary)' }}>

      {/* HERO */}
      <section style={{ padding: '130px 5% 4rem', maxWidth: 'var(--taas-container)', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', marginBottom: '3rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span>{TOTAL_SLOTS} Project Stories</span>
            <span style={{ width: 1, height: '1em', background: 'var(--taas-line)' }} />
            <span>Mumbai</span>
            <span style={{ width: 1, height: '1em', background: 'var(--taas-line)' }} />
            <span>TAAS Design Hour</span>
          </div>

          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.95, textTransform: 'uppercase', margin: '0 0 3rem' }}>
            Real Clients.<br />Real Projects.<br />Real Design<br />Decisions.
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.7, color: 'var(--taas-text-soft)', maxWidth: 540, margin: '0 0 3rem' }}>
            Explore the interior problems our clients brought to TAAS — and the decisions we helped them make.
          </p>

          <Link href="/book" style={{ display: 'inline-block', background: 'var(--taas-charcoal)', color: 'var(--taas-ivory)', padding: '1rem 2rem', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Book a Design Hour →
          </Link>
        </motion.div>
      </section>

      {/* FILTER BAR */}
      <div style={{ maxWidth: 'var(--taas-container)', margin: '0 auto', padding: '0 5% 4rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        {FILTERS.map(f => (
          <button key={f} onClick={() => setFilter(f)}
            style={{ background: filter === f ? 'var(--taas-charcoal)' : 'transparent', color: filter === f ? 'var(--taas-ivory)' : 'var(--taas-text-muted)', border: '1px solid var(--taas-line)', padding: '0.5rem 1.1rem', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}>
            {f}
          </button>
        ))}
      </div>

      {/* STORY ROWS */}
      <section style={{ maxWidth: 'var(--taas-container)', margin: '0 auto', padding: '0 5% 8rem' }}>
        <AnimatePresence mode="popLayout">
          {visible.map((s, i) => {
            const isPublished = s.permissionStatus === 'approved';
            const img = s.heroImage;
            const name = s.clientDisplayName || s.clientName;

            const row = (
              <motion.article
                key={s.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isPublished ? 1 : 0.4, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                style={{ borderBottom: '1px solid var(--taas-line)', padding: '4rem 0', display: 'grid', gridTemplateColumns: '80px 1fr 340px', gap: '3rem', alignItems: 'start', cursor: isPublished ? 'pointer' : 'default' }}
              >
                {/* Number */}
                <div style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--taas-text-muted)', paddingTop: '0.4rem' }}>
                  {padSlot(s.slot)} <span style={{ opacity: 0.4 }}>/ {padSlot(TOTAL_SLOTS)}</span>
                </div>

                {/* Content */}
                <div>
                  {isPublished ? (
                    <>
                      <div style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', marginBottom: '0.75rem' }}>
                        {s.location} · {s.propertyType}
                      </div>
                      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', textTransform: 'uppercase', margin: '0 0 1rem' }}>
                        {name}
                      </h2>
                      {s.primaryProblem && (
                        <p style={{ fontSize: '1.05rem', color: 'var(--taas-text-soft)', margin: '0 0 2rem', maxWidth: 520, lineHeight: 1.6 }}>
                          {s.primaryProblem}
                        </p>
                      )}
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                        {s.topics.map(t => (
                          <span key={t} style={{ fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', border: '1px solid var(--taas-line)', padding: '0.3rem 0.6rem', color: 'var(--taas-text-muted)' }}>{t}</span>
                        ))}
                      </div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                        View Case Study →
                      </span>
                    </>
                  ) : (
                    <>
                      <div style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', marginBottom: '0.75rem' }}>
                        Story in documentation
                      </div>
                      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, letterSpacing: '-0.03em', textTransform: 'uppercase', margin: 0, opacity: 0.25 }}>
                        ——
                      </h2>
                    </>
                  )}
                </div>

                {/* Image */}
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--taas-bg-elevated)' }}>
                  {img ? (
                    <img src={img.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.15 }}>
                        {isPublished ? 'Image' : ''}
                      </span>
                    </div>
                  )}
                </div>
              </motion.article>
            );

            return isPublished
              ? <Link key={s.slug} href={`/client-stories/${s.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>{row}</Link>
              : row;
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
