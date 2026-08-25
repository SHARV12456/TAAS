'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        className="taas-nav"
        style={{
          opacity: scrolled ? 1 : 0,
          transform: scrolled ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: scrolled ? 'auto' : 'none',
        }}
      >
        <div className="taas-nav-inner">
          <Link href="/" className="taas-nav-logo">TAAS</Link>
          <nav className="taas-nav-links">
            <Link href="#services" className="taas-nav-link">Services</Link>
            <Link href="#process" className="taas-nav-link">Process</Link>
            <Link href="#about" className="taas-nav-link">About</Link>
          </nav>
          <Link href="/book" className="taas-nav-cta">Book a Session</Link>
          <button
            className="taas-nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div className={`taas-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="taas-mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <X size={24} />
        </button>
        <nav className="taas-mobile-links">
          {[
            ['Services', '#services'],
            ['Process', '#process'],
            ['About', '#about'],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="taas-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/book" className="taas-mobile-cta" onClick={() => setMenuOpen(false)}>
          Book a Session
        </Link>
      </div>
    </>
  );
}
