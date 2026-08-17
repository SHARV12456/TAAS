import Link from 'next/link';

const FOOTER_LINKS = {
  Services: [
    { label: 'Design Consultation', href: '/consultation' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Commercial', href: '/commercial' },
    { label: 'Book Now', href: '/book' },
  ],
  Company: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cancellation Policy', href: '/cancellation-policy' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--color-black)',
        color: 'var(--color-white)',
        paddingTop: '4rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container">
        {/* Top section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: '1 / 2' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color: 'var(--color-white)',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              >
                TAAS
              </span>
            </Link>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
                maxWidth: '220px',
              }}
            >
              Professional design consultation, booked by the hour.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.375rem 0.75rem',
                  border: '1px solid rgba(255,255,255,0.2)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.6)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                60 MIN · ₹3,999
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <p
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '1.25rem',
                }}
              >
                {category}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.6)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      className="hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Local SEO Navigation */}
        <div style={{ paddingTop: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-white)', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>Design Consultation Across Mumbai</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <h4 style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>Western Suburbs</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem' }}>
                {['Borivali', 'Kandivali', 'Malad', 'Goregaon', 'Jogeshwari', 'Andheri', 'Vile Parle', 'Santacruz', 'Khar', 'Bandra'].map(loc => (
                  <Link key={loc} href={`/locations/${loc.toLowerCase().replace(' ', '-')}`} style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }} className="hover:text-white">{loc}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>Central-West / South</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem' }}>
                {['Mahim', 'Dadar', 'Prabhadevi', 'Lower Parel', 'Mahalaxmi', 'Mumbai Central', 'Grant Road', 'Charni Road', 'Marine Lines', 'Churchgate'].map(loc => (
                  <Link key={loc} href={`/locations/${loc.toLowerCase().replace(' ', '-')}`} style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }} className="hover:text-white">{loc}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>
            © {year} TAAS. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>
            Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
