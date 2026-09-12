import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Interior Design Consultation in Worli | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • WORLI"
        title={'INTERIOR DESIGN\nFOR WORLI.'}
        subtitle="A more considered design conversation for homes and spaces where proportion, materials, and flow all need to feel deliberate."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">WORLI</span>
            <h2>QUALITY SPACE IS DEFINED BY HOW WELL IT FUNCTIONS.</h2>
            <p className="page-sub">The right layout and material decisions can make a home feel more refined, more spacious, and more carefully considered.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
