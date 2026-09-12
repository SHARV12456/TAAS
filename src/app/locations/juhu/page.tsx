import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Interior Design Consultation in Juhu | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • JUHU"
        title={'INTERIOR DESIGN\nFOR JUHU.'}
        subtitle="A refined, considered design conversation for homes and spaces where materials, proportion, and lifestyle fit matter deeply."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">JUHU</span>
            <h2>BETTER DESIGN DECISIONS FOR SPACES THAT FEEL CALMER AND MORE CONSIDERED.</h2>
            <p className="page-sub">The right planning and material guidance can make a powerful difference in comfort, proportion, and the overall quality of how the home feels.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
