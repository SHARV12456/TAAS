import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Living Room Design Consultation | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • LIVING ROOM"
        title={'YOUR LIVING\nROOM SHOULD\nWORK AS HARD\nAS IT LOOKS.'}
        subtitle="We help you decide on layout, furniture placement, storage balance, and the design choices that make everyday use feel considered and easy."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">LIVING ROOM</span>
            <h2>GOOD LAYOUT MAKES THE ROOM FEEL BETTER EVERY SINGLE DAY.</h2>
            <p className="page-sub">A better plan gives you a room that feels balanced, functions more clearly, and avoids wasted space or awkward circulation.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
