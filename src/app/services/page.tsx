"use client";

import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceIndex from '@/components/ServiceIndex';

const serviceItems = [
  { id: 'layout', number: '01', title: 'Layout', description: 'Are the room proportions, flow, and placement working — or just looking okay on paper?' },
  { id: 'kitchen', number: '02', title: 'Kitchen', description: 'Workflow, storage, width, appliance fit, and what actually makes the kitchen usable day to day.' },
  { id: 'materials', number: '03', title: 'Materials', description: 'Choosing finishes that look right, last right, and suit the use of the space.' },
  { id: 'storage', number: '04', title: 'Storage', description: 'Making sure the space has the right storage strategy instead of simply more doors and drawers.' },
  { id: 'renovation', number: '05', title: 'Renovation', description: 'What should be kept, altered, or left alone before the budget gets messy.' },
  { id: 'commercial', number: '06', title: 'Commercial', description: 'Helping the space function for the people using it, not just the brand or the moodboard.' },
  { id: 'second-opinion', number: '07', title: 'Second Opinion', description: 'A sharper, calmer view before you commit to a path, a vendor, or a layout decision.' },
  { id: 'not-sure', number: '08', title: 'Not Sure', description: 'When the problem is not quite clear yet — let\'s define the real decision before spending.' },
];

export default function ServicesPage() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • SERVICES"
        title={'WHAT\nARE YOU\nTRYING TO\nSOLVE?'}
        subtitle="You don’t need a full design project to get clarity. You need one sharp conversation about the decision in front of you."
        primaryLabel="BOOK A DESIGN HOUR ↗"
        primaryHref="/book"
        secondaryLabel="SEE HOW IT WORKS →"
        secondaryHref="/process"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">SERVICES</span>
            <h2>THE DESIGN DECISION IS THE WORK.</h2>
          </div>
        </div>
        <ServiceIndex items={serviceItems} />
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">WHY TAAS</span>
            <h2>YOU DO NOT NEED ANOTHER MOODBOARD.</h2>
            <p className="page-sub">You need a calmer answer, a sharper perspective, and a clear decision before it becomes expensive.</p>
          </div>
          <div style={{ marginTop: '24px' }}>
            <Link href="/book" className="btn-primary">BOOK A DESIGN HOUR ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
