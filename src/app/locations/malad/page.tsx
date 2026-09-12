import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Interior Design Consultation in Malad | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • MALAD"
        title={'INTERIOR DESIGN\nFOR MALAD.'}
        subtitle="Focused design support for homes, apartments, and family spaces that need clearer layout decisions and stronger use of available space."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">MALAD</span>
            <h2>THE RIGHT DECISION MAKES THE SPACE FEEL LARGER AND BETTER.</h2>
            <p className="page-sub">Design guidance helps you use the available square footage well, improve flow, and avoid decisions that fail functionally later.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
