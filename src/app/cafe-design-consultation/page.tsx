import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Cafe Design Consultation | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • CAFÉ DESIGN"
        title={'A CAFÉ\nHAS TO FEEL\nGOOD AND\nWORK HARD.'}
        subtitle="We help café owners refine customer flow, seating, ambience, and layout decisions before spend starts compounding."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE COMMERCIAL →"
        secondaryHref="/commercial"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">CAFÉ</span>
            <h2>AMBIENCE IS IMPORTANT. FUNCTION IS NON-NEGOTIABLE.</h2>
            <p className="page-sub">From seating strategy to service flow and operation efficiency, the right design decision reduces friction before opening day.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
