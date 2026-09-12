import Hero from '@/components/Hero';

export const metadata = {
  title: 'Interior Design Consultation | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • INTERIOR DESIGN"
        title={'BETTER\nDECISIONS.\nBETTER SPACES.'}
        subtitle="Independently guided direction before you commit to a layout, material, storage decision, or a larger design spend."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE HOW IT WORKS →"
        secondaryHref="/process"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">INTERIOR DESIGN CONSULTATION</span>
            <h2>YOU DON’T NEED A WHOLE PROJECT. YOU NEED THE RIGHT ANSWER.</h2>
            <p className="page-sub">TAAS gives you a focused, design-led conversation around the decision in front of you, without the pressure of a full-service engagement.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
