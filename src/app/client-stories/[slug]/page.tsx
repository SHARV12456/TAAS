"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  CLIENT_STORIES,
  PUBLISHED_STORIES,
  TOTAL_SLOTS,
  padSlot,
  DURATION_LABELS,
  SOURCE_LABELS,
  PHASE_LABELS,
} from "../data";
import "../client-stories.css";

function pad(n: number) { return padSlot(n); }

export default function StoryPage({ params }: { params: { slug: string } }) {
  const storyIndex = CLIENT_STORIES.findIndex(s => s.slug === params.slug);
  const story = CLIENT_STORIES[storyIndex];

  if (!story || story.status !== 'client-approved' || !story.permissionGranted) {
    notFound();
  }

  // Find next published story for the footer
  let nextStory = null;
  for (let i = 1; i <= TOTAL_SLOTS; i++) {
    const checkIdx = (storyIndex + i) % TOTAL_SLOTS;
    const s = CLIENT_STORIES[checkIdx];
    if (s.status === 'client-approved' && s.permissionGranted) {
      nextStory = s;
      break;
    }
  }

  const heroImage = story.images.find(i => i.type === 'project' || i.type === 'site') ?? story.images[0] ?? null;
  const displayName = story.clientDisplayName || story.clientName;

  return (
    <main className="cs-case">
      <Link href="/client-stories" className="cs-back">← All Client Stories</Link>

      {/* ── 01 / 15 HERO ────────────────────────────────────────────────── */}
      <div className="cs-case-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="cs-case-slot-num">{pad(story.slot)} / {pad(TOTAL_SLOTS)}</div>
          <h1 className="cs-case-name">{displayName}</h1>
          
          <div className="cs-case-meta-block">
            <div className="cs-case-meta-line">{story.location}, MUMBAI</div>
            <div className="cs-case-meta-line">{story.propertyType} · {story.projectType}</div>
            <div className="cs-case-meta-line">
              {story.snapshot?.projectSize && `${story.snapshot.projectSize} · `}
              {story.projectStage.replace('-', ' ')}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="cs-case-hero-img-wrap" style={{ viewTransitionName: `story-img-${story.slug}` }}>
        {heroImage && (
          <motion.img 
            src={heroImage.src} 
            alt="" 
            className="cs-case-hero-img" 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          />
        )}
      </div>

      {story.theClient?.whyContacted && (
        <div className="cs-case-hero-question-wrap">
          <div className="cs-case-hero-question-label">The question that brought them to TAAS</div>
          <div className="cs-case-hero-question-text">&ldquo;{story.theClient.whyContacted}&rdquo;</div>
        </div>
      )}

      {/* ── PROJECT SNAPSHOT ──────────────────────────────────────────────── */}
      <div className="cs-snapshot">
        <div className="cs-snapshot-grid">
          <div><div className="cs-snap-label">Client</div><div className="cs-snap-val">{displayName}</div></div>
          <div><div className="cs-snap-label">Location</div><div className="cs-snap-val">{story.location}</div></div>
          <div><div className="cs-snap-label">Project</div><div className="cs-snap-val">{story.propertyType}</div></div>
          {story.snapshot?.projectSize && (
            <div><div className="cs-snap-label">Area</div><div className="cs-snap-val">{story.snapshot.projectSize}</div></div>
          )}
          <div><div className="cs-snap-label">Project Stage</div><div className="cs-snap-val" style={{ textTransform: 'capitalize' }}>{story.projectStage.replace('-', ' ')}</div></div>
          <div><div className="cs-snap-label">Consultation</div><div className="cs-snap-val">{story.consultationDuration.replace('-min', ' Minutes')}</div></div>
          {story.snapshot?.primaryFocus && (
            <div><div className="cs-snap-label">Focus</div><div className="cs-snap-val">{story.snapshot.primaryFocus}</div></div>
          )}
        </div>
      </div>

      <div className="cs-case-body">
        
        {/* ── THE SITUATION ─────────────────────────────────────────────────── */}
        {story.theClient && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="cs-section-title">The space wasn&apos;t the problem.<br />The decision was.</h2>
            {story.theClient.who && <p className="cs-prose">{story.theClient.who}</p>}
            {story.theClient.goal && <p className="cs-prose">{story.theClient.goal}</p>}
            {story.theClient.alreadyDecided && <p className="cs-prose"><strong>Already decided:</strong> {story.theClient.alreadyDecided}</p>}
            {story.theClient.uncertainAbout && <p className="cs-prose"><strong>Uncertain about:</strong> {story.theClient.uncertainAbout}</p>}
          </motion.section>
        )}

        {/* ── THE PROJECT ─────────────────────────────────────────────────── */}
        {story.theProject && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="cs-section-title">The Project</h2>
            {story.theProject.configuration && (
              <>
                <h3 className="cs-section-subtitle">Property</h3>
                <p className="cs-prose">{story.theProject.configuration}</p>
              </>
            )}
            <h3 className="cs-section-subtitle">Location</h3>
            <p className="cs-prose">{story.location.toUpperCase()} · MUMBAI</p>
            <h3 className="cs-section-subtitle">Project Stage</h3>
            <p className="cs-prose" style={{textTransform:'uppercase'}}>{story.projectStage.replace('-', ' ')}</p>
            {story.snapshot?.designRequirement && (
              <>
                <h3 className="cs-section-subtitle">Project Requirement</h3>
                <p className="cs-prose">{story.snapshot.designRequirement}</p>
              </>
            )}
          </motion.section>
        )}

        {/* ── THE PROBLEM ─────────────────────────────────────────────────── */}
        {story.problems && story.problems.length > 0 && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="cs-section-title">What was actually going wrong?</h2>
            {story.problems.map((p, i) => (
              <div key={i} className="cs-module-block">
                <div className="cs-module-num">0{i+1} — {p.title}</div>
                <div className="cs-module-prose">{p.explanation}</div>
                {p.image && <img src={p.image.src} alt="" style={{width:'100%', marginBottom:'2rem'}}/>}
              </div>
            ))}
          </motion.section>
        )}

        {/* ── WHAT THE CLIENT WAS CONSIDERING ─────────────────────────────── */}
        {story.options && story.options.length > 0 && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="cs-section-title">What the client was considering</h2>
            {story.options.map((o, i) => (
              <div key={i} className="cs-module-block">
                <div className="cs-module-title">{o.title}</div>
                <div className="cs-module-prose">{o.explanation}</div>
                {o.image && <img src={o.image.src} alt="" style={{width:'100%', marginBottom:'2rem'}}/>}
              </div>
            ))}
          </motion.section>
        )}

        {/* ── WHAT WE LOOKED AT ───────────────────────────────────────────── */}
        {story.analysis && story.analysis.length > 0 && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="cs-section-title">What we looked at</h2>
            {story.analysis.map((a, i) => (
              <div key={i} className="cs-analysis-grid">
                <div style={{fontSize:'0.85rem', fontWeight:800, letterSpacing:'0.16em', color:'var(--taas-text-muted)'}}>{a.category}</div>
                <div>
                  <div style={{fontWeight:800, textTransform:'uppercase', marginBottom:'0.5rem'}}>What we noticed</div>
                  <div className="cs-prose">{a.noticed}</div>
                </div>
                <div>
                  <div style={{fontWeight:800, textTransform:'uppercase', marginBottom:'0.5rem'}}>What we recommended</div>
                  <div className="cs-prose">{a.recommended}</div>
                </div>
                <div>
                  <div style={{fontWeight:800, textTransform:'uppercase', marginBottom:'0.5rem'}}>Why</div>
                  <div className="cs-prose" style={{marginBottom:0}}>{a.why}</div>
                </div>
              </div>
            ))}
          </motion.section>
        )}

        {/* ── PROBLEM -> SOLUTION ─────────────────────────────────────────── */}
        {story.whatWeSolved && story.whatWeSolved.length > 0 && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            {story.whatWeSolved.map((ws, i) => (
              <div key={i} className="cs-ps-flow">
                <div className="cs-ps-label">Problem</div>
                <div className="cs-ps-val">{ws.problem}</div>
                
                <div className="cs-ps-arrow">↓</div>
                
                <div className="cs-ps-label">TAAS Direction</div>
                <div className="cs-ps-val">{ws.taasDirection}</div>

                <div className="cs-ps-arrow">↓</div>

                <div className="cs-ps-label">Design Reasoning</div>
                <div className="cs-ps-val">{ws.why}</div>

                <div className="cs-ps-arrow">↓</div>

                <div className="cs-ps-label">Outcome</div>
                <div className="cs-ps-val" style={{marginBottom:0}}>{ws.result}</div>
              </div>
            ))}
          </motion.section>
        )}

        {/* ── WHAT CHANGED (BEFORE / AFTER) ─────────────────────────────────── */}
        {story.whatChanged && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <div className="cs-ba-grid">
              <div className="cs-ba-col">
                <div className="cs-ba-title">Before</div>
                <ul className="cs-ba-list">
                  {story.whatChanged.beforeTaas.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="cs-ba-col">
                <div className="cs-ba-title">After</div>
                <ul className="cs-ba-list">
                  {story.whatChanged.afterTaas.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
        )}

        {/* ── FINAL OUTPUT ────────────────────────────────────────────────── */}
        {story.projectOutcome && story.projectOutcome.length > 0 && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="cs-section-title">What the client left with</h2>
            <div className="cs-prose">
              {story.projectOutcome.map((outcome, i) => (
                <div key={i} style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontWeight:900, marginBottom:'0.5rem' }}>0{i+1}</div>
                  <div>{outcome}</div>
                </div>
              ))}
            </div>
            {story.finalOutput?.executionScope && (
              <div style={{ marginTop: '3rem', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.16em', color: 'var(--taas-text-primary)' }}>
                {story.finalOutput.executionScope}
              </div>
            )}
          </motion.section>
        )}
      </div>

      {/* ── EXACT QUOTE ───────────────────────────────────────────────────── */}
      {story.exactQuote && (
        <motion.div className="cs-quote" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          <blockquote className="cs-quote-text">
            &ldquo;{story.exactQuote}&rdquo;
          </blockquote>
          <div className="cs-quote-attr">{displayName}</div>
          <div className="cs-quote-loc">{story.location}</div>
          {story.feedbackSource && (
            <div className="cs-quote-source">{SOURCE_LABELS[story.feedbackSource]}</div>
          )}
        </motion.div>
      )}

      {/* ── PROJECT GALLERY ────────────────────────────────────────────────── */}
      {story.images && story.images.length > 0 && (
        <div style={{ marginTop: '6rem' }}>
          <h2 className="cs-section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>The Project in Detail</h2>
          <div className="cs-gallery">
            <div className="cs-gallery-grid">
              {story.images.map((img, i) => (
                <div key={i} className="cs-gallery-img-wrap">
                  <img src={img.src} alt={img.caption} className="cs-gallery-img" />
                  <div className="cs-gallery-caption">{img.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── NEXT PROJECT ──────────────────────────────────────────────────── */}
      {nextStory && (
        <div className="cs-next">
          <div className="cs-next-label">Next Project</div>
          <Link href={`/client-stories/${nextStory.slug}`} className="cs-next-card">
            <div>
              <h3 className="cs-next-name">{nextStory.clientDisplayName || nextStory.clientName}</h3>
              <div className="cs-next-meta">{nextStory.location} &nbsp;·&nbsp; {nextStory.projectType}</div>
              <span className="cs-next-read">View Case Study →</span>
            </div>
            {nextStory.images[0] && (
              <img src={nextStory.images[0].src} alt="" className="cs-next-img" />
            )}
          </Link>
        </div>
      )}

    </main>
  );
}
