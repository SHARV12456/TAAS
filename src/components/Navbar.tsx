'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Consultation', href: '/consultation' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Commercial', href: '/commercial' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          borderBottom: scrolled ? '1px solid #e8e7e4' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between" style={{ height: '64px' }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 text-decoration-none" style={{ textDecoration: 'none' }}>
              <span
                className="label-caps"
                style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color: 'var(--color-near-black)',
                }}
              >
                TAAS
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover-line"
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    color: 'var(--color-charcoal)',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Link
                href="/book"
                className="btn btn-primary hidden md:inline-flex"
                style={{ padding: '0.625rem 1.25rem', fontSize: '0.75rem' }}
              >
                Book My Consultation
              </Link>
              <button
                className="md:hidden flex items-center justify-center"
                style={{
                  width: 36,
                  height: 36,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-near-black)',
                }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--color-white)',
          zIndex: 49,
          padding: '5rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--color-near-black)',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                padding: '0.75rem 0',
                borderBottom: i < NAV_LINKS.length - 1 ? '1px solid var(--color-light-grey)' : 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/book"
          className="btn btn-primary"
          onClick={() => setMenuOpen(false)}
          style={{ textAlign: 'center', padding: '1rem 2rem', fontSize: '0.875rem' }}
        >
          Book My Consultation
        </Link>
        <div style={{ marginTop: 'auto', paddingBottom: '2rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-grey)', letterSpacing: '0.08em' }}>
            60 MINUTES · ₹3,999 · FIRST 15 COMPLIMENTARY
          </p>
        </div>
      </div>
    </>
  );
}
