import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata = { title: 'Terms of Service | TAAS' };
export default function TermsPage() {
  return (
    <main><Navbar />
      <div style={{ paddingTop: '6rem', paddingBottom: '4rem', background: 'var(--color-white)', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>Legal</p>
          <h1 className="heading-2" style={{ marginBottom: '0.75rem' }}>Terms of Service</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-grey)', marginBottom: '3rem' }}>Last updated: August 2024 · [PLACEHOLDER — Review with legal counsel before publishing]</p>
          {[
            ['1. Acceptance', 'By booking a consultation with TAAS, you agree to these Terms of Service. If you do not agree, please do not proceed with booking.'],
            ['2. The Service', 'TAAS provides professional design consultation services by the hour. The service is advisory in nature. We do not manage interior design projects, procurement, contracting or construction.'],
            ['3. Payment', 'Full payment is required before your appointment is confirmed. We accept payments through our online payment gateway. All prices are in Indian Rupees (INR) and include applicable taxes.'],
            ['4. Cancellations & Refunds', 'Cancellations and refunds are governed by our Cancellation Policy. Please review this policy before booking.'],
            ['5. Limitation of Liability', 'TAAS provides design advice and recommendations. We are not liable for the outcomes of decisions made based on our advice, or for work carried out by third-party contractors, vendors or manufacturers.'],
            ['6. Intellectual Property', 'All advice, recommendations and materials provided during consultations are for the personal use of the client only and may not be reproduced or shared without permission.'],
            ['7. Governing Law', 'These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts of Mumbai, Maharashtra.'],
            ['8. Changes', 'We reserve the right to update these terms. Continued use of our services after changes constitutes acceptance of the updated terms.'],
          ].map(([title, body]) => (
            <div key={title} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.625rem' }}>{title}</h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-light)', lineHeight: 1.75 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
