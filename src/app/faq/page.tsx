import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import { FAQS } from '@/lib/mockData';

export default function FAQPage() {
  return (
    <main>
      <section className="page-section">
        <div className="faq-shell">
          <div className="faq-intro">
            <div className="faq-kicker">TAAS / faq</div>
            <h1 className="faq-title">QUESTIONS PEOPLE ASK BEFORE THEY DECIDE.</h1>
            <p className="faq-subtext">A brief, practical answer before you spend on the wrong thing.</p>
          </div>

          <div className="faq-wrap">
            <FAQAccordion items={FAQS} />
          </div>

          <div className="faq-cta">
            <div>
              <div className="eyebrow">STILL NOT SURE?</div>
              <p className="page-sub">Ask before you spend money on the wrong fix.</p>
            </div>
            <Link href="/book" className="btn-primary">
              START A CONVERSATION ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
