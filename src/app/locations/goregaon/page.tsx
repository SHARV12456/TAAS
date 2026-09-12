import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Interior Design Consultation in Goregaon | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • GOREGAON"
        title={'INTERIOR DESIGN\nFOR GOREGAON.'}
        subtitle="An efficient, grounded design conversation for apartments, family homes, and working spaces that need better structure and clearer planning."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">GOREGAON</span>
            <h2>BETTER PLANNING FOR REAL LIFE, NOT JUST THE REFERENCE IMAGE.</h2>
            <p className="page-sub">A clearer design review helps you make better use of the space and avoid expensive solutions to the wrong problem.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
