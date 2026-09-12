import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Interior Design Consultation in Colaba | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • COLABA"
        title={'INTERIOR DESIGN\nFOR COLABA.'}
        subtitle="Focused guidance for homes and design decisions in a city context where palette, proportion, and material choices must feel refined and functional."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">COLABA</span>
            <h2>QUALITY DESIGN STARTS WITH A CLARER DECISION.</h2>
            <p className="page-sub">We help define the right design direction before expensive decisions around materials, joinery, and finish selection lock you in.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
