import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Restaurant Design Consultation | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • RESTAURANT DESIGN"
        title={'RESTAURANT\nLAYOUTS THAT\nWORK FOR THE\nSERVICE.'}
        subtitle="Design choices that improve guest experience, staff movement, and operational flow—before the build makes the wrong decision expensive."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE COMMERCIAL →"
        secondaryHref="/commercial"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">RESTAURANT</span>
            <h2>THE MOST ELEGANT SPACE IS ONE THAT WORKS SEAMLESSLY.</h2>
            <p className="page-sub">From seating to flow to service logic, design decisions should support hospitality, comfort, and efficient operations.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
