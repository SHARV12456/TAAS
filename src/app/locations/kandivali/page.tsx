import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Interior Design Consultation in Kandivali | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • KANDIVALI"
        title={'INTERIOR DESIGN\nFOR KANDIVALI.'}
        subtitle="A focused conversation for homes and apartments that need better planning, stronger storage logic, and more confident design decisions."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">KANDIVALI</span>
            <h2>SMARTER LAYOUTS. BETTER STORAGE. MORE CALM.</h2>
            <p className="page-sub">The strongest home decisions come from understanding how the space works in real life—not just how it looks in a reference image.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
