'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SERVICES = [
  { id: 'layout', num: '01', title: 'Layout', desc: 'Is this space actually working — or does it just look good in a reference image?' },
  { id: 'kitchen', num: '02', title: 'Kitchen', desc: 'Kitchen workflow, storage, layout — where do you actually need the most help?' },
  { id: 'materials', num: '03', title: 'Materials', desc: 'Choosing finishes for looks vs. finishes that actually suit the space and your budget.' },
  { id: 'storage', num: '04', title: 'Storage', desc: 'Do you need more storage — or better planning of what you have?' },
  { id: 'renovation', num: '05', title: 'Renovation', desc: 'What should stay, change, or completely overhaul before renovation costs spiral.' },
  { id: 'commercial', num: '06', title: 'Commercial', desc: 'Does the space actually support the business — or just look functional on paper?' },
  { id: 'second-opinion', num: '07', title: 'Second Opinion', desc: 'You have a direction. You want confidence before the commitment.' },
  { id: 'unsure', num: '08', title: 'Not Sure', desc: 'You know something needs attention. Lets figure out what — and why.' },
];

const STORIES = [
  { location: 'BANDRA WEST', decision: 'KITCHEN + STORAGE', question: 'Was the larger island actually worth losing cabinet space?' },
  { location: 'DADAR EAST', decision: 'LAYOUT', question: 'Is an open plan right for this family — or a functional mistake?' },
  { location: 'COLABA', decision: 'MATERIALS', question: 'Premium finishes that actually wear well, or just look good initially?' },
];

