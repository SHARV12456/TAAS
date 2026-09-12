import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Rental Home Design Consultation | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • RENTAL HOME"
        title={'RENTAL SPACE,\nSMARTER DESIGN.'}
        subtitle="A focused design conversation for making better use of a rental home without expensive redesigns or the wrong layout decisions."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">RENTAL</span>
            <h2>GOOD DESIGN DOESN’T HAVE TO MEAN A MASSIVE RENOVATION.</h2>
            <p className="page-sub">We focus on what matters most in a rental: flexibility, usability, flow, and decisions that improve how the space actually works.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
