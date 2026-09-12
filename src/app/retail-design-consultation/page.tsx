import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Retail Design Consultation | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • RETAIL DESIGN"
        title={'RETAIL SPACE\nTHAT FEELS\nGOOD AND\nSELLS BETTER.'}
        subtitle="We help review customer flow, display planning, and layout decisions that shape how the brand is experienced in the space."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE COMMERCIAL →"
        secondaryHref="/commercial"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">RETAIL</span>
            <h2>DESIGN SHOULD GUIDE THE CUSTOMER, NOT CONFUSE THEM.</h2>
            <p className="page-sub">From circulation to product visibility and ambience, the right layout supports the retail experience and the business itself.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
