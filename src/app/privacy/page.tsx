import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata = { title: 'Privacy Policy | Design Hour' };
export default function PrivacyPage() {
  return (
    <main><Navbar />
      <div style={{ paddingTop: '6rem', paddingBottom: '4rem', background: 'var(--color-white)', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>Legal</p>
          <h1 className="heading-2" style={{ marginBottom: '0.75rem' }}>Privacy Policy</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-grey)', marginBottom: '3rem' }}>Last updated: August 2024 · [PLACEHOLDER — Review with legal counsel before publishing]</p>
          {[
            ['Information We Collect', 'We collect information you provide during booking: name, email address, phone number, property details and design requirements. We also collect payment information processed securely through our payment gateway.'],
            ['How We Use Your Information', 'Your information is used to schedule and confirm your consultation, communicate about your appointment, and improve our services. We do not sell your personal data to third parties.'],
            ['Payment Data', 'Payment is processed securely through our payment gateway partner. We do not store card details on our servers.'],
            ['Analytics & Tracking', 'We use analytics tools to understand how visitors use our website. This may include Google Analytics and Meta Pixel. You can opt out through your browser settings.'],
            ['Data Retention', 'We retain your booking information for a reasonable period to manage your account and comply with legal obligations.'],
            ['Your Rights', 'You have the right to access, correct or request deletion of your personal data. Contact us at hello@designhour.in to exercise these rights.'],
            ['Contact', 'For privacy-related questions, contact us at: hello@designhour.in'],
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
