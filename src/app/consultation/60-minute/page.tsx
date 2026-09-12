import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: '60-Minute TAAS | TAAS',
  description: 'Book a professional interior design consultation in Mumbai. Get expert advice on layout, materials, furniture, storage and more.',
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero
        eyebrow="TAAS® • 60 MIN"
        title={'THE DEEPER\nDECISION.'}
        subtitle="Our most popular consultation: enough time to unpack the real decision, weigh trade-offs, and leave with a clearer path forward."
        primaryLabel="BOOK A 60-MINUTE SESSION ↗"
        primaryHref="/book"
        secondaryLabel="VIEW ALL OPTIONS →"
        secondaryHref="/pricing"
      />

      <section className="page-section">
        <div className="container">
          <div className="page-header narrow">
            <span className="eyebrow">60 MINUTES</span>
            <h2>MORE SPACE FOR TRADE-OFFS AND CLARITY.</h2>
            <p className="page-sub">This is for the questions that need more than a quick answer—layout reviews, material conflicts, storage logic, and bigger design decisions.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
