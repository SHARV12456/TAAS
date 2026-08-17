import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { FAQS } from '@/lib/mockData';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = { title: 'FAQ | Design Hour', description: 'Answers to common questions about Design Hour consultations.' };

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '6rem', paddingBottom: '4rem', background: 'var(--color-white)', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ marginBottom: '3rem' }}>
            <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>FAQ</p>
            <h1 className="heading-1" style={{ marginBottom: '1rem' }}>Common Questions</h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
              Everything you need to know about booking a Design Hour consultation.
            </p>
          </div>
          <FAQAccordion items={FAQS} />
          <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--color-off-white)', border: '1px solid var(--color-light-grey)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <p style={{ fontWeight: 600, marginBottom: '0.375rem' }}>Still have questions?</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)' }}>We're happy to help before you book.</p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem' }}>Contact Us</Link>
              <Link href="/book" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem' }}>Book Now <ArrowRight size={13} /></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
