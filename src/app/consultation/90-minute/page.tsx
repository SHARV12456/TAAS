import Hero from '@/components/Hero';

export const metadata = {
  title: '90-Minute Deep-Dive | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • 90 MIN"
        title={'THE FULL\nDIRECTION.'}
        subtitle="For more layered discussions: bigger decisions, multiple trade-offs, and the clarity needed before committing to a larger project."
        primaryLabel="BOOK A 90-MINUTE SESSION ↗"
        primaryHref="/book"
        secondaryLabel="VIEW ALL OPTIONS →"
        secondaryHref="/pricing"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">90 MINUTES</span>
            <h2>ROOM TO THINK, COMPARE, AND DECODE THE BETTER PATH.</h2>
            <p className="page-sub">This session is designed for layered questions, broader project direction, and the moment when a larger decision demands more than a quick opinion.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
