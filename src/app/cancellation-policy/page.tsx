import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: 'Cancellation Policy | Design Hour' };

function PolicySection({ title, items }: { title: string; items: { heading: string; body: string; configurable?: boolean }[] }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-light-grey)' }}>{title}</h2>
      {items.map(({ heading, body, configurable }) => (
        <div key={heading} style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '0.9375rem', fontWeight: 700 }}>{heading}</h3>
            {configurable && (
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', padding: '0.2rem 0.5rem', border: '1px solid var(--color-mid-grey)', color: 'var(--color-grey)' }}>ADMIN CONFIGURABLE</span>
            )}
          </div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-charcoal-light)', lineHeight: 1.75 }}>{body}</p>
        </div>
      ))}
    </div>
  );
}

export default function CancellationPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '6rem', paddingBottom: '4rem', background: 'var(--color-white)', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>Policy</p>
          <h1 className="heading-1" style={{ marginBottom: '0.75rem' }}>Cancellation & Refund Policy</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-grey)', marginBottom: '3rem' }}>Last updated: August 2024</p>

          <PolicySection title="Cancellation" items={[
            { heading: 'Cancellation by Client (24+ hours notice)', body: '[ADMIN CONFIGURABLE] Cancellations made more than 24 hours before the scheduled consultation are eligible for a full refund or free rescheduling.', configurable: true },
            { heading: 'Cancellation by Client (less than 24 hours)', body: '[ADMIN CONFIGURABLE] Cancellations made within 24 hours of the scheduled consultation will incur a cancellation fee. The remaining amount may be refunded or applied as a credit.', configurable: true },
            { heading: 'Cancellation by Design Hour', body: 'In the rare event that we must cancel, you will receive a full refund and the option to reschedule at no extra cost.' },
          ]} />

          <PolicySection title="Rescheduling" items={[
            { heading: 'Free Rescheduling Window', body: '[ADMIN CONFIGURABLE] You may reschedule your consultation once at no charge, provided you notify us at least 24 hours in advance.', configurable: true },
            { heading: 'Late Rescheduling', body: '[ADMIN CONFIGURABLE] Rescheduling requests made within 24 hours of the appointment may be subject to an admin fee.', configurable: true },
          ]} />

          <PolicySection title="Refunds" items={[
            { heading: 'Refund Timeline', body: '[ADMIN CONFIGURABLE] Approved refunds are processed within 5–7 business days to the original payment method.', configurable: true },
            { heading: 'Non-Refundable Situations', body: 'The consultation fee is non-refundable if the session has commenced, or if the client fails to attend the scheduled appointment without prior notice.' },
          ]} />

          <PolicySection title="No-Show" items={[
            { heading: 'Client No-Show', body: '[ADMIN CONFIGURABLE] If a client does not attend a scheduled consultation without prior notice, the session will be considered completed and no refund will be issued.', configurable: true },
          ]} />

          <PolicySection title="Payment" items={[
            { heading: 'Payment Requirement', body: 'Payment is required before the appointment is confirmed. Your appointment is confirmed after successful online payment.' },
            { heading: 'Payment Methods', body: '[ADMIN CONFIGURABLE] We accept UPI, credit/debit cards, net banking and popular digital wallets via our payment gateway.', configurable: true },
          ]} />

          <div style={{ padding: '1.5rem', background: 'var(--color-off-white)', border: '1px solid var(--color-light-grey)', marginTop: '2rem' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
              <strong>Note:</strong> Items marked [ADMIN CONFIGURABLE] are placeholder terms and must be reviewed and set by the business owner before going live. This document does not constitute legal advice.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
