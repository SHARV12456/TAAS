'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    image: '/portfolio-living-room.jpg',
    category: 'Residential',
    type: 'Living Room',
    neighborhood: 'Bandra West',
    headline: 'Compact living room — rethought.',
    outcome: 'Client avoided a ₹4.5L mistake on sofa placement and chose a layout that doubled perceived floor area.',
    service: '60-Minute TAAS Session',
  },
  {
    id: 2,
    image: '/portfolio-kitchen.jpg',
    category: 'Modular Kitchen',
    type: 'Modular Kitchen',
    neighborhood: 'Andheri West',
    headline: 'Modular kitchen — optimised before manufacturing.',
    outcome: 'Design changes made during consultation saved the client from a non-functional counter depth that the contractor had not flagged.',
    service: '30-Minute Quick Consultation',
  },
  {
    id: 3,
    image: '/portfolio-bedroom.jpg',
    category: 'Residential',
    type: 'Bedroom',
    neighborhood: 'Powai',
    headline: 'Bedroom redesign — budget-conscious.',
    outcome: 'Complete visual transformation achieved without structural changes. Full material palette delivered within 60 minutes.',
    service: '60-Minute TAAS Session',
  },
  {
    id: 4,
    image: '/portfolio-commercial.jpg',
    category: 'Commercial',
    type: 'Café',
    neighborhood: 'Colaba',
    headline: 'Café seating — flow and atmosphere resolved.',
    outcome: 'Seating layout redesigned to increase covers by 20% while improving customer flow. Recommended lighting scheme significantly reduced energy cost.',
    service: 'Commercial Consultation',
  },
  {
    id: 5,
    image: '/portfolio-office.jpg',
    category: 'Commercial',
    type: 'Office',
    neighborhood: 'Lower Parel',
    headline: 'Open-plan office — 20 people, one session.',
    outcome: 'Zoning strategy, acoustic recommendations and furniture layout delivered in a single 90-minute session. No interior firm involved.',
    service: '90-Minute Deep Dive',
  },
  {
    id: 6,
    image: '/portfolio-rental.jpg',
    category: 'Rental',
    type: 'Rental Apartment',
    neighborhood: 'Goregaon West',
    headline: 'Rental flat — styled without structural changes.',
    outcome: 'Complete redesign using only renter-friendly interventions. Client avoided ₹1.2L in unnecessary furniture purchases.',
    service: '60-Minute TAAS Session',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Residential: 'var(--color-charcoal)',
  Commercial: '#1a3a5c',
  Rental: '#3d2e1e',
  'Modular Kitchen': '#2e3d1e',
};

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section
        style={{
          paddingTop: '7rem',
          paddingBottom: '3rem',
          background: 'var(--color-off-white)',
          borderBottom: '1px solid var(--color-light-grey)',
        }}
      >
        <div className="container">
          <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1rem' }}>
            Select Projects
          </p>
          <h1 className="heading-1" style={{ marginBottom: '1rem', maxWidth: 560 }}>
            Real spaces. Real outcomes.
          </h1>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--color-charcoal-light)',
              maxWidth: 560,
              lineHeight: 1.7,
            }}
          >
            Each project below began with a single consultation. No full-project commitment, no retainers — just expert direction that clients could act on immediately.
          </p>
        </div>
      </section>

      {/* Stat Strip */}
      <div
        style={{
          background: 'var(--color-white)',
          borderBottom: '1px solid var(--color-light-grey)',
          padding: '1.25rem 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            gap: '3rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {[
            { stat: '250+', label: 'Consultations completed' },
            { stat: '12 yrs', label: 'Design experience' },
            { stat: 'B.Arch', label: 'Sir J.J. College of Architecture' },
            { stat: '1 designer', label: 'Every session with Sharvayu' },
          ].map((item) => (
            <div key={item.label}>
              <p
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 800,
                  letterSpacing: '-0.015em',
                  color: 'var(--color-near-black)',
                  marginBottom: '0.125rem',
                }}
              >
                {item.stat}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-grey)', fontWeight: 500 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '2rem',
            }}
          >
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                style={{
                  border: '1px solid var(--color-light-grey)',
                  overflow: 'hidden',
                  background: 'var(--color-white)',
                  transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 8px 32px rgba(0,0,0,0.08)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image
                    src={project.image}
                    alt={`${project.type} design — ${project.neighborhood}`}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category badge overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      padding: '0.3rem 0.75rem',
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      background: CATEGORY_COLORS[project.category] || 'var(--color-charcoal)',
                      color: '#fff',
                      textTransform: 'uppercase',
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '0.75rem',
                      gap: '1rem',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        color: 'var(--color-grey)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {project.type} · {project.neighborhood}
                    </p>
                    <p
                      style={{
                        fontSize: '0.625rem',
                        fontWeight: 600,
                        color: 'var(--color-grey)',
                        whiteSpace: 'nowrap',
                        opacity: 0.7,
                      }}
                    >
                      {project.service}
                    </p>
                  </div>

                  <h2
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      marginBottom: '0.75rem',
                      lineHeight: 1.35,
                      color: 'var(--color-near-black)',
                    }}
                  >
                    {project.headline}
                  </h2>

                  {/* Outcome */}
                  <div
                    style={{
                      borderTop: '1px solid var(--color-light-grey)',
                      paddingTop: '0.875rem',
                      marginTop: '0.5rem',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: 'var(--color-grey)',
                        marginBottom: '0.375rem',
                        textTransform: 'uppercase',
                      }}
                    >
                      Client Outcome
                    </p>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-charcoal-light)',
                        lineHeight: 1.6,
                      }}
                    >
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div style={{ background: 'var(--color-off-white)', borderTop: '1px solid var(--color-light-grey)', padding: '2rem 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-grey)', maxWidth: 600, lineHeight: 1.6 }}>
            <strong>Note:</strong> Client names and specific identifying details have been withheld for privacy. Project outcomes described above are representative of actual consultations. Portfolio images are illustrative of the design direction and quality achieved.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <section
        style={{
          background: 'var(--color-near-black)',
          color: 'var(--color-white)',
          padding: '5rem 0',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <p
            className="label-caps"
            style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}
          >
            Ready to start?
          </p>
          <h2 className="heading-2" style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>
            Your space could be next.
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '440px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            Every project above started with a single 30 or 60-minute consultation. Book yours today.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Link
              href="/book"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--color-white)',
                color: 'var(--color-black)',
                padding: '0.875rem 2rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Check Availability <ArrowRight size={14} />
            </Link>
            <a
              href={`https://wa.me/917400162509?text=${encodeURIComponent("Hi, I saw your portfolio and would like to enquire about a consultation.")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'rgba(255,255,255,0.85)',
                padding: '0.875rem 2rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textDecoration: 'none',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
