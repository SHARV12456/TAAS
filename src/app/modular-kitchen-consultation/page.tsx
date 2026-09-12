import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Modular Kitchen Consultation | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • MODULAR KITCHEN"
        title={'THE KITCHEN\nIS THE MOST\nEXPENSIVE\nROOM TO GET\nWRONG.'}
        subtitle="Get objective guidance on workflow, cabinet planning, material choices, and the layout decisions that affect day-to-day use."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">KITCHEN</span>
            <h2>BETTER PLANNING. LESS WASTE. MORE DAILY EASE.</h2>
            <p className="page-sub">From work triangle to storage logic and appliance fit, the right kitchen layout saves time, money, and daily friction.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
