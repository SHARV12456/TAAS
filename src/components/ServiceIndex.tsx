'use client';

import { useState } from 'react';

export type ServiceItem = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export default function ServiceIndex({ items }: { items: ServiceItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  return (
    <section className="container">
      <div className="services-index" aria-label="Services index">
        {items.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`service-row ${active === item.id ? 'active' : ''}`}
            onClick={() => setActive(item.id)}
            onMouseEnter={() => setActive(item.id)}
          >
            <span className="service-number">{item.number}</span>
            <span className="service-title">{item.title}</span>
            <span className="service-desc">{item.description}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
