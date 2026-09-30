"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="hero-premium relative w-full bg-void overflow-hidden">
      <div className="hero-premium-grid">
        {/* LEFT COLUMN: Typography + Offer */}
        <motion.div
          className="hero-premium-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Decorative label */}
          <motion.div
            className="hero-premium-label"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero-label-line" />
            LIMITED OFFER
          </motion.div>

          {/* Main Offer: Bold + Massive */}
          <motion.h1
            className="hero-premium-offer"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="hero-offer-amount">₹1</span>
            <span className="hero-offer-unit">Lakh</span>
            <span className="hero-offer-text">Interior Design Challenge</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            className="hero-premium-divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />

          {/* Description */}
          <motion.div
            className="hero-premium-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="hero-desc-main">
              What can your budget truly create? We'll show you a complete transformation.
            </p>
            <p className="hero-desc-sub">
              Professional design. Real results. Your investment, maximized.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="hero-premium-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="hero-stat">
              <span className="hero-stat-label">YOUR BUDGET</span>
              <span className="hero-stat-value">₹100K</span>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat">
              <span className="hero-stat-label">OUR DESIGN FEE</span>
              <span className="hero-stat-value">₹25K</span>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat">
              <span className="hero-stat-label">FOR YOU</span>
              <span className="hero-stat-value">FREE CONSULTATION</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="hero-premium-cta"
          >
            <Link href="/challenge" className="hero-cta-premium">
              START YOUR CHALLENGE
              <span className="hero-cta-arrow">↗</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Image */}
        <motion.div
          className="hero-premium-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="hero-premium-image-wrapper">
            <img
              src="/images/transform1.png"
              alt="₹1 Lakh Interior Design Challenge transformation"
              className="hero-premium-image"
            />
            <div className="hero-premium-image-overlay" />
            <div className="hero-premium-caption">
              <span className="hero-caption-meta">01 — RESIDENTIAL</span>
              <span className="hero-caption-title">BEDROOM TRANSFORMATION</span>
              <span className="hero-caption-sub">Complete redesign within budget</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Prompt */}
      <motion.div
        className="hero-premium-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span>EXPLORE ↓</span>
      </motion.div>

      {/* Ambient decorative element */}
      <div className="hero-premium-ambient" aria-hidden="true" />
    </section>
  );
}
