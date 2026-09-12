import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Interior Design Consultation in Andheri | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • ANDHERI"
        title={'INTERIOR DESIGN\nFOR ANDHERI.'}
        subtitle="Focused support for layout, flow, storage, and room decisions in one of Mumbai’s most lived-in residential and commercial neighborhoods."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE SERVICES →"
        secondaryHref="/services"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">ANDHERI</span>
            <h2>SMARTER DESIGN FOR DENSER MUMBAI LIVING.</h2>
            <p className="page-sub">From compact homes to working spaces, better design guidance helps you use the square footage more effectively and make less expensive mistakes.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
