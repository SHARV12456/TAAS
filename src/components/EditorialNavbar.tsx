"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function EditorialNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="navbar-inner container">
        <Link href="/" className="brand" aria-label="TAAS — Home">
          TAAS<span style={{ opacity: 0.9 }}>®</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/process" className="nav-link">Process</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <Link href="/client-stories" className="nav-link">Stories</Link>
          <Link href="/about" className="nav-link">About</Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="nav-toggle"
          onClick={() => setMenuOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-content container">
          <div className="mobile-menu-nav">
            <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/process" onClick={() => setMenuOpen(false)}>Process</Link>
            <Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link href="/client-stories" onClick={() => setMenuOpen(false)}>Stories</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
