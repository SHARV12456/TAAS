"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
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
  const storyIndex = CLIENT_STORIES.findIndex(s => s.slug === params.slug);
  const story = CLIENT_STORIES[storyIndex];

  if (!story || story.status !== 'client-approved' || !story.permissionGranted) {
    notFound();
  }

  let nextStory = null;
  for (let i = 1; i <= TOTAL_SLOTS; i++) {
    const checkIdx = (storyIndex + i) % TOTAL_SLOTS;
    const s = CLIENT_STORIES[checkIdx];
    if (s.status === 'client-approved' && s.permissionGranted) {
      nextStory = s;
      break;
    }
  }

  const displayName = story.clientDisplayName || story.clientName;
  const hImg = story.heroImage || (story.images.length > 0 ? story.images[0] : null);

  return (
    <main className="cs-case">
      <Link href="/client-stories" className="cs-back">← All Client Stories</Link>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <div className="cs-case-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--taas-text-muted)' }}>
            TAAS® &nbsp;·&nbsp; CLIENT STORY · {pad(story.slot)} / {pad(TOTAL_SLOTS)}
          </div>
          
          <h1 className="cs-case-name">{displayName}</h1>
          
          <div className="cs-case-meta-block">
            <div className="cs-case-meta-line">{story.location} · MUMBAI</div>
            <div className="cs-case-meta-line">{story.propertyType}</div>
            <div className="cs-case-meta-line">{story.projectType}</div>
          </div>
        </motion.div>
      </div>

      <div className="cs-case-hero-img-wrap" style={{ viewTransitionName: `story-img-\${story.slug}` }}>
        {hImg && (
          <>
            <motion.img 
              src={hImg.src} 
              alt={hImg.caption || ''} 
              className="cs-case-hero-img" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            />
            {hImg.caption && (
              <div style={{ maxWidth: 'var(--taas-container)', margin: '1rem auto 0', padding: '0 5%', fontSize: '0.65rem', color: 'var(--taas-text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                {hImg.caption}
              </div>
            )}
          </>
        )}
      </div>

      {/* ── PROJECT SNAPSHOT ──────────────────────────────────────────────── */}
      <div className="cs-snapshot" style={{ marginTop: '3rem' }}>
        <div className="cs-snapshot-grid">
          <div><div className="cs-snap-label">Client</div><div className="cs-snap-val">{displayName}</div></div>
          <div><div className="cs-snap-label">Location</div><div className="cs-snap-val">{story.location}</div></div>
          <div><div className="cs-snap-label">Property</div><div className="cs-snap-val">{story.propertyType}</div></div>
          <div><div className="cs-snap-label">Project</div><div className="cs-snap-val">{story.propertyType.includes('Commercial') || story.propertyType.includes('Office') ? 'Commercial' : 'Residential'}</div></div>
          {story.area && (
            <div><div className="cs-snap-label">Area</div><div className="cs-snap-val">{story.area}</div></div>
          )}
          <div><div className="cs-snap-label">Project Stage</div><div className="cs-snap-val" style={{ textTransform: 'capitalize' }}>{story.projectStage.replace('-', ' ')}</div></div>
          <div><div className="cs-snap-label">Consultation</div><div className="cs-snap-val">{DURATION_LABELS[story.consultationDuration]}</div></div>
          {story.snapshotFocus && (
            <div><div className="cs-snap-label">Primary Focus</div><div className="cs-snap-val">{story.snapshotFocus}</div></div>
          )}
        </div>
      </div>

      <div className="cs-case-body">
        
        {/* ── THE CLIENT ──────────────────────────────────────────────────── */}
        {story.clientIntro && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-50px'}}>
            <h2 className="cs-section-title">Meet the Client</h2>
            <p className="cs-prose">{story.clientIntro}</p>
          </motion.section>
        )}

        {/* ── THE PROJECT ─────────────────────────────────────────────────── */}
        <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-50px'}}>
          <h2 className="cs-section-title">The Project</h2>
          {story.projectConfig && (
            <>
              <h3 className="cs-section-subtitle">Property</h3>
              <p className="cs-prose">{story.projectConfig}</p>
            </>
          )}
          <h3 className="cs-section-subtitle">Location</h3>
          <p className="cs-prose">{story.location.toUpperCase()}</p>
          {story.area && (
            <>
              <h3 className="cs-section-subtitle">Area</h3>
              <p className="cs-prose">{story.area}</p>
            </>
          )}
          <h3 className="cs-section-subtitle">Project Stage</h3>
          <p className="cs-prose" style={{textTransform:'capitalize'}}>{story.projectStage.replace('-', ' ')}</p>
          {story.designScope && (
            <>
              <h3 className="cs-section-subtitle">Design Scope</h3>
              <p className="cs-prose">{story.designScope}</p>
            </>
          )}
          {story.clientRequirement && (
            <>
              <h3 className="cs-section-subtitle">Client Requirement</h3>
              <p className="cs-prose">{story.clientRequirement}</p>
            </>
          )}
        </motion.section>

        {/* ── THE PROBLEM ─────────────────────────────────────────────────── */}
        {story.theProblemDetail && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-50px'}}>
            <h2 className="cs-section-title">The Problem</h2>
            <p className="cs-prose">{story.theProblemDetail}</p>
          </motion.section>
        )}

        {/* ── BEFORE TAAS ─────────────────────────────────────────────────── */}
        {(story.beforeImage || story.beforeSaw) && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-50px'}}>
            {story.beforeImage && (
              <div style={{ marginBottom: '3rem' }}>
                <img src={story.beforeImage.src} alt="Before TAAS" style={{width:'100%', aspectRatio:'16/9', objectFit:'cover', background:'var(--taas-bg-elevated)'}} />
                {story.beforeImage.caption && (
                  <div style={{ marginTop:'1rem', fontSize:'0.65rem', color:'var(--taas-text-muted)', textTransform:'uppercase', letterSpacing:'0.12em' }}>
                    {story.beforeImage.caption}
                  </div>
                )}
              </div>
            )}
            
            {story.beforeSaw && (
              <>
                <h3 className="cs-section-subtitle" style={{marginTop:0}}>What We Saw</h3>
                <p className="cs-prose">{story.beforeSaw}</p>
              </>
            )}
            {story.beforeUnclear && (
              <>
                <h3 className="cs-section-subtitle">What Was Unclear</h3>
                <p className="cs-prose">{story.beforeUnclear}</p>
              </>
            )}
            {story.beforeNeededChange && (
              <>
                <h3 className="cs-section-subtitle">What Needed To Change</h3>
                <p className="cs-prose">{story.beforeNeededChange}</p>
              </>
            )}
          </motion.section>
        )}

        {/* ── THE QUESTIONS ───────────────────────────────────────────────── */}
        {story.questions && story.questions.length > 0 && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-50px'}}>
            <h2 className="cs-section-title">The Questions We Had To Answer</h2>
            {story.questions.map((q, i) => (
              <div key={i} style={{ marginBottom: '2.5rem' }}>
                <div style={{ fontSize:'0.7rem', fontWeight:800, color:'var(--taas-text-muted)', marginBottom:'0.5rem', letterSpacing:'0.12em' }}>0{i+1}</div>
                <div style={{ fontSize:'1.3rem', fontWeight:800, color:'var(--taas-text-primary)', marginBottom:'0.5rem', lineHeight:1.4 }}>{q.question}</div>
                <div className="cs-prose" style={{ marginBottom:0 }}>{q.context}</div>
              </div>
            ))}
          </motion.section>
        )}

        {/* ── THE TAAS CONSULTATION ───────────────────────────────────────── */}
        {story.consultationTimeline && story.consultationTimeline.length > 0 && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-50px'}}>
            <h2 className="cs-section-title">The TAAS Consultation</h2>
            <div className="cs-timeline" style={{ marginTop: '3rem' }}>
              {story.consultationTimeline.map((step, i) => (
                <div key={i} style={{ display:'flex', gap:'2rem', marginBottom:'2.5rem' }}>
                  <div style={{ fontSize:'0.8rem', fontWeight:800, color:'var(--taas-text-muted)', letterSpacing:'0.1em' }}>0{i+1}</div>
                  <div style={{ flexGrow:1, paddingBottom:'2.5rem', borderBottom:'1px solid var(--taas-line)' }}>
                    <div style={{ fontSize:'0.75rem', fontWeight:800, color:'var(--taas-text-primary)', textTransform:'uppercase', letterSpacing:'0.16em', marginBottom:'1rem' }}>
                      — {PHASE_LABELS[step.phase] || step.phase}
                    </div>
                    <div className="cs-prose" style={{ marginBottom:0 }}>{step.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── PROBLEM -> SOLUTION ─────────────────────────────────────────── */}
        {story.whatWeSolved && story.whatWeSolved.length > 0 && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-50px'}}>
            {story.whatWeSolved.map((ws, i) => (
              <div key={i} style={{ marginBottom: '6rem' }}>
                <h3 className="cs-section-subtitle" style={{ fontSize:'1.5rem', color:'var(--taas-text-primary)', marginTop:0 }}>
                  Problem 0{i+1}
                </h3>
                <h4 style={{ fontSize:'1.2rem', fontWeight:700, margin:'0 0 1rem' }}>{ws.problem}</h4>
                <p className="cs-prose">{ws.explanation}</p>
                
                {ws.image && (
                  <div style={{ margin:'2rem 0' }}>
                    <img src={ws.image.src} alt="" style={{ width:'100%', background:'var(--taas-bg-elevated)' }} />
                    {ws.image.caption && <div style={{ marginTop:'0.5rem', fontSize:'0.6rem', color:'var(--taas-text-muted)', textTransform:'uppercase', letterSpacing:'0.12em' }}>{ws.image.caption}</div>}
                  </div>
                )}
                
                <div style={{ fontSize:'0.65rem', fontWeight:800, color:'var(--taas-text-muted)', textTransform:'uppercase', letterSpacing:'0.16em', marginBottom:'0.5rem', marginTop:'2.5rem' }}>What We Recommended</div>
                <div className="cs-prose">{ws.recommendation}</div>

                <div style={{ fontSize:'0.65rem', fontWeight:800, color:'var(--taas-text-muted)', textTransform:'uppercase', letterSpacing:'0.16em', marginBottom:'0.5rem', marginTop:'2.5rem' }}>Why</div>
                <div className="cs-prose">{ws.why}</div>

                <div style={{ fontSize:'0.65rem', fontWeight:800, color:'var(--taas-text-muted)', textTransform:'uppercase', letterSpacing:'0.16em', marginBottom:'0.5rem', marginTop:'2.5rem' }}>Final Decision</div>
                <div className="cs-prose">{ws.decision}</div>

                <div style={{ fontSize:'0.65rem', fontWeight:800, color:'var(--taas-text-muted)', textTransform:'uppercase', letterSpacing:'0.16em', marginBottom:'0.5rem', marginTop:'2.5rem' }}>Result</div>
                <div className="cs-prose" style={{ marginBottom:0 }}>{ws.result}</div>
              </div>
            ))}
          </motion.section>
        )}

        {/* ── DESIGN DECISIONS ────────────────────────────────────────────── */}
        {story.designDecisions && story.designDecisions.length > 0 && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-50px'}}>
            <h2 className="cs-section-title">The Decisions That Changed</h2>
            {story.designDecisions.map((dd, i) => (
              <div key={i} style={{ marginBottom: '4rem', padding: '3rem', background: 'var(--taas-bg-elevated)', borderLeft: '4px solid var(--taas-text-primary)' }}>
                {dd.image && (
                  <div style={{ marginBottom:'2.5rem' }}>
                    <img src={dd.image.src} alt="" style={{width:'100%', background:'var(--taas-bg)'}} />
                    {dd.image.caption && <div style={{ marginTop:'0.5rem', fontSize:'0.6rem', color:'var(--taas-text-muted)', textTransform:'uppercase', letterSpacing:'0.12em' }}>{dd.image.caption}</div>}
                  </div>
                )}
                <div style={{ fontSize:'0.65rem', fontWeight:800, color:'var(--taas-text-muted)', textTransform:'uppercase', letterSpacing:'0.16em', marginBottom:'0.5rem' }}>Before</div>
                <div className="cs-prose">{dd.before}</div>
                <div style={{ fontSize:'0.65rem', fontWeight:800, color:'var(--taas-text-muted)', textTransform:'uppercase', letterSpacing:'0.16em', marginBottom:'0.5rem', marginTop:'1.5rem' }}>TAAS Direction</div>
                <div className="cs-prose">{dd.recommendation}</div>
                <div style={{ fontSize:'0.65rem', fontWeight:800, color:'var(--taas-text-muted)', textTransform:'uppercase', letterSpacing:'0.16em', marginBottom:'0.5rem', marginTop:'1.5rem' }}>Final</div>
                <div className="cs-prose">{dd.final}</div>
                <div style={{ fontSize:'0.65rem', fontWeight:800, color:'var(--taas-text-muted)', textTransform:'uppercase', letterSpacing:'0.16em', marginBottom:'0.5rem', marginTop:'1.5rem' }}>Why</div>
                <div className="cs-prose" style={{marginBottom:0}}>{dd.why}</div>
              </div>
            ))}
          </motion.section>
        )}

        {/* ── FINAL OUTPUT ────────────────────────────────────────────────── */}
        {story.finalDirectionDetails && (
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-50px'}}>
            <h2 className="cs-section-title">The Final Direction</h2>
            
            {story.finalDirectionImage && (
              <div style={{ margin: '3rem 0' }}>
                <img src={story.finalDirectionImage.src} alt="" style={{ width:'100%', background:'var(--taas-bg-elevated)' }} />
                {story.finalDirectionImage.caption && (
                  <div style={{ marginTop:'0.5rem', fontSize:'0.65rem', color:'var(--taas-text-muted)', textTransform:'uppercase', letterSpacing:'0.12em' }}>
                    {story.finalDirectionImage.caption}
                  </div>
                )}
              </div>
            )}
            
            <div className="cs-prose">{story.finalDirectionDetails}</div>
            
            {story.executionScope && (
              <div style={{ marginTop: '3rem', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.16em', color: 'var(--taas-text-primary)' }}>
                {story.executionScope}
              </div>
            )}
          </motion.section>
        )}
      </div>

      {/* ── CLIENT REVIEW ─────────────────────────────────────────────────── */}
      {story.exactQuote && (
        <motion.div className="cs-quote" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true, margin:'-50px'}}>
          <h2 style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', marginBottom: '3rem' }}>
            In The Client&apos;s Words
          </h2>
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

      {/* ── REAL PROJECT GALLERY ──────────────────────────────────────────── */}
      {story.images && story.images.length > 0 && (
        <div style={{ marginTop: '6rem' }}>
          <h2 className="cs-section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>The Project</h2>
          <div className="cs-gallery">
            <div className="cs-gallery-grid">
              {story.images.map((img, i) => (
                <div key={i} className="cs-gallery-img-wrap">
                  <img src={img.src} alt={img.caption || ''} className="cs-gallery-img" />
                  {img.caption && (
                    <div className="cs-gallery-caption">{img.caption}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── PROJECT OUTCOME ─────────────────────────────────────────────── */}
      {story.projectOutcome && story.projectOutcome.length > 0 && (
        <div className="cs-case-body">
          <motion.section className="cs-section" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-50px'}}>
            <h2 className="cs-section-title">What The Client Left With</h2>
            <div style={{ marginTop: '3rem' }}>
              {story.projectOutcome.map((outcome, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--taas-text-muted)', paddingTop: '0.3rem' }}>
                    0{i+1}
                  </div>
                  <div style={{ fontSize: '1.15rem', color: 'var(--taas-text-primary)' }}>
                    {outcome}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      )}

      {/* ── NEXT PROJECT ──────────────────────────────────────────────────── */}
      {nextStory && (
        <div className="cs-next">
          <div className="cs-next-label">Next Story &nbsp;·&nbsp; {pad(nextStory.slot)} / {pad(TOTAL_SLOTS)}</div>
          <Link href={`/client-stories/\${nextStory.slug}`} className="cs-next-card">
            <div>
              <h3 className="cs-next-name">{nextStory.clientDisplayName || nextStory.clientName}</h3>
              <div className="cs-next-meta">{nextStory.location} &nbsp;·&nbsp; {nextStory.projectType}</div>
              <span className="cs-next-read">View Case Study →</span>
            </div>
            {nextStory.heroImage || nextStory.images[0] ? (
              <img src={(nextStory.heroImage || nextStory.images[0]).src} alt="" className="cs-next-img" />
            ) : (
              <div className="cs-next-img" style={{display:'flex',alignItems:'center',justifyContent:'center', fontSize:'0.6rem', opacity:0.2, letterSpacing:'0.12em'}}>Project Image</div>
            )}
          </Link>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/client-stories" style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--taas-text-muted)', textDecoration: 'none' }}>
              ← Back to all client stories
            </Link>
          </div>
        </div>
      )}

    </main>
  );
}

export async function generateStaticParams() {
  return CLIENT_STORIES.map((story) => ({
    slug: story.slug,
  }));
}
