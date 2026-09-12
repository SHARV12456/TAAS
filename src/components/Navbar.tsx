'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-container">
          <Link href="/" className="navbar-logo" onClick={handleMenuClose}>
            TAAS<span>®</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            <ul className="navbar-menu" role="menubar">
              <li role="none">
                <Link href="/services" role="menuitem">Services</Link>
              </li>
              <li role="none">
                <Link href="/process" role="menuitem">Process</Link>
              </li>
              <li role="none">
                <Link href="/pricing" role="menuitem">Pricing</Link>
              </li>
              <li role="none">
                <Link href="/client-stories" role="menuitem">Stories</Link>
              </li>
              <li role="none">
                <Link href="/about" role="menuitem">About</Link>
              </li>
            </ul>
            <Link href="/book" className="btn btn-primary">
              Book a Design Hour
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="navbar-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          onKeyDown={handleKeyDown}
        >
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <Link href="/" className="mobile-menu-logo" onClick={handleMenuClose}>
                TAAS<span>®</span>
              </Link>
              <button
                className="mobile-menu-close"
                onClick={handleMenuClose}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <ul className="mobile-menu-list">
              <li>
                <Link href="/" onClick={handleMenuClose}>HOME</Link>
              </li>
              <li>
                <Link href="/services" onClick={handleMenuClose}>SERVICES</Link>
              </li>
              <li>
                <Link href="/process" onClick={handleMenuClose}>PROCESS</Link>
              </li>
              <li>
                <Link href="/pricing" onClick={handleMenuClose}>PRICING</Link>
              </li>
              <li>
                <Link href="/client-stories" onClick={handleMenuClose}>STORIES</Link>
              </li>
              <li>
                <Link href="/about" onClick={handleMenuClose}>ABOUT</Link>
              </li>
              <li>
                <Link href="/faq" onClick={handleMenuClose}>FAQ</Link>
              </li>
            </ul>

            <div className="mobile-menu-cta">
              <Link href="/book" className="btn btn-primary" onClick={handleMenuClose}>
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
          </div>

          <div
            className="mobile-menu-overlay"
            onClick={handleMenuClose}
            role="presentation"
          ></div>
        </div>
      )}

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          background-color: rgba(255, 255, 255, 0.95);
        }

        .navbar-container {
          width: calc(100% - 32px);
          max-width: var(--container-max);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-4) 0;
        }

        @media (min-width: 1024px) {
          .navbar-container {
            width: calc(100% - 80px);
            padding: var(--space-5) 0;
          }
        }

        .navbar-logo {
          font-size: var(--text-xl);
          font-weight: 900;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .navbar-logo span {
          font-size: 0.5em;
          position: relative;
          top: -4px;
          color: var(--accent);
        }

        .navbar-logo:hover {
          color: var(--dark);
        }

        .navbar-desktop {
          display: none;
          align-items: center;
          gap: var(--space-10);
        }

        @media (min-width: 1024px) {
          .navbar-desktop {
            display: flex;
          }
        }

        .navbar-menu {
          display: flex;
          list-style: none;
          gap: var(--space-8);
          margin: 0;
          padding: 0;
        }

        .navbar-menu a {
          font-size: var(--text-sm);
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--text-secondary);
          position: relative;
          text-decoration: none;
        }

        .navbar-menu a::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width var(--transition-fast);
        }

        .navbar-menu a:hover {
          color: var(--text-primary);
        }

        .navbar-menu a:hover::after {
          width: 100%;
        }

        .navbar-toggle {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-2);
          z-index: 1001;
        }

        @media (min-width: 1024px) {
          .navbar-toggle {
            display: none;
          }
        }

        .navbar-toggle span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text-primary);
          transition: all var(--transition-base);
          transform-origin: center;
        }

        .navbar-toggle[aria-expanded="true"] span:first-child {
          transform: rotate(45deg) translateY(11px);
        }

        .navbar-toggle[aria-expanded="true"] span:nth-child(2) {
          opacity: 0;
        }

        .navbar-toggle[aria-expanded="true"] span:last-child {
          transform: rotate(-45deg) translateY(-11px);
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 999;
          display: flex;
          align-items: flex-end;
          animation: slideUp var(--transition-base);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .mobile-menu-content {
          position: relative;
          z-index: 1;
          width: 100%;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          max-height: 90vh;
          overflow-y: auto;
          padding: var(--space-6) 0;
          animation: slideUp var(--transition-base);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 var(--space-4);
          margin-bottom: var(--space-8);
        }

        @media (min-width: 640px) {
          .mobile-menu-header {
            padding: 0 var(--space-6);
          }
        }

        .mobile-menu-logo {
          font-size: var(--text-lg);
          font-weight: 900;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .mobile-menu-logo span {
          font-size: 0.5em;
          position: relative;
          top: -4px;
          color: var(--accent);
        }

        .mobile-menu-close {
          background: none;
          border: none;
          font-size: var(--text-xl);
          font-weight: 300;
          color: var(--text-primary);
          cursor: pointer;
          padding: var(--space-2);
        }

        .mobile-menu-list {
          list-style: none;
          margin: 0;
          padding: 0 var(--space-4);
          margin-bottom: var(--space-10);
        }

        @media (min-width: 640px) {
          .mobile-menu-list {
            padding: 0 var(--space-6);
          }
        }

        .mobile-menu-list li {
          margin-bottom: var(--space-6);
        }

        .mobile-menu-list a {
          font-size: var(--text-lg);
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: var(--text-primary);
          text-decoration: none;
          position: relative;
        }

        .mobile-menu-list a::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width var(--transition-fast);
        }

        .mobile-menu-list a:hover {
          color: var(--dark);
        }

        .mobile-menu-list a:hover::after {
          width: 100%;
        }

        .mobile-menu-cta {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          padding: 0 var(--space-4);
          border-top: 1px solid var(--border);
          padding-top: var(--space-6);
        }

        @media (min-width: 640px) {
          .mobile-menu-cta {
            padding: 0 var(--space-6);
            padding-top: var(--space-6);
          }
        }

        .mobile-menu-cta .btn {
          width: 100%;
          text-align: center;
        }
      `}</style>
    </>
  );
}