export default function HomePage() {
  const [activeService, setActiveService] = useState('layout');
  const [decisionState, setDecisionState] = useState<'default' | 'sure' | 'unsure' | null>(null);

  const handleDecision = (state: 'sure' | 'unsure') => {
    setDecisionState(state);
  };

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">DESIGN DECISION SUPPORT</p>
            <h1>BEFORE<br/>YOU<br/>SPEND.</h1>
            <h2 className="hero-subheading">ASK A DESIGNER.</h2>
            
            <p className="hero-description">
              Layouts. Kitchens. Materials. Storage. One clear conversation before you commit.
            </p>

            <div style={{ marginBottom: 'var(--space-7)' }}>
              <Link href="/book" className="cta-btn">BOOK A DESIGN HOUR ↗</Link>
            </div>

            <Link href="#services" className="cta-secondary">Not sure what to ask? → Start here</Link>

            {/* Decision Prompt */}
            <div className="decision-prompt">
              <p className="decision-prompt-label">HOW SURE ARE YOU?</p>
              <div className="decision-buttons">
                <button className="decision-btn" onClick={() => handleDecision('sure')}>PRETTY SURE</button>
                <button className="decision-btn" onClick={() => handleDecision('unsure')}>NOT QUITE</button>
              </div>
              {decisionState && (
                <p className="decision-response">
                  {decisionState === 'sure' ? "Good. Let's make sure." : "Perfect. That's exactly what TAAS is for."}
                </p>
              )}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-content">
              <div className="hero-visual-accent accent-1"></div>
              <div className="hero-visual-accent accent-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED IN SECTION */}
      <section className="featured-section">
        <div className="featured-inner">
          <p className="featured-label">AS FEATURED IN</p>
          <div className="featured-grid">
            <div className="featured-item">
              <span>Architectural Digest</span>
              <span className="featured-sub">India</span>
            </div>
            <div className="featured-item">
              <span>Elle Décor</span>
              <span className="featured-sub">India</span>
            </div>
            <div className="featured-item">
              <span>India Today Homes</span>
              <span className="featured-sub">Design</span>
            </div>
            <div className="featured-item">
              <span>The Hindu</span>
              <span className="featured-sub">Property</span>
            </div>
            <div className="featured-item">
              <span>Home & Décor</span>
              <span className="featured-sub">Magazine</span>
            </div>
            <div className="featured-item">
              <span>Design Anthology</span>
              <span className="featured-sub">Studio</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-content">
          <div className="trust-item">
            <p className="trust-label">ONE HOUR</p>
            <p className="trust-title">ONE DECISION</p>
          </div>
          <div className="trust-item">
            <p className="trust-label">SUPPORTED BY</p>
            <p className="trust-title">CLARITY</p>
          </div>
          <div className="trust-item">
            <p className="trust-label">FOR</p>
            <p className="trust-title">BETTER OUTCOMES</p>
          </div>
        </div>
        <div style={{ marginTop: 'var(--space-6)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-tertiary)' }}>
            <span>LAYOUT</span>
            <span>KITCHEN</span>
            <span>MATERIALS</span>
            <span>STORAGE</span>
            <span>RENOVATION</span>
            <span>COMMERCIAL</span>
          </div>
        </div>
      </div>

      {/* PROBLEM SECTION */}
      <section className="problem-section">
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <h2 className="problem-heading">THE EXPENSIVE<br/>PART ISN'T<br/>THE DESIGN.<br/>IT'S GETTING<br/>IT WRONG.</h2>
          
          <div className="problem-grid">
            <div className="problem-card">
              <p className="problem-card-title">WRONG LAYOUT</p>
              <p className="problem-card-desc">→ expensive changes when the plan actually doesn't work</p>
            </div>
            <div className="problem-card">
              <p className="problem-card-title">WRONG MATERIAL</p>
              <p className="problem-card-desc">→ replacement years later when durability doesn't match the reality</p>
            </div>
            <div className="problem-card">
              <p className="problem-card-title">WRONG SIZE</p>
              <p className="problem-card-desc">→ wasted space because the scale looked right in the photo</p>
            </div>
            <div className="problem-card">
              <p className="problem-card-title">WRONG DECISION</p>
              <p className="problem-card-desc">→ living with it because the cost of change exceeds the benefit</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TAAS DOES */}
      <section className="what-section">
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <h2 className="what-heading">YOU DON'T<br/>NEED ANOTHER<br/>MOODBOARD.<br/>YOU NEED<br/>AN ANSWER.</h2>
          
          <p className="what-description">TAAS gives you focused design consultation around one specific decision. You bring the question. A designer helps you work through it. You leave with clarity.</p>
          
          <div className="benefits-list">
            <div className="benefit-item">
              <p className="benefit-label">NO PROJECT COMMITMENT</p>
            </div>
            <div className="benefit-item">
              <p className="benefit-label">NO VENDOR PRESSURE</p>
            </div>
            <div className="benefit-item">
              <p className="benefit-label">JUST A FOCUSED CONVERSATION</p>
            </div>
          </div>

          <Link href="/book" className="cta-btn">BOOK A DESIGN HOUR ↗</Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="problem-section" id="services">
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <h2 style={{ marginBottom: 'var(--space-8)' }}>WHAT TAAS<br/>HELPS DECIDE</h2>
          
          <div className="services-list">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className={`service-row ${activeService === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service.id)}
              >
                <p className="service-number">{service.num}</p>
                <div className="service-content">
                  <p className="service-title">{service.title}</p>
                  <p className="service-desc">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <h2 style={{ marginBottom: 'var(--space-8)' }}>HOW IT<br/>WORKS</h2>
          
          <div className="how-grid">
            <div className="how-step">
              <p className="step-number">01</p>
              <p className="step-title">BRING THE QUESTION</p>
              <p className="step-desc">You know what matters. Tell us what you're deciding.</p>
            </div>
            <div className="how-step">
              <p className="step-number">02</p>
              <p className="step-title">TALK TO A DESIGNER</p>
              <p className="step-desc">One focused conversation about your specific decision.</p>
            </div>
            <div className="how-step">
              <p className="step-number">03</p>
              <p className="step-title">LEAVE WITH CLARITY</p>
              <p className="step-desc">You know what works. Now you can move forward with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section">
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <h2 className="pricing-heading">CHOOSE YOUR<br/>DEPTH.</h2>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <p className="pricing-duration">30 MIN</p>
              <p className="pricing-name">QUICK CHECK</p>
              <p className="pricing-price">₹1,999</p>
              <p className="pricing-desc">Perfect for a specific question or quick directional clarity.</p>
              <div className="pricing-note">First 15 min included</div>
            </div>

            <div className="pricing-card featured">
              <p className="pricing-duration">60 MIN</p>
              <p className="pricing-name">DEEP DIVE</p>
              <p className="pricing-price">₹3,999</p>
              <p className="pricing-desc">Our most popular session. Full decision framework and clarity.</p>
              <div className="pricing-note">First 15 min included</div>
            </div>

            <div className="pricing-card">
              <p className="pricing-duration">90 MIN</p>
              <p className="pricing-name">FULL DECISION</p>
              <p className="pricing-price">₹5,999</p>
              <p className="pricing-desc">Deep dive with options, trade-offs, and implementation clarity.</p>
              <div className="pricing-note">First 15 min included</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <Link href="/book" className="cta-btn">BOOK A DESIGN HOUR ↗</Link>
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="stories-section">
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <h2 className="stories-heading">REAL<br/>QUESTIONS.<br/>BETTER<br/>DECISIONS.</h2>
          
          <div className="stories-grid">
            {STORIES.map((story, idx) => (
              <Link key={idx} href="/stories" className="story-card">
                <p className="story-location">{story.location}</p>
                <p className="story-decision">{story.decision}</p>
                <p className="story-question">"{story.question}"</p>
                <p className="story-link">READ STORY →</p>
              </Link>
            ))}
          </div>

          <p style={{ fontSize: 'var(--small-size)', color: 'var(--text-tertiary)', fontStyle: 'italic', marginTop: 'var(--space-6)' }}>
            * Illustrative experiences based on typical consultation patterns.
          </p>
        </div>
      </section>

      {/* DESIGNER SECTION */}
      <section className="designer-section">
        <div className="designer-inner">
          <div>
            <p className="designer-label">PRINCIPAL DESIGNER</p>
            <h2 className="designer-name">SHARVAYU<br/>SAWANT</h2>
            <p className="designer-quote">"TAAS exists for the moment before a design decision becomes an expensive one."</p>
            <Link href="/about" className="cta-secondary">ABOUT TAAS →</Link>
          </div>
          <div className="designer-image">Portrait image would appear here</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta-section">
        <div className="final-cta-inner">
          <h2 className="final-cta-heading">STILL<br/>THINKING<br/>ABOUT IT?</h2>
          <p className="final-cta-subtext">Maybe that's your answer.</p>
          
          <button className="final-cta-btn" onClick={() => window.location.href = '/book'}>
            BOOK A DESIGN HOUR ↗
          </button>

          <div className="final-cta-options">
            <span>30 MIN</span>
            <span>·</span>
            <span>60 MIN</span>
            <span>·</span>
            <span>90 MIN</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
