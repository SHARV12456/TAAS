import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Commercial Interior Design Consultation | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • COMMERCIAL"
        title={'THE SPACE\nSHOULD WORK\nFOR THE\nBUSINESS.'}
        subtitle="A sharper conversation around layout, flow, operational efficiency, and the right commercial design decisions before commitments are made."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">COMMERCIAL DESIGN</span>
            <h2>GOOD DESIGN SHOULD IMPROVE THE OPERATION, NOT JUST THE LOOK.</h2>
            <p className="page-sub">We focus on the decisions that influence customer flow, productivity, and how the space actually performs in use.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
