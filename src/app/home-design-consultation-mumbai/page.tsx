import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Home Design Consultation Mumbai | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • HOME DESIGN"
        title={'HOME DESIGN\nCLARITY\nFOR MUMBAI.'}
        subtitle="Private, focused guidance for your home decisions—layout, storage, material choices, room planning, and how spaces should really work together."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="VIEW PRICING →"
        secondaryHref="/pricing"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">HOME</span>
            <h2>DECIDE WITH MORE CLARITY. LIVE WITH LESS REGRET.</h2>
            <p className="page-sub">The right home design direction gives you better space planning, smarter storage, and a strong functional basis before the renovation begins.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
