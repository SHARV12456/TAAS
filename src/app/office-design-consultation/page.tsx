import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Office Design Consultation | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • OFFICE DESIGN"
        title={'WORKSPACE\nLAYOUTS THAT\nSUPPORT THE\nWORK.'}
        subtitle="Whether it is a small studio, a growing team, or a client-facing office, sound planning matters before your layout becomes a productivity issue."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE COMMERCIAL →"
        secondaryHref="/commercial"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">OFFICE</span>
            <h2>THE SPACE SHOULD SUPPORT HOW PEOPLE WORK.</h2>
            <p className="page-sub">Our guidance helps you define work zones, circulation, and operational flow before expensive changes or fit-outs begin.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
