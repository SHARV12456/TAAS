import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Interior Design Consultation in Borivali | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • BORIVALI"
        title={'INTERIOR DESIGN\nFOR BORIVALI.'}
        subtitle="Clear design guidance for residential and family living spaces where optimization and function matter just as much as the look."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">BORIVALI</span>
            <h2>BETTER USE OF SPACE. BETTER DECISION-MAKING.</h2>
            <p className="page-sub">We help you review the layouts, materials, and room decisions that shape how your home actually functions day to day.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
