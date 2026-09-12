'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceIndex from '@/components/ServiceIndex';
import Footer from '@/components/Footer';

const serviceItems = [
  { id: 'layout', number: '01', title: 'Layout', description: 'Are the room proportions, flow, and placement working — or just looking okay on paper?' },
  { id: 'kitchen', number: '02', title: 'Kitchen', description: 'Workflow, storage, width, appliance fit, and what actually makes the kitchen usable day to day.' },
  { id: 'materials', number: '03', title: 'Materials', description: 'Choosing finishes that look right, last right, and suit the use of the space.' },
  { id: 'storage', number: '04', title: 'Storage', description: 'Making sure the space has the right storage strategy instead of simply more doors and drawers.' },
  { id: 'renovation', number: '05', title: 'Renovation', description: 'What should be kept, altered, or left alone before the budget gets messy.' },
  { id: 'commercial', number: '06', title: 'Commercial', description: 'Helping the space function for the people using it, not just the brand or the moodboard.' },
  { id: 'second-opinion', number: '07', title: 'Second Opinion', description: 'A sharper, calmer view before you commit to a path, a vendor, or a layout decision.' },
  { id: 'not-sure', number: '08', title: 'Not Sure', description: 'When the problem is not quite clear yet — let’s define the real decision before spending.' },
];

const stories = [
  { location: 'BANDRA WEST', decision: 'KITCHEN + STORAGE', question: 'Was the larger island actually worth losing cabinet space?' },
  { location: 'DADAR EAST', decision: 'LAYOUT', question: 'Is the open plan actually making life easier — or just looking better on paper?' },
  { location: 'COLABA', decision: 'MATERIALS', question: 'Which finish actually holds up to use — and which one only looks premium at the start?' },
];

export default function HomePage() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • DESIGN CONSULTATION"
        title={'BEFORE\nYOU\nSPEND.'}
        subtitle="Layouts. Kitchens. Materials. Storage. One clear conversation before a decision becomes an expensive mistake."
        primaryLabel="BOOK A DESIGN HOUR ↗"
        primaryHref="/book"
        secondaryLabel="SEE HOW IT WORKS →"
        secondaryHref="/process"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">TAAS</span>
            <h2>THE EXPENSIVE PART ISN’T THE DESIGN. IT’S GETTING IT WRONG.</h2>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="categories" aria-label="Core service categories">
            <span className="category">LAYOUT</span>
            <span className="category">KITCHEN</span>
            <span className="category">MATERIALS</span>
            <span className="category">STORAGE</span>
            <span className="category">RENOVATION</span>
            <span className="category">COMMERCIAL</span>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">WHAT TAAS DOES</span>
            <h2>YOU DON’T NEED ANOTHER MOODBOARD. YOU NEED A SHARPER ANSWER.</h2>
            <p className="page-sub">TAAS gives you independent design direction around one specific decision, before it becomes a major cost or a livable regret.</p>
          </div>
        </div>
        <ServiceIndex items={serviceItems} />
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>ONE QUESTION. ONE CONVERSATION. ONE CLEARER WAY FORWARD.</h2>
          </div>

          <div className="process">
            <div className="process-step">
              <div className="process-number">01</div>
              <div>
                <div className="process-title">BRING THE QUESTION</div>
                <p className="process-desc">You know what matters. Tell us what you’re deciding.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-number">02</div>
              <div>
                <div className="process-title">GET DIRECTION</div>
                <p className="process-desc">One focused conversation about your actual design problem.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-number">03</div>
              <div>
                <div className="process-title">MOVE WITH CONFIDENCE</div>
                <p className="process-desc">Leave with clarity, trade-offs, and a better decision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">DECISION SUPPORT</span>
            <h2>CHOOSE YOUR DEPTH.</h2>
            <p className="page-sub">Consultation packages designed for the moment right before you spend too much on the wrong direction.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-duration">30 MIN</div>
              <div className="pricing-label">QUICK CHECK</div>
              <div className="pricing-price">₹1,999</div>
              <p className="pricing-desc">For a single design question or a fast directional answer.</p>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-duration">60 MIN</div>
              <div className="pricing-label">DEEP DIVE</div>
              <div className="pricing-price">₹3,999</div>
              <p className="pricing-desc">For multiple decisions, trade-offs, and a more complete view.</p>
            </div>
            <div className="pricing-card">
              <div className="pricing-duration">90 MIN</div>
              <div className="pricing-label">FULL DIRECTION</div>
              <div className="pricing-price">₹5,999</div>
              <p className="pricing-desc">For larger updates, broader questions, or a stronger decision framework.</p>
            </div>
          </div>

          <div style={{ marginTop: '28px' }}>
            <Link href="/book" className="btn-primary">BOOK A DESIGN HOUR ↗</Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">CLIENT STORIES</span>
            <h2>REAL QUESTIONS. BETTER DECISIONS.</h2>
          </div>

          <div className="stories">
            {stories.map((story) => (
              <article key={story.location} className="story-item">
                <div className="story-image" style={{ background: 'linear-gradient(135deg, #d9d0bf, #f7f0e6)' }} />
                <div>
                  <div className="story-meta">{story.location}</div>
                  <div className="story-category">{story.decision}</div>
                  <p className="story-quote">“{story.question}”</p>
                  <Link href="/client-stories" className="story-link">READ STORY →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <h2>STILL<br />THINKING<br />ABOUT IT?</h2>
          <p>That might already be the answer.</p>
          <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '28px' }}>
            <Link href="/book" className="btn-primary">BOOK A DESIGN HOUR ↗</Link>
          </div>
          <div className="final-cta-meta">
            <span>30 MIN</span>
            <span>•</span>
            <span>60 MIN</span>
            <span>•</span>
            <span>90 MIN</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
