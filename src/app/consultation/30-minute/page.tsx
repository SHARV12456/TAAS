import Hero from '@/components/Hero';

export const metadata = {
  title: '30-Minute Quick Consultation | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • 30 MIN"
        title={'A QUICK\nCLEAR ANSWER.'}
        subtitle="Perfect for a single design decision, a fast directional review, or a precise question before a purchase, build, or layout commitment."
        primaryLabel="BOOK A 30-MINUTE SESSION ↗"
        primaryHref="/book"
        secondaryLabel="VIEW ALL OPTIONS →"
        secondaryHref="/pricing"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">30 MINUTES</span>
            <h2>FAST CLARITY. HIGHER CONFIDENCE.</h2>
            <p className="page-sub">We focus on the specific question in front of you so you can decide quickly without overcomplicating the process.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
