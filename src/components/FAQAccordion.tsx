'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  style?: React.CSSProperties;
}

export default function FAQAccordion({ items, style }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={style}>
      {items.map((item, i) => (
        <div
          key={i}
          className="accordion-item"
          style={{ borderTop: i === 0 ? '1px solid var(--color-light-grey)' : 'none' }}
        >
          <button
            className="accordion-trigger"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span style={{ paddingRight: '1rem', fontWeight: 500, fontSize: '0.9375rem' }}>{item.q}</span>
            <ChevronDown
              size={16}
              style={{
                flexShrink: 0,
                transition: 'transform 0.25s ease',
                transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                color: 'var(--color-grey)',
              }}
            />
          </button>
          <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--color-charcoal-light)',
                lineHeight: 1.7,
              }}
            >
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
