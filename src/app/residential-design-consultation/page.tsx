import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Residential Design Consultation | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • RESIDENTIAL"
        title={'RESIDENTIAL\nDESIGN\nCLARITY.'}
        subtitle="A focused consultation to review layout, storage, material choices, and practical decisions before you commit to a larger home project."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE HOW IT WORKS →"
        secondaryHref="/process"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">RESIDENTIAL</span>
            <h2>THE RIGHT HOME DECISION IS THE ONE THAT FITS REAL LIFE.</h2>
            <p className="page-sub">We help you evaluate the practical and emotional aspects of the space—how it should function, how it should feel, and what is worth changing.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
