"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ADVANCE_TERMS,
  DESIGNER_NAME,
  WHATSAPP_URL,
} from "@/lib/contact";
import { TESTIMONIALS } from "@/lib/testimonials";
import { WORK_PROJECTS_AVAILABLE } from "@/lib/work";

/* ── DATA ─────────────────────────────────────── */

const DECISIONS = [
  {
    word: "KEEP",
    sub:  "SPEND ₹0",
    desc: "Things that already work. Flooring, layout, plumbing—leave them alone.",
  },
  {
    word: "CHANGE",
    sub:  "LOW — MID",
    desc: "Paint, lighting, hardware, styling. Visible difference, affordable cost.",
  },
  {
    word: "INVEST",
    sub:  "HIGH IMPACT",
    desc: "Statement furniture, functional carpentry, key surfaces. Spend where the user feels it.",
  },
  {
    word: "SKIP",
    sub:  "MONEY SAVED",
    desc: "Tearing down functional bathrooms, replacing tiles that are already fine. Don't touch it.",
  },
];

/* ── CALCULATOR LOGIC ─────────────────────────── */

function calcBase(space: string) {
  if (space === "FULL SPACE") return 150000;
  if (space === "MULTIPLE ROOMS") return 70000;
  return 35000;
}

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/* ══════════════════════════════════════════════════
   HOMEPAGE
   ══════════════════════════════════════════════════ */

