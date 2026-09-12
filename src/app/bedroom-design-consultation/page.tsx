import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Bedroom Design Consultation | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • BEDROOM DESIGN"
        title={'SMARTER\nBEDROOM\nDECISIONS.'}
        subtitle="A focused design conversation for layout, storage, furniture balance, and how the room should actually function for daily life."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">BEDROOMS</span>
            <h2>BETTER FLOW. BETTER STORAGE. BETTER REST.</h2>
            <p className="page-sub">We help you decide how to use the room, what to keep, what to change, and what actually adds value before you commit to a full renovation.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
