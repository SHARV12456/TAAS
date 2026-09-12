import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Interior Design Consultation in Bandra | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • BANDRA"
        title={'INTERIOR DESIGN\nFOR BANDRA.'}
        subtitle="Design direction for homes, apartments, and lifestyle spaces where clarity and material decisions carry significant weight."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">BANDRA</span>
            <h2>BETTER DECISIONS FOR SPACES THAT MUST FEEL BOTH LIVABLE AND CONSIDERED.</h2>
            <p className="page-sub">TAAS helps you refine layout, material, storage, and design priorities with more confidence before you commit to expensive decisions.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
