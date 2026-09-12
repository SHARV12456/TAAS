'use client';

import Link from 'next/link';
import { useState } from 'react';

export type HeroProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function Hero({
  eyebrow = 'TAAS®',
  title = 'BEFORE\nYOU\nSPEND.',
  subtitle = 'Talk to a designer before an interior decision becomes an expensive one.',
  primaryLabel = 'BOOK A DESIGN HOUR ↗',
  primaryHref = '/book',
  secondaryLabel = 'SEE HOW IT WORKS →',
  secondaryHref = '/process',
}: HeroProps) {
  const [decision, setDecision] = useState<'sure' | 'unsure' | null>(null);

  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-kicker">{eyebrow}</div>
          <h1 className="hero-headline">{title}</h1>
          <p className="hero-sub">{subtitle}</p>

          <div className="hero-actions">
            <Link href={primaryHref} className="btn-primary">{primaryLabel}</Link>
            <Link href={secondaryHref} className="btn-ghost">{secondaryLabel}</Link>
          </div>

          <div className="decision-prompt">
            <div className="hero-kicker" style={{ marginBottom: 0 }}>HOW SURE ARE YOU?</div>
            <div className="decision-row">
              <button type="button" className={`decision-option ${decision === 'sure' ? 'active' : ''}`} onClick={() => setDecision('sure')}>
                PRETTY SURE
              </button>
              <button type="button" className={`decision-option ${decision === 'unsure' ? 'active' : ''}`} onClick={() => setDecision('unsure')}>
                NOT QUITE
              </button>
            </div>
            <div className="decision-response">
              {decision === 'sure' && 'Good. Let\'s make sure.'}
              {decision === 'unsure' && 'That\'s exactly why TAAS exists.'}
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Editorial architectural working sheet">
          <div className="visual-sheet">
            <div className="visual-plan">
              <div style={{ textAlign: 'center', lineHeight: 1.5, color: '#173C35', fontWeight: 700 }}>
                FLOOR PLAN<br />
                MATERIAL SAMPLE<br />
                STORAGE STUDY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
