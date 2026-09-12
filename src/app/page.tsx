'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    { id: 'layout', num: '01', title: 'Layout', desc: 'Is this space actually working — or does it just look good in a reference image?' },
    { id: 'kitchen', num: '02', title: 'Kitchen', desc: 'Kitchen workflow, storage, layout — where do you actually need the most help?' },
    { id: 'materials', num: '03', title: 'Materials', desc: 'Choosing finishes for looks vs. finishes that actually suit the space and your budget.' },
    { id: 'storage', num: '04', title: 'Storage', desc: 'Do you need more storage — or better planning of what you have?' },
    { id: 'renovation', num: '05', title: 'Renovation', desc: 'What should stay, change, or completely overhaul before renovation costs spiral.' },
    { id: 'commercial', num: '06', title: 'Commercial', desc: 'Does the space actually support the business — or just look functional on paper?' },
    { id: 'second-opinion', num: '07', title: 'Second Opinion', desc: 'You have a direction. You want confidence before the commitment.' },
    { id: 'unsure', num: '08', title: 'Not Sure', desc: 'You know something needs attention. Let's figure out what — and why.' },
  ];

  const process = [
    { num: '01', title: 'Bring the Question', desc: 'Tell us what you're thinking about.' },
    { num: '02', title: 'Talk to a Designer', desc: 'One Designer Hour. Clear thinking.' },
    { num: '03', title: 'Leave with Clarity', desc: 'No ambiguity. Just better decisions.' },
  ];

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="section-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="label label--accent">TAAS® / DESIGN DECISION CONSULTATION</span>
              <h1 className="hero-title">
                BEFORE<br />
                YOU<br />
                SPEND.
              </h1>
              <p className="hero-subtitle">
                Ask a designer before an interior decision becomes an expensive one.
              </p>
              <div className="hero-cta">
                <Link href="/book" className="btn btn-primary">
                  Book a Design Hour
                </Link>
                <Link href="#how" className="btn btn-secondary">
                  Explore How It Works →
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-visual-bg"></div>
              <div className="hero-annotation">
                SECOND-<br />
                GUESSING<br />
                THIS?
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-services" id="services">
        <div className="container">
          <div className="section-header">
            <h2>ONE DECISION.<br />ONE DESIGNER.<br />CLEARER ANSWERS.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-row ${activeService === service.id ? 'is-active' : ''}`}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <div className="service-header">
                  <span className="service-num">{service.num}</span>
                  <h3 className="service-title">{service.title}</h3>
                  <span className="service-arrow">+</span>
                </div>
                {activeService === service.id && (
                  <div className="service-desc">
                    <p>{service.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-process" id="how">
        <div className="container">
          <h2 className="section-title">
            NO BIG<br />
            COMMITMENT.<br />
            <br />
            JUST A<br />
            BETTER DECISION.
          </h2>

          <div className="process-grid">
            {process.map((step, idx) => (
              <div key={idx} className="process-step">
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section-pricing-preview">
        <div className="container">
          <div className="pricing-header">
            <h2>CHOOSE HOW<br />DEEP YOU<br />WANT TO GO.</h2>
            <Link href="/pricing" className="btn btn-secondary">
              View All Pricing →
            </Link>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <span className="pricing-label">30 MIN</span>
              <h3>QUICK CHECK</h3>
              <p className="pricing-price">₹1,999</p>
              <p className="pricing-desc">Perfect for a quick question.</p>
            </div>
            <div className="pricing-card pricing-card--featured">
              <span className="pricing-label pricing-label--accent">60 MIN</span>
              <h3>DEEP DIVE</h3>
              <p className="pricing-price">₹3,999</p>
              <p className="pricing-desc">Most choose this. Clear direction.</p>
              <Link href="/book" className="btn btn-primary">
                Book Now
              </Link>
            </div>
            <div className="pricing-card">
              <span className="pricing-label">90 MIN</span>
              <h3>FULL DECISION</h3>
              <p className="pricing-price">₹5,999</p>
              <p className="pricing-desc">Complete clarity. All options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Make the Right Decision?</h2>
            <p>Book your Design Hour. Get clarity before you commit.</p>
            <Link href="/book" className="btn btn-primary">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .section-hero {
          padding: var(--space-16) 0;
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          border-bottom: 1px solid var(--border);
        }

        @media (max-width: 767px) {
          .section-hero {
            padding: var(--space-12) 0;
          }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: center;
        }

        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .hero-title {
          font-size: var(--text-5xl);
          line-height: var(--lh-tight);
          margin: 0;
        }

        .hero-subtitle {
          font-size: var(--text-xl);
          line-height: var(--lh-relaxed);
          margin: 0;
          color: var(--text-secondary);
        }

        .hero-cta {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          margin-top: var(--space-4);
        }

        @media (min-width: 640px) {
          .hero-cta {
            flex-direction: row;
            gap: var(--space-6);
          }
        }

        .hero-visual {
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1023px) {
          .hero-visual {
            height: 300px;
          }
        }

        .hero-visual-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(200, 227, 106, 0.1), rgba(232, 184, 165, 0.08));
          border-radius: var(--rounded-xl);
          border: 1px solid var(--border);
        }

        .hero-annotation {
          position: relative;
          z-index: 1;
          font-size: var(--text-3xl);
          font-weight: 800;
          letter-spacing: 0.02em;
          color: var(--text-primary);
          line-height: var(--lh-tight);
          text-align: center;
          padding: var(--space-6);
        }

        /* SERVICES */
        .section-services {
          border-bottom: 1px solid var(--border);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-14);
        }

        .section-header h2 {
          font-size: var(--text-4xl);
          line-height: var(--lh-tight);
          margin: 0;
        }

        .services-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .service-row {
          border: 1px solid var(--border);
          border-bottom: none;
          padding: var(--space-8);
          cursor: pointer;
          transition: all var(--transition-base);
          background: var(--bg-primary);
        }

        .service-row:last-child {
          border-bottom: 1px solid var(--border);
        }

        .service-row:hover {
          background: var(--bg-secondary);
          border-left: 3px solid var(--accent);
          padding-left: calc(var(--space-8) - 3px);
        }

        .service-row.is-active {
          background: var(--bg-secondary);
          border-left: 3px solid var(--accent);
          padding-left: calc(var(--space-8) - 3px);
        }

        .service-header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: var(--space-6);
          align-items: center;
        }

        .service-num {
          font-weight: 900;
          color: var(--accent);
          font-size: var(--text-lg);
        }

        .service-title {
          margin: 0;
          font-size: var(--text-lg);
        }

        .service-arrow {
          font-size: var(--text-2xl);
          font-weight: 300;
          color: var(--text-tertiary);
          transition: transform var(--transition-fast);
        }

        .service-row.is-active .service-arrow {
          transform: rotate(45deg);
        }

        .service-desc {
          grid-column: 1 / -1;
          margin-top: var(--space-6);
          padding-top: var(--space-6);
          border-top: 1px solid var(--border);
        }

        .service-desc p {
          margin: 0;
          line-height: var(--lh-relaxed);
        }

        /* PROCESS */
        .section-process {
          border-bottom: 1px solid var(--border);
          background: var(--bg-secondary);
        }

        .section-title {
          font-size: var(--text-4xl);
          line-height: var(--lh-tight);
          margin-bottom: var(--space-14);
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-10);
        }

        @media (max-width: 767px) {
          .process-grid {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
        }

        .process-step {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .step-num {
          font-size: var(--text-4xl);
          font-weight: 900;
          color: var(--accent);
          line-height: 1;
        }

        .process-step h3 {
          font-size: var(--text-xl);
          margin: 0;
        }

        .process-step p {
          margin: 0;
          color: var(--text-secondary);
        }

        /* PRICING PREVIEW */
        .section-pricing-preview {
          border-bottom: 1px solid var(--border);
        }

        .pricing-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-14);
          gap: var(--space-8);
        }

        @media (max-width: 767px) {
          .pricing-header {
            flex-direction: column;
            gap: var(--space-6);
          }
        }

        .pricing-header h2 {
          font-size: var(--text-4xl);
          line-height: var(--lh-tight);
          margin: 0;
          flex: 0 0 auto;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }

        @media (max-width: 1023px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }
        }

        .pricing-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          padding: var(--space-8);
          border-radius: var(--rounded-lg);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          transition: all var(--transition-base);
        }

        .pricing-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
        }

        .pricing-card--featured {
          background: var(--color-forest);
          color: var(--color-white);
          transform: scale(1.05);
        }

        @media (max-width: 1023px) {
          .pricing-card--featured {
            transform: scale(1);
          }
        }

        .pricing-card--featured .pricing-label {
          color: var(--accent);
        }

        .pricing-label {
          font-size: var(--text-xs);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-tertiary);
        }

        .pricing-label--accent {
          color: var(--accent);
        }

        .pricing-card h3 {
          font-size: var(--text-2xl);
          margin: 0;
        }

        .pricing-card--featured h3 {
          color: var(--color-white);
        }

        .pricing-price {
          font-size: var(--text-3xl);
          font-weight: 900;
          margin: 0;
        }

        .pricing-card--featured .pricing-price {
          color: var(--accent);
        }

        .pricing-desc {
          font-size: var(--text-sm);
          margin: 0;
          color: var(--text-secondary);
        }

        .pricing-card--featured .pricing-desc {
          color: rgba(255, 255, 255, 0.8);
        }

        .pricing-card .btn {
          align-self: flex-start;
          margin-top: var(--space-4);
        }

        /* CTA */
        .section-cta {
          background: var(--color-forest);
          color: var(--color-white);
        }

        .cta-box {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-8);
        }

        .cta-box h2 {
          font-size: var(--text-4xl);
          line-height: var(--lh-tight);
          margin: 0;
          color: var(--color-white);
        }

        .cta-box p {
          font-size: var(--text-lg);
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
        }

        .cta-box .btn {
          margin-top: var(--space-4);
        }
      `}</style>
    </main>
  );
}
