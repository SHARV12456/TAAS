'use client';

import Link from 'next/link';

const footerLinks = {
  Company: [
    { href: '/services', label: 'Services' },
    { href: '/process', label: 'Process' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/client-stories', label: 'Stories' },
    { href: '/about', label: 'About' },
  ],
  More: [
    { href: '/faq', label: 'FAQ' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
    { href: '/cancellation-policy', label: 'Cancellation' },
  ],
};

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">TAAS<span>®</span></div>
          <div className="footer-meta">Mumbai</div>
        </div>

        <div className="footer-links-wrap">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer-links">
              <div className="footer-label">{group}</div>
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-actions">
          <Link href="/book" className="footer-cta">BOOK A DESIGN HOUR ↗</Link>
          <Link href="https://wa.me/919999999999" className="footer-cta secondary">WHATSAPP ↗</Link>
        </div>
      </div>
    </footer>
  );
}
