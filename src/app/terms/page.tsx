export const metadata = { title: 'Terms of Service | TAAS' };

const termsSections = [
  ['1. Acceptance', 'By booking a consultation with TAAS, you agree to these Terms of Service. If you do not agree, please do not proceed with booking.'],
  ['2. The Service', 'TAAS provides design consultation services by the hour. The service is advisory in nature and intended to support better design decisions before major spend or implementation.'],
  ['3. Payment', 'Full payment is required before your appointment is confirmed. Prices are stated in Indian Rupees and may include applicable taxes.'],
  ['4. Cancellations & Rescheduling', 'Appointments may be rescheduled or cancelled in line with the cancellation policy available on our website.'],
  ['5. Limitation of Liability', 'TAAS provides guidance and recommendations. We are not liable for third-party decisions, contractor work, procurement outcomes, or other downstream project actions.'],
  ['6. Intellectual Property', 'The advice and materials provided during consultations are for the personal use of the client and may not be reproduced or shared without permission.'],
  ['7. Governing Law', 'These terms are governed by the laws of India and subject to the jurisdiction of the courts in Mumbai, Maharashtra.'],
  ['8. Changes', 'We may update these terms from time to time. Continued use of the service constitutes acceptance of the updated terms.'],
];

export default function TermsPage() {
  return (
    <main>
      <section className="page-section">
        <div className="legal-shell">
          <div className="legal-intro">
            <div className="legal-kicker">TAAS / terms</div>
            <h1 className="legal-title">THE RULES THAT KEEP THINGS CLEAR.</h1>
            <p className="legal-meta">Last updated: September 2026</p>
          </div>

          <div className="legal-article">
            {termsSections.map(([title, body]) => (
              <section key={title} className="legal-section">
                <h2>{title}</h2>
                <p>{body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