export default function Home() {
  const [activeDecision, setActiveDecision] = useState(0);
  const [calcSpace,  setCalcSpace]  = useState("ROOM");
  const [calcType,   setCalcType]   = useState("RENTAL");
  const [calcBudget, setCalcBudget] = useState("₹1L");

  const price    = calcBase(calcSpace);
  const advance  = price * 0.3;
  const balance  = price - advance;

  return (
    <div className="w-full">

      {/* ══════════════════════════════════════════════
          01 — HERO
          ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-ink flex flex-col overflow-hidden pt-14">

        {/* ── Surgical grid overlay ── */}
        <div className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(247,244,239,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(247,244,239,0.03) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* ── Animated scanning line ── */}
        <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime to-transparent opacity-60 z-0 animate-[scan_6s_ease-in-out_infinite]"
          style={{ top: '0%' }}
        />

        {/* ── Core Content ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 text-center py-6">

          {/* Eyebrow */}
          <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-14">
            <span className="w-8 sm:w-12 md:w-20 h-[1px] bg-paper/20" />
            <span className="font-sans font-bold text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-paper/40">
              Home Makeover · Single Room
            </span>
            <span className="w-8 sm:w-12 md:w-20 h-[1px] bg-paper/20" />
          </div>

          {/* Giant price — the hero itself */}
          <div className="relative mb-4 sm:mb-6 md:mb-8">
            {/* Ghost outline echo behind */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
              <span className="font-sans font-black leading-none tracking-[-0.05em] text-transparent"
                style={{ fontSize: 'clamp(3.5rem, 18vw, 13rem)', WebkitTextStroke: '1px rgba(200,241,74,0.08)' }}>
                ₹1L
              </span>
            </div>
            <h1 className="font-sans font-black leading-none tracking-[-0.05em] text-paper relative"
              style={{ fontSize: 'clamp(3.5rem, 18vw, 13rem)' }}>
              ₹1<span className="text-lime">L</span>
            </h1>
          </div>

          {/* Sub-label precision typography */}
          <div className="flex flex-col items-center gap-3 mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-sans font-bold tracking-[-0.03em] uppercase text-paper/80"
              style={{ fontSize: 'clamp(1.1rem, 4vw, 3.5rem)' }}>
              Interior Challenge
            </h2>
            <p className="font-sans font-medium text-paper/35 tracking-[0.08em] uppercase"
              style={{ fontSize: 'clamp(0.6rem, 1.4vw, 0.95rem)' }}>
              One room. One lakh. Completely revamped.
            </p>
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <Link
              href="/challenge"
              className="group relative inline-flex items-center gap-4 sm:gap-5 bg-lime text-ink font-bold text-[10px] sm:text-[11px] tracking-[0.25em] uppercase px-7 sm:px-10 py-4 sm:py-5 hover:bg-paper transition-colors duration-500 overflow-hidden"
            >
              {/* sweep animation */}
              <span className="absolute inset-0 bg-paper translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative">Take the Challenge</span>
              <span className="relative text-base leading-none group-hover:translate-x-1.5 transition-transform duration-500">→</span>
            </Link>

            <div className="flex flex-col items-center sm:items-start">
              <span className="font-sans font-bold text-[8px] sm:text-[9px] tracking-[0.35em] text-paper/25 uppercase mb-0.5">Design Fee</span>
              <span className="font-sans font-bold text-lg sm:text-xl md:text-2xl tracking-[-0.02em] text-paper">₹25,000</span>
            </div>
          </div>

        </div>

        {/* ── Bottom data bar ── */}
        <div className="relative z-10 border-t border-paper/[0.07] mx-0 mb-0">
          <div className="flex items-stretch divide-x divide-paper/[0.07]">
            {[
              { label: 'Scope', value: 'Full Room' },
              { label: 'Delivery', value: 'On-Site' },
              { label: 'Slots', value: 'Limited' },
              { label: 'City', value: 'Mumbai' },
            ].map((item) => (
              <div key={item.label} className="flex-1 px-2 sm:px-4 md:px-8 py-4 sm:py-5 md:py-6 flex flex-col gap-1 group hover:bg-paper/[0.03] transition-colors duration-300">
                <span className="font-sans font-bold text-[7px] sm:text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-paper/25">{item.label}</span>
                <span className="font-sans font-bold text-[9px] sm:text-xs md:text-sm tracking-[0.06em] uppercase text-paper/70 group-hover:text-lime transition-colors duration-300">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      <style jsx>{`
        @keyframes scan {
          0%   { top: 0%;   opacity: 0; }
          5%   { opacity: 0.6; }
          95%  { opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>


      {/* ══════════════════════════════════════════════
          02 — WHAT IS TAAS?
          ══════════════════════════════════════════════ */}
      <section id="what" className="py-24 md:py-40 px-6 md:px-12 bg-ink text-paper">
        <div className="max-w-[1600px] mx-auto">

          <p className="micro text-paper/30 mb-10">WHAT IS TAAS?</p>

          <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-end">

            <div>
              <h2 className="font-sans font-bold text-huge leading-[0.85] tracking-[-0.035em] uppercase mb-8">
                YOU HAVE<br/>
                A SPACE.<br/>
                <span className="text-lime">LET'S<br/>DECIDE.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-8 pb-2">
              <p className="font-sans text-lg md:text-2xl font-medium text-paper/60 leading-snug max-w-md">
                We are interior designers with a completely different approach. TAAS helps you decide exactly what your space needs <em>before</em> you spend a rupee on it.
              </p>

              {/* Process strip */}
              <div className="flex flex-wrap gap-x-2 gap-y-1 items-center micro text-paper/40">
                {["SPACE", "→", "SCOPE", "→", "BUDGET", "→", "PRICE", "→", "PHOTOS", "→", "DETAILS", "→", "BOOK"].map((s, i) => (
                  <span key={i} className={s === "→" ? "text-lime" : ""}>{s}</span>
                ))}
              </div>

              <Link href="/book" className="btn-primary btn-lime inline-flex self-start text-[0.65rem] py-3.5 px-7">
                BOOK TAAS ↗
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          03 — STARTING PRICE
          ══════════════════════════════════════════════ */}
      <section id="cost" className="py-24 md:py-40 px-6 md:px-12 border-b border-ink/12">
        <div className="max-w-[1600px] mx-auto">

          <p className="micro text-ink/40 mb-10">CLEAR PRICING. NO SURPRISES.</p>

          {/* Price trio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ink/12">

            {[
              { price: "₹35,000",  label: "SINGLE ROOM",    note: "Design direction + what matters." },
              { price: "₹70,000",  label: "MULTIPLE ROOMS", note: "Cohesive approach across the space." },
              { price: "₹1,50,000", label: "FULL SPACE",    note: "Complete space audit and plan." },
            ].map((tier, i) => (
              <div key={i} className={`p-8 md:p-12 flex flex-col gap-4 ${i < 2 ? "border-b md:border-b-0 md:border-r border-ink/12" : ""}`}>
                <span className="micro text-ink/40">{tier.label}</span>
                <div className="font-sans font-bold text-big tracking-[-0.03em]">{tier.price}</div>
                <p className="font-sans text-sm text-ink/50">{tier.note}</p>
              </div>
            ))}
          </div>

          {/* 30% callout */}
          <div className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-16 bg-lime p-8 md:p-12">
            <div>
              <div className="font-sans font-bold text-huge tracking-[-0.035em] leading-none">30%</div>
              <div className="micro text-ink/60 mt-1">BOOKING ADVANCE</div>
            </div>
            <div className="flex-1">
              <p className="font-sans text-base md:text-xl font-medium text-ink/70 max-w-xl leading-snug">
                30% confirms the consultation. Balance is due before delivery.
                Final price depends on space and scope.
              </p>
            </div>
            <Link href="/book" className="btn-primary self-start flex-shrink-0 text-[0.65rem] py-3.5 px-7">
              BOOK TAAS ↗
            </Link>
          </div>

          <div className="mt-10 rounded-none border border-ink/12 bg-paper p-6 md:p-8">
            <p className="micro text-ink/40 mb-4">ADVANCE TERMS</p>
            <ul className="space-y-2 text-sm text-ink/70 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
              {ADVANCE_TERMS.map((term) => (
                <li key={term} className="font-sans leading-relaxed">• {term}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════
          04 — KEEP / CHANGE / INVEST / SKIP
          ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-ink text-paper">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16 md:gap-32">

          {/* Interactive words */}
          <div>
            <p className="micro text-paper/30 mb-10">THE TAAS METHOD</p>
            <div className="flex flex-col">
              {DECISIONS.map((d, i) => (
                <button
                  key={d.word}
                  onMouseEnter={() => setActiveDecision(i)}
                  onClick={() => setActiveDecision(i)}
                  className={`text-left py-6 border-b border-paper/10 transition-colors duration-200 group flex items-baseline gap-5 ${
                    activeDecision === i ? "text-lime" : "text-paper/25 hover:text-paper/60"
                  }`}
                >
                  <span className="micro text-paper/20 w-6">0{i + 1}</span>
                  <span className="font-sans font-bold text-huge leading-[0.85] tracking-[-0.035em] uppercase">
                    {d.word}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="flex flex-col justify-center md:pl-8">
            <div className="transition-all duration-200">
              <span className="micro text-lime mb-6 block">{DECISIONS[activeDecision].sub}</span>
              <p className="font-sans text-xl md:text-3xl font-medium text-paper/70 leading-snug max-w-sm">
                {DECISIONS[activeDecision].desc}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          HOW IT WORKS MAP
          ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 md:px-12 border-b border-ink/12 bg-paper text-ink">
        <div className="max-w-[1600px] mx-auto">
          <p className="micro text-ink/40 mb-16">HOW IT WORKS</p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-ink/12">
            {[
              { step: "01", title: "BOOK", desc: "Select your space, scope, and budget." },
              { step: "02", title: "CONFIRM", desc: "Lock in with a 30% advance." },
              { step: "03", title: "SHARE", desc: "Send your space photos via WhatsApp." },
              { step: "04", title: "ON-SITE VISIT", desc: "We visit your space for the exact Keep/Change/Invest/Skip plan." },
              { step: "05", title: "EXECUTE", desc: "Execution available on request." },
            ].map((s, i) => (
              <div key={i} className="pt-8 md:pt-0 md:px-8 first:md:pl-0 flex flex-col gap-4">
                <span className="micro text-ink bg-lime px-2 py-1 inline-block w-max font-bold">STEP {s.step}</span>
                <h3 className="font-sans font-bold text-2xl tracking-[-0.02em]">{s.title}</h3>
                <p className="font-sans text-sm text-ink/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          05 — COST CALCULATOR
          ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 md:px-12 border-b border-ink/12">
        <div className="max-w-[1600px] mx-auto">

          <p className="micro text-ink/40 mb-10">COST ESTIMATOR</p>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* Controls */}
            <div className="flex flex-col gap-10">

              {/* Space */}
              <div>
                <p className="micro text-ink/40 mb-4">YOUR SPACE</p>
                <div className="flex flex-wrap gap-2">
                  {["ROOM", "MULTIPLE ROOMS", "FULL SPACE"].map(o => (
                    <button
                      key={o}
                      onClick={() => setCalcSpace(o)}
                      className={`micro px-4 py-2.5 border transition-colors duration-150 ${
                        calcSpace === o
                          ? "bg-ink text-paper border-ink"
                          : "text-ink border-ink/20 hover:border-ink/60"
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type */}
              <div>
                <p className="micro text-ink/40 mb-4">SPACE TYPE</p>
                <div className="flex flex-wrap gap-2">
                  {["RENTAL", "HOME", "CAFÉ", "COMMERCIAL"].map(o => (
                    <button
                      key={o}
                      onClick={() => setCalcType(o)}
                      className={`micro px-4 py-2.5 border transition-colors duration-150 ${
                        calcType === o
                          ? "bg-ink text-paper border-ink"
                          : "text-ink border-ink/20 hover:border-ink/60"
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <p className="micro text-ink/40 mb-4">YOUR BUDGET</p>
                <div className="flex flex-wrap gap-2">
                  {["₹50K", "₹1L", "₹3L", "₹5L+", "NOT SURE"].map(o => (
                    <button
                      key={o}
                      onClick={() => setCalcBudget(o)}
                      className={`micro px-4 py-2.5 border transition-colors duration-150 ${
                        calcBudget === o
                          ? "bg-ink text-paper border-ink"
                          : "text-ink border-ink/20 hover:border-ink/60"
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="border border-ink/12 p-8 md:p-14 flex flex-col gap-8">

              <div className="border-b border-ink/12 pb-6">
                <p className="micro text-ink/40 mb-2">STARTING PRICE</p>
                <div className="font-sans font-bold text-big tracking-[-0.03em]">{fmt(price)}</div>
              </div>

              <div className="border-b border-ink/12 pb-6">
                <p className="micro text-lime mb-2">30% BOOKING ADVANCE</p>
                <div className="font-sans font-bold text-big tracking-[-0.03em] text-lime">{fmt(advance)}</div>
              </div>

              <div className="pb-2">
                <p className="micro text-ink/30 mb-2">BALANCE</p>
                <div className="font-sans font-bold text-big tracking-[-0.03em] text-ink/30">{fmt(balance)}</div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="micro text-ink/30">
                  FINAL PRICE DEPENDS ON SPACE + SCOPE.
                </p>
                <p className="micro bg-lime text-ink px-2 py-1 self-start font-bold">
                  EXECUTION AVAILABLE ON REQUEST.
                </p>
              </div>

              <Link href="/book" className="btn-primary btn-lime text-[0.65rem] py-4 text-center justify-center">
                BOOK TAAS ↗
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          06 — RENTAL OWNERS
          ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-ink text-paper">
        <div className="max-w-[1600px] mx-auto">

          <p className="micro text-paper/30 mb-10">OWN A RENTAL?</p>

          <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-end">
            <h2 className="font-sans font-bold text-huge leading-[0.85] tracking-[-0.035em] uppercase">
              DON'T<br/>
              SPEND LIKE<br/>
              <span className="text-lime">YOU LIVE<br/>THERE.</span>
            </h2>

            <div className="flex flex-col gap-6">
              <p className="font-sans text-xl md:text-2xl font-medium text-paper/60 leading-snug max-w-sm">
                Make the space better. Not more expensive.
                TAAS shows rental owners where money actually matters.
              </p>
              <Link href="/book" className="btn-primary btn-lime self-start text-[0.65rem] py-3.5 px-7">
                BOOK TAAS ↗
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          07 — WORK (MINIMAL — 10% OF EXPERIENCE)
          ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 md:px-12 border-b border-ink/12">
        <div className="max-w-[1600px] mx-auto">

          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="micro text-ink/40 mb-2">SELECTED WORK</p>
              <h2 className="font-sans font-bold text-big tracking-[-0.03em] uppercase">{WORK_PROJECTS_AVAILABLE.length} PROJECTS.</h2>
            </div>
            <Link href="/work" className="micro text-ink/40 hover:text-ink transition-colors">SEE ALL ↗</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/12">
            {WORK_PROJECTS_AVAILABLE.slice(0, 3).map((project) => (
              <div key={project.slug} className="bg-paper group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-ink/5">
                  <img
                    src={project.beforeImg ?? undefined}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6 border-t border-ink/12">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="micro text-lime">{project.type}</span>
                    <span className="micro text-ink/30">{project.area}</span>
                  </div>
                  <p className="font-sans text-sm font-medium text-ink/70">{project.oneLiner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          08 — TRUST STRIP (No fake numbers)
          ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-b border-ink/12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-ink/12">
            {[
              { h: "₹35,000", s: "STARTING / ROOM" },
              { h: "30%",     s: "BOOKING ADVANCE" },
              { h: "ON-SITE", s: "MUMBAI SERVICE" },
              { h: "CLEAR",   s: "NEXT STEP — ALWAYS" },
            ].map((item, i) => (
              <div key={i} className="md:px-10 first:md:pl-0">
                <div className="font-sans font-bold text-2xl md:text-4xl tracking-[-0.03em] mb-1">{item.h}</div>
                <p className="micro text-ink/40">{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          09 — FINAL BOOKING CTA
          ══════════════════════════════════════════════ */}
      <section className="min-h-[70vh] flex flex-col justify-center py-24 md:py-40 px-6 md:px-12 bg-ink text-paper">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-8 text-center">
          <div className="flex items-center gap-4">
            <img
              src="/team/sharvayu.jpg"
              alt={DESIGNER_NAME}
              onError={(event) => {
                const target = event.currentTarget as HTMLImageElement;
                target.style.display = "none";
              }}
              className="h-16 w-16 rounded-full object-cover border border-pearl/20 bg-pearl/10"
            />
            <div className="text-left">
              <div className="font-sans font-bold text-lg tracking-[-0.02em] text-pearl">{DESIGNER_NAME}</div>
              <div className="micro text-pearl/50">Lead Designer, TAAS</div>
            </div>
          </div>

          <p className="font-sans text-sm uppercase tracking-[0.12em] text-lime">You’ll talk to her directly. No sales team.</p>

          <p className="micro text-paper/30">BEFORE YOU SPEND, ASK TAAS.</p>

          <h2 className="font-sans font-bold text-mega leading-[0.82] tracking-[-0.04em] uppercase">
            <span className="block">I UNDERSTAND</span>
            <span className="block text-lime">THIS.</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/book" className="btn-primary btn-lime text-[0.65rem] py-4 px-10">
              BOOK TAAS ↗
            </Link>
            <Link href="#cost" className="btn-ghost text-[0.65rem] py-4 px-10 text-paper border-paper/30 hover:bg-paper hover:text-ink">
              SEE COST
            </Link>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm uppercase tracking-[0.12em] text-spark hover:text-pearl transition-colors"
          >
            Questions? WhatsApp us.
          </a>

          <p className="micro text-paper/20 max-w-sm">
            TAAS® — MUMBAI BASED ON-SITE SPACE DECISIONS
          </p>
        </div>
      </section>

      {/* SEO block */}
      <div className="sr-only">
        <h2>TAAS — Space decision, design and makeover service in Mumbai.</h2>
        <p>TAAS helps rental owners, homeowners, renters, cafés, and commercial spaces decide what to keep, change, invest, and skip. We serve Mumbai, Andheri, Andheri West, Versova, Lokhandwala, Oshiwara, Juhu, Vile Parle, Bandra. Interior design Mumbai, interior designer Andheri, rental interior design Mumbai, rental makeover Mumbai.</p>
      </div>

      {/* TESTIMONIALS */}
      {TESTIMONIALS.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-12 border-b border-ink/12">
          <div className="max-w-[1600px] mx-auto">
            <p className="micro text-ink/40 mb-6">TESTIMONIALS</p>
            <div className="grid gap-4 md:grid-cols-3">
              {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                <blockquote key={`${testimonial.name}-${testimonial.area}`} className="border border-ink/12 bg-paper p-5">
                  <p className="font-sans text-sm leading-relaxed text-ink/70 mb-4">“{testimonial.quote}”</p>
                  <footer className="font-sans text-xs uppercase tracking-[0.14em] text-ink/40">
                    {testimonial.name} · {testimonial.area}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
