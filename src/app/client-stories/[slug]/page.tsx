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
} from "../data";
import "../client-stories.css";

function pad(n: number) { return padSlot(n); }

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = CLIENT_STORIES.find(s => s.slug === params.slug);

  if (!story || story.status !== 'client-approved' || !story.permissionGranted) {
    notFound();
  }

  const heroImage = story.images.find(i => i.type === 'project' || i.type === 'site') ?? story.images[0] ?? null;

  return (
    <main className="cs-case">
      <Link href="/client-stories" className="cs-back">← Client Stories</Link>

      {/* ── 01 / 15 HERO ────────────────────────────────────────────────── */}
      <div className="cs-case-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="cs-case-slot-num">{pad(story.slot)} / {pad(TOTAL_SLOTS)}</div>
          <h1 className="cs-case-name">{story.clientName}</h1>
          
          <div className="cs-case-meta-block">
            <div className="cs-case-meta-line">{story.location}</div>
            <div className="cs-case-meta-line">{story.propertyType}</div>
            <div className="cs-case-meta-line">{story.projectType}</div>
            {story.snapshot?.projectSize && <div className="cs-case-meta-line">{story.snapshot.projectSize}</div>}
            <div className="cs-case-meta-line">{DURATION_LABELS[story.consultationDuration]}</div>
            <div className="cs-case-meta-line">{story.consultationDate}</div>
          </div>
        </motion.div>
      </div>

      {heroImage && (
        <motion.img 
          src={heroImage.src} 
          alt="" 
          className="cs-case-hero-img" 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        />
      )}

      {/* ── PROJECT SNAPSHOT ──────────────────────────────────────────────── */}
      <div className="cs-snapshot">
        <div className="cs-snapshot-grid">
          <div>
            <div className="cs-snap-label">Client</div>
            <div className="cs-snap-val">{story.clientName}</div>
          </div>
          <div>
            <div className="cs-snap-label">Location</div>
            <div className="cs-snap-val">{story.location}</div>
          </div>
          <div>
            <div className="cs-snap-label">Property</div>
            <div className="cs-snap-val">{story.propertyType}</div>
          </div>
          {story.snapshot?.projectSize && (
            <div>
              <div className="cs-snap-label">Project Size</div>
              <div className="cs-snap-val">{story.snapshot.projectSize}</div>
            </div>
          )}
          <div>
            <div className="cs-snap-label">Project Stage</div>
            <div className="cs-snap-val" style={{ textTransform: 'capitalize' }}>{story.projectStage.replace('-', ' ')}</div>
          </div>
          {story.snapshot?.designRequirement && (
            <div>
              <div className="cs-snap-label">Design Requirement</div>
              <div className="cs-snap-val">{story.snapshot.designRequirement}</div>
            </div>
          )}
          <div>
            <div className="cs-snap-label">Consultation</div>
            <div className="cs-snap-val">{story.consultationDuration.replace('-min', ' Minutes')}</div>
          </div>
          {story.snapshot?.primaryFocus && (
            <div>
              <div className="cs-snap-label">Primary Focus</div>
              <div className="cs-snap-val">{story.snapshot.primaryFocus}</div>
            </div>
          )}
        </div>
      </div>

      <div className="cs-case-body">
        
        {/* ── THE CLIENT ──────────────────────────────────────────────────── */}
        {story.theClient && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="cs-section-title">The Client</h2>
            {story.theClient.who && <p className="cs-prose">{story.theClient.who}</p>}
            {story.theClient.goal && <p className="cs-prose">{story.theClient.goal}</p>}
            {story.theClient.whyContacted && <p className="cs-prose">{story.theClient.whyContacted}</p>}
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
                <h3 className="cs-section-subtitle">Property Configuration</h3>
                <p className="cs-prose">{story.theProject.configuration}</p>
              </>
            )}
            {story.theProject.condition && (
              <>
                <h3 className="cs-section-subtitle">Existing Condition</h3>
                <p className="cs-prose">{story.theProject.condition}</p>
              </>
            )}
            {story.theProject.scope && (
              <>
                <h3 className="cs-section-subtitle">Scope</h3>
                <p className="cs-prose">{story.theProject.scope}</p>
              </>
            )}
          </motion.section>
        )}

        {/* ── THE PROBLEM ─────────────────────────────────────────────────── */}
        {story.theProblem && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="cs-section-title">
              The problem wasn&apos;t the space.<br />It was the decision.
            </h2>
            {story.theProblem.notWorking && (
              <>
                <h3 className="cs-section-subtitle">What was not working?</h3>
                <p className="cs-prose">{story.theProblem.notWorking}</p>
              </>
            )}
            {story.theProblem.considering && (
              <>
                <h3 className="cs-section-subtitle">What were they considering?</h3>
                <p className="cs-prose">{story.theProblem.considering}</p>
              </>
            )}
            {story.theProblem.afraidOf && (
              <>
                <h3 className="cs-section-subtitle">What were they afraid of getting wrong?</h3>
                <p className="cs-prose">{story.theProblem.afraidOf}</p>
              </>
            )}
            {story.theProblem.whyOutsideOpinion && (
              <>
                <h3 className="cs-section-subtitle">Why did they need an outside opinion?</h3>
                <p className="cs-prose">{story.theProblem.whyOutsideOpinion}</p>
              </>
            )}
          </motion.section>
        )}

        {/* ── THE QUESTIONS ───────────────────────────────────────────────── */}
        {story.questions && story.questions.length > 0 && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="cs-section-title">The Questions We Needed To Answer</h2>
            <div className="cs-questions">
              {story.questions.map((q, i) => (
                <div key={i} className="cs-q-item">
                  <div className="cs-q-num">{pad(i + 1)}</div>
                  <div className="cs-q-text">{q}</div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── THE CONSULTATION (TIMELINE) ─────────────────────────────────── */}
        {story.consultationTimeline.length > 0 && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="cs-section-title">The Consultation</h2>
            <div className="cs-timeline">
              {story.consultationTimeline.map((step, i) => (
                <div key={i} className="cs-tl-step">
                  <div className="cs-tl-num">{pad(i + 1)}</div>
                  <div className="cs-tl-content">
                    <div className="cs-tl-phase">— {PHASE_LABELS[step.phase]}</div>
                    <div className="cs-prose" style={{ marginBottom: 0 }}>{step.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── WHAT WE SOLVED ──────────────────────────────────────────────── */}
        {story.whatWeSolved && story.whatWeSolved.length > 0 && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="cs-section-title">What We Solved</h2>
            {story.whatWeSolved.map((ws, i) => (
              <div key={i} className="cs-problem-module">
                <div className="cs-pm-label">Problem {pad(i + 1)}</div>
                <div className="cs-pm-title">{ws.problem}</div>
                
                <div className="cs-pm-label">TAAS Direction</div>
                <div className="cs-prose">{ws.taasDirection}</div>

                <div className="cs-pm-label">Why</div>
                <div className="cs-prose">{ws.why}</div>

                <div className="cs-pm-label">Result</div>
                <div className="cs-prose" style={{ marginBottom: 0 }}>{ws.result}</div>
              </div>
            ))}
          </motion.section>
        )}

        {/* ── DESIGN DECISIONS ────────────────────────────────────────────── */}
        {story.designDecisions && story.designDecisions.length > 0 && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="cs-section-title">Design Decisions</h2>
            {story.designDecisions.map((dd, i) => (
              <div key={i} style={{ marginBottom: '4rem' }}>
                <h3 className="cs-section-subtitle" style={{ marginTop: 0 }}>Decision {pad(i+1)}</h3>
                <div className="cs-prose"><strong>Before:</strong> {dd.before}</div>
                <div className="cs-prose"><strong>TAAS Recommendation:</strong> {dd.recommendation}</div>
                <div className="cs-prose"><strong>Final Decision:</strong> {dd.final}</div>
                <div className="cs-prose"><strong>Why it worked:</strong> {dd.whyItWorked}</div>
              </div>
            ))}
          </motion.section>
        )}

        {/* ── SPECIFIC SOLUTIONS (LAYOUT, MATERIAL, ETC) ──────────────────── */}
        {story.solutions && (
          <>
            {story.solutions.layout && (
              <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
                <h2 className="cs-section-title">Layout Solution</h2>
                <h3 className="cs-section-subtitle">Original Idea</h3>
                <p className="cs-prose">{story.solutions.layout.originalIdea}</p>
                <h3 className="cs-section-subtitle">Issue</h3>
                <p className="cs-prose">{story.solutions.layout.issue}</p>
                <h3 className="cs-section-subtitle">Recommended Direction</h3>
                <p className="cs-prose">{story.solutions.layout.recommendedDirection}</p>
                <h3 className="cs-section-subtitle">Final Direction</h3>
                <p className="cs-prose">{story.solutions.layout.finalDirection}</p>
                <h3 className="cs-section-subtitle">Result</h3>
                <p className="cs-prose">{story.solutions.layout.result}</p>
              </motion.section>
            )}
            
            {story.solutions.budget && (
              <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
                <h2 className="cs-section-title">Budget Direction</h2>
                <h3 className="cs-section-subtitle">Where they wanted to spend</h3>
                <p className="cs-prose">{story.solutions.budget.wantedToSpend}</p>
                <h3 className="cs-section-subtitle">Where we recommended spending</h3>
                <p className="cs-prose">{story.solutions.budget.recommendedSpending}</p>
                <h3 className="cs-section-subtitle">Where we recommended simplifying</h3>
                <p className="cs-prose">{story.solutions.budget.recommendedSimplifying}</p>
                <h3 className="cs-section-subtitle">Why</h3>
                <p className="cs-prose">{story.solutions.budget.why}</p>
              </motion.section>
            )}
          </>
        )}

        {/* ── FINAL OUTPUT ────────────────────────────────────────────────── */}
        {story.finalOutput && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="cs-section-title">The Final Direction</h2>
            <p className="cs-prose">{story.finalOutput.description}</p>
            {story.finalOutput.executionScope && (
              <div style={{ marginTop: '2rem', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.16em', color: 'var(--taas-text-primary)' }}>
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
          <div className="cs-quote-attr">{story.clientName}</div>
          <div className="cs-quote-loc">{story.location}</div>
          {story.feedbackSource && (
            <div className="cs-quote-source">{SOURCE_LABELS[story.feedbackSource]}</div>
          )}
        </motion.div>
      )}

      {/* ── WHAT CHANGED (BEFORE / AFTER) ─────────────────────────────────── */}
      {story.whatChanged && (
        <div className="cs-case-body">
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} style={{ marginTop: '6rem' }}>
            <h2 className="cs-section-title">What Changed</h2>
            <div className="cs-ba-grid">
              <div className="cs-ba-col">
                <div className="cs-ba-title">Before TAAS</div>
                <ul className="cs-ba-list">
                  {story.whatChanged.beforeTaas.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="cs-ba-col">
                <div className="cs-ba-title">After TAAS</div>
                <ul className="cs-ba-list">
                  {story.whatChanged.afterTaas.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* ── PROJECT OUTCOME ─────────────────────────────────────────────── */}
          {story.projectOutcome && story.projectOutcome.length > 0 && (
            <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
              <h3 className="cs-section-subtitle">The Client Left With:</h3>
              <ul className="cs-prose" style={{ listStyle: 'none', padding: 0 }}>
                {story.projectOutcome.map((outcome, i) => (
                  <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--taas-text-muted)', paddingTop: '0.4rem' }}>
                      {pad(i + 1)}
                    </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}
        </div>
      )}

      {/* ── PROJECT DATA PANEL ────────────────────────────────────────────── */}
      <motion.div className="cs-data-panel" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
        <div className="cs-dp-row">
          <div className="cs-dp-label">Project</div>
          <div className="cs-dp-val">{story.clientName}</div>
        </div>
        <div className="cs-dp-row">
          <div className="cs-dp-label">Location</div>
          <div className="cs-dp-val">{story.location}</div>
        </div>
        <div className="cs-dp-row">
          <div className="cs-dp-label">Property</div>
          <div className="cs-dp-val">{story.propertyType}</div>
        </div>
        <div className="cs-dp-row">
          <div className="cs-dp-label">Type</div>
          <div className="cs-dp-val">{story.projectType}</div>
        </div>
        {story.snapshot?.projectSize && (
          <div className="cs-dp-row">
            <div className="cs-dp-label">Area</div>
            <div className="cs-dp-val">{story.snapshot.projectSize}</div>
          </div>
        )}
        <div className="cs-dp-row">
          <div className="cs-dp-label">Consultation</div>
          <div className="cs-dp-val">{DURATION_LABELS[story.consultationDuration]}</div>
        </div>
        {story.topics.length > 0 && (
          <div className="cs-dp-row">
            <div className="cs-dp-label">Primary Topics</div>
            <div className="cs-dp-val">{story.topics.join(' / ')}</div>
          </div>
        )}
      </motion.div>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="cs-final-cta">
        <h2>Have a design decision you&apos;re not sure about?</h2>
        <p>Bring the problem. We&apos;ll work through the decision.</p>
        <div className="cs-ctas">
          <Link href="/book" className="cs-btn-pri">Book a Design Hour →</Link>
          <Link href="/client-stories" className="cs-btn-sec">← Back to Client Stories</Link>
        </div>
      </section>
    </main>
  );
}
