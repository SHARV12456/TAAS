import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Interior Designer Consultation Mumbai | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • MUMBAI"
        title={'DESIGNER\nGUIDANCE.\nNOT DELEGATION.'}
        subtitle="Get independent design direction for your space, without committing to an entire design project or vendor-led process."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE PROCESS →"
        secondaryHref="/process"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">INTERIOR DESIGNER CONSULTATION</span>
            <h2>YOU NEED A CLEARER ANSWER BEFORE THE SPEND STARTS.</h2>
            <p className="page-sub">TAAS helps you evaluate layout, storage, material choices, and the overall design direction with structure and clarity.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
