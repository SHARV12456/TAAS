'use client';

import { useState } from 'react';

/**
 * PortfolioSection Component
 * Displays a grid of before/after portfolio images
 * TODO: Replace placeholder images with real project photos
 */

const portfolioProjects = [
  {
    id: 1,
    title: 'Living Room Transformation',
    category: 'Residential',
    before: 'Layout drift',
    after: 'Intentional flow',
    colorClass: 'palette-warm-beige',
  },
  {
    id: 2,
    title: 'Kitchen Redesign',
    category: 'Modular Kitchen',
    before: 'Cluttered plan',
    after: 'Efficient rhythm',
    colorClass: 'palette-warm-grey',
  },
  {
    id: 3,
    title: 'Bedroom Layout',
    category: 'Residential',
    before: 'Wasted corners',
    after: 'Calm circulation',
    colorClass: 'palette-soft-taupe',
  },
  {
    id: 4,
    title: 'Commercial Space',
    category: 'Commercial',
    before: 'No visual flow',
    after: 'Luxury clarity',
    colorClass: 'palette-deep-grey',
  },
];

function BeforeAfterSlider({
  beforeLabel,
  afterLabel,
  colorClass,
}: {
  beforeLabel: string;
  afterLabel: string;
  colorClass: string;
}) {
  const [position, setPosition] = useState(52);

  return (
    <div
      className={`portfolio-slider ${colorClass}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const next = ((e.clientX - rect.left) / rect.width) * 100;
        setPosition(Math.min(100, Math.max(0, next)));
      }}
      onTouchMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const touch = e.touches[0];
        const next = ((touch.clientX - rect.left) / rect.width) * 100;
        setPosition(Math.min(100, Math.max(0, next)));
      }}
      role="img"
      aria-label="Before and after transformation preview"
    >
      <div className="portfolio-layer portfolio-layer-before">
        <span className="portfolio-label before">Before</span>
        <div className="portfolio-blueprint-grid" aria-hidden="true" />
        <div className="portfolio-annotation">{beforeLabel}</div>
      </div>

      <div className="portfolio-layer portfolio-layer-after" style={{ width: `${position}%` }}>
        <span className="portfolio-label after">After</span>
        <div className="portfolio-blueprint-grid" aria-hidden="true" />
        <div className="portfolio-annotation">{afterLabel}</div>
      </div>

      <div className="portfolio-divider" style={{ left: `${position}%` }}>
        <span className="portfolio-handle">↔</span>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>Our Work</p>
          <h2 className="portfolio-headline">Before &amp; After: real clarity.</h2>
          <p className="portfolio-subtitle">See how TAAS direction transforms a vague idea into an intentional, workable space.</p>
        </div>

        <div className="portfolio-grid">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <BeforeAfterSlider
                beforeLabel={project.before}
                afterLabel={project.after}
                colorClass={project.colorClass}
              />

              <div className="portfolio-meta">
                <h3 className="portfolio-title">{project.title}</h3>
                <span className="portfolio-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p style={{ color: 'var(--color-grey)', marginBottom: '1.5rem' }}>
            These transformations started with clarity. Let’s define the direction for your space.
          </p>
          <a href="#book" className="prem-btn" data-cursor="→">
            <span>View Full Portfolio</span>
            <span className="prem-btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
