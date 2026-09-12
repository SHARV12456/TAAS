'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-section footer-brand">
            <Link href="/" className="footer-logo">
              TAAS<span>®</span>
            </Link>
            <p>Design decision support for homes and businesses before the build, spend or commitment.</p>
          </div>

          {/* Design */}
          <div className="footer-section">
            <h4>DESIGN</h4>
            <ul>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/process">Process</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/client-stories">Stories</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="footer-section">
            <h4>HELP</h4>
            <ul>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/cancellation-policy">Cancellation</Link></li>
            </ul>
          </div>

          {/* Book */}
          <div className="footer-section">
            <h4>BOOK</h4>
            <ul>
              <li><Link href="/book">Book a Session</Link></li>
              <li><Link href="/commercial">Commercial</Link></li>
              <li><Link href="/mumbai">Mumbai</Link></li>
              <li><Link href="/">Home</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-cta">
            <Link href="/book" className="btn btn-primary">
              Book a Design Hour
            </Link>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              WhatsApp
            </a>
          </div>

          <div className="footer-meta">
            <p>&copy; {year} TAAS. Mumbai, India.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          padding: var(--space-16) 0 var(--space-10);
        }

        @media (max-width: 767px) {
          .footer {
            padding: var(--space-12) 0 var(--space-8);
          }
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-10);
          margin-bottom: var(--space-12);
          padding-bottom: var(--space-10);
          border-bottom: 1px solid var(--border);
        }

        @media (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-8);
            margin-bottom: var(--space-8);
            padding-bottom: var(--space-8);
          }
        }

        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
            margin-bottom: var(--space-6);
            padding-bottom: var(--space-6);
          }
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .footer-brand p {
          font-size: var(--text-sm);
          line-height: var(--lh-relaxed);
          color: var(--text-secondary);
          margin: 0;
          max-width: 280px;
        }

        .footer-logo {
          font-size: var(--text-lg);
          font-weight: 900;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          text-decoration: none;
          display: inline-block;
          width: fit-content;
        }

        .footer-logo span {
          font-size: 0.5em;
          position: relative;
          top: -4px;
          color: var(--accent);
          margin-left: 2px;
        }

        .footer-logo:hover {
          color: var(--dark);
        }

        .footer-section h4 {
          font-size: var(--text-xs);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-primary);
          margin: 0;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .footer-section a {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          text-decoration: none;
          position: relative;
          transition: all var(--transition-fast);
        }

        .footer-section a::before {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width var(--transition-fast);
        }

        .footer-section a:hover {
          color: var(--text-primary);
        }

        .footer-section a:hover::before {
          width: 100%;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-8);
          flex-wrap: wrap;
        }

        @media (max-width: 767px) {
          .footer-bottom {
            flex-direction: column;
            align-items: stretch;
            gap: var(--space-6);
          }
        }

        .footer-cta {
          display: flex;
          gap: var(--space-4);
        }

        @media (max-width: 767px) {
          .footer-cta {
            flex-direction: column;
          }

          .footer-cta .btn {
            width: 100%;
            text-align: center;
          }
        }

        .footer-meta {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
        }

        .footer-meta p {
          margin: 0;
        }
      `}</style>
    </footer>
  );
}

