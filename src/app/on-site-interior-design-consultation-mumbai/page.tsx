import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'On Site Interior Design Consultation Mumbai | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Hero
        eyebrow="TAAS® • ONSITE CONSULTATION"
        title={'ON-SITE\nGUIDANCE.\nREAL SPACE.\nREAL DECISIONS.'}
        subtitle="We help you review the actual site, understand use, and make better decisions with the context of the space in front of you."
        primaryLabel="BOOK A CONSULTATION ↗"
        primaryHref="/book"
        secondaryLabel="SEE PROCESS →"
        secondaryHref="/process"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">ON-SITE</span>
            <h2>BETTER DECISIONS START WITH THE ACTUAL SPACE.</h2>
            <p className="page-sub">Context matters. On-site review helps you evaluate proportion, flow, usability, and practical decisions with more accuracy.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
