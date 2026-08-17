import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = { title: 'Contact | TAAS', description: 'Get in touch with TAAS.' };

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '6rem', paddingBottom: '4rem', background: 'var(--color-off-white)', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>Contact</p>
          <h1 className="heading-1" style={{ marginBottom: '1rem' }}>Get in Touch</h1>
          <p style={{ fontSize: '1.0625rem', color: 'var(--color-charcoal-light)', marginBottom: '3rem', lineHeight: 1.7 }}>
            Have a question before booking? We're happy to help.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-light-grey)', padding: '2rem' }}>
              <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '1.5rem' }}>Send a Message</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div><label className="label">Name</label><input className="input" placeholder="Your name" /></div>
                <div><label className="label">Email</label><input className="input" type="email" placeholder="your@email.com" /></div>
                <div><label className="label">Message</label><textarea className="input" rows={4} placeholder="How can we help you?" /></div>
                <button className="btn btn-primary" style={{ justifyContent: 'center' }}>Send Message</button>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ padding: '1.75rem', background: 'var(--color-white)', border: '1px solid var(--color-light-grey)' }}>
                <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '0.75rem' }}>Email</p>
                <p style={{ fontSize: '0.9375rem', fontWeight: 500 }}>hello@designhour.in</p>
              </div>
              <div style={{ padding: '1.75rem', background: 'var(--color-white)', border: '1px solid var(--color-light-grey)' }}>
                <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '0.75rem' }}>Location</p>
                <p style={{ fontSize: '0.9375rem', fontWeight: 500 }}>Mumbai, India</p>
              </div>
              <div style={{ padding: '1.75rem', background: 'var(--color-white)', border: '1px solid var(--color-light-grey)' }}>
                <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '0.75rem' }}>Hours</p>
                <p style={{ fontSize: '0.9375rem', fontWeight: 500 }}>Mon – Sat, 9am – 6pm IST</p>
              </div>
              <Link href="/book" className="btn btn-primary" style={{ justifyContent: 'center' }}>Book a Consultation</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
