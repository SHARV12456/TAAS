export const metadata = { title: 'Privacy Policy | TAAS' };

const privacySections = [
  ['Information We Collect', 'We collect the details you provide during booking: your name, email address, phone number, property details and design question. We also collect billing information that is processed securely through our payment gateway.'],
  ['How We Use Your Information', 'Your information is used to schedule and confirm consultations, communicate about your appointment, and help us improve the experience. We do not sell personal data.'],
  ['Payment Data', 'Payments are processed securely through our payment partner. We do not store card details on our servers.'],
  ['Analytics & Tracking', 'We may use limited analytics tools to understand website usage and improve the experience. This may include the use of standard analytics software in line with privacy best practices.'],
  ['Data Retention', 'We retain booking information for a reasonable period to manage your session and meet legal obligations.'],
  ['Your Rights', 'You can request access, correction, or deletion of your personal data. Contact hello@designhour.in for any request related to your data.'],
  ['Contact', 'For privacy-related questions, contact us at hello@designhour.in.'],
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-section">
        <div className="legal-shell">
          <div className="legal-intro">
            <div className="legal-kicker">TAAS / privacy</div>
            <h1 className="legal-title">PRIVACY WITHOUT THE WALL OF FINE PRINT.</h1>
            <p className="legal-meta">Last updated: September 2026</p>
          </div>

          <div className="legal-article">
            {privacySections.map(([title, body]) => (
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
