"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import {
  ADVANCE_TERMS,
  DESIGNER_NAME,
  WHATSAPP_URL,
} from "@/lib/contact";
import { WORK_PROJECTS_AVAILABLE } from "@/lib/work";
import { TESTIMONIALS } from "@/lib/testimonials";
import MethodSection from "@/components/MethodSection";
import ChallengeSection from "@/components/ChallengeSection";
import PricingEstimator from "@/components/PricingEstimator";
import HeroSection from "@/components/HeroSection";

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
  const [calcSpace, setCalcSpace] = useState("ROOM");
  const [calcType, setCalcType] = useState("RENTAL");
  const [calcBudget, setCalcBudget] = useState("₹1L");
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const price = calcBase(calcSpace);
  const advance = price * 0.3;
  const balance = price - advance;

  const scrollCarousel = (direction: "prev" | "next") => {
    if (!carouselRef.current) return;

    const firstCard = carouselRef.current.querySelector("article");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 360;
    const gap = 24;
    const amount = cardWidth + gap;

    carouselRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">

      <HeroSection />


      {/* ══════════════════════════════════════════════
          02 — WHAT IS TAAS?
          ══════════════════════════════════════════════ */}
      <section id="what" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-ink text-paper text-center md:text-left">
        <div className="max-w-[1600px] mx-auto">

          <p className="micro text-paper/30 mb-8 md:mb-10">WHAT IS TAAS?</p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-end">

            <div>
              <h2 className="font-sans font-bold text-huge leading-[0.85] tracking-[-0.035em] uppercase mb-6 md:mb-0">
                YOU HAVE<br/>
                A SPACE.<br/>
                <span className="text-lime">LET'S<br/>DECIDE.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-7 pb-2 items-center md:items-start">
              <p className="font-sans text-lg md:text-2xl font-medium text-paper/60 leading-snug max-w-md">
                We are interior designers with a different approach. TAAS helps you decide what your space needs before you spend a rupee.
              </p>

              <div className="flex flex-wrap gap-x-2 gap-y-1 items-center justify-center md:justify-start micro text-paper/40">
                {['SPACE', '→', 'SCOPE', '→', 'BUDGET', '→', 'PRICE', '→', 'DETAILS', '→', 'BOOK'].map((s, i) => (
                  <span key={i} className={s === '→' ? 'text-lime' : ''}>{s}</span>
                ))}
              </div>

              <Link href="/book" className="btn-primary btn-lime inline-flex self-center md:self-start text-[0.65rem] py-3.5 px-7">
                BOOK TAAS ↗
              </Link>
            </div>
          </div>
        </div>
      </section>


      <PricingEstimator
        calcSpace={calcSpace}
        setCalcSpace={setCalcSpace}
        calcType={calcType}
        setCalcType={setCalcType}
        calcBudget={calcBudget}
        setCalcBudget={setCalcBudget}
        price={price}
        advance={advance}
        balance={balance}
        fmt={fmt}
      />


      <MethodSection decisions={DECISIONS} active={activeDecision} onChange={setActiveDecision} />

      <ChallengeSection />


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


      {/* Duplicate inline cost calculator removed — using `PricingEstimator` component above */}


      {/* ══════════════════════════════════════════════
          06 — RENTAL OWNERS
          ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-ink text-paper text-center md:text-left">
        <div className="max-w-[1600px] mx-auto">

          <p className="micro text-paper/30 mb-10">OWN A RENTAL?</p>

          <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-end">
            <h2 className="font-sans font-bold text-huge leading-[0.85] tracking-[-0.035em] uppercase">
              DON'T<br/>
              SPEND LIKE<br/>
              <span className="text-lime">YOU LIVE<br/>THERE.</span>
            </h2>

            <div className="flex flex-col gap-6 items-center md:items-start">
              <p className="font-sans text-xl md:text-2xl font-medium text-paper/60 leading-snug max-w-sm">
                Make the space better. Not more expensive.
                TAAS shows rental owners where money actually matters.
              </p>
              <Link href="/book" className="btn-primary btn-lime self-center md:self-start text-[0.65rem] py-3.5 px-7">
                BOOK TAAS ↗
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          07 — WORK (MINIMAL — 10% OF EXPERIENCE)
          ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 md:px-12 border-b border-ink/12 text-center md:text-left">
        <div className="max-w-[1600px] mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6 md:gap-0">
            <div>
              <p className="micro mb-4 text-paper/35">SELECTED WORK</p>
              <h2 className="font-sans font-bold text-big tracking-[-0.03em] uppercase">{WORK_PROJECTS_AVAILABLE.length} PROJECTS.</h2>
            </div>
            <Link href="/work" className="micro text-ink/40 hover:text-ink transition-colors self-center md:self-auto">SEE ALL ↗</Link>
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
                  <div className="flex items-baseline justify-between mb-2 gap-3">
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
      <section className="py-12 md:py-16 px-6 md:px-12 border-b border-ink/12 text-center md:text-left">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-ink/12">
            {[{ h: '₹35,000', s: 'STARTING / ROOM' }, { h: '30%', s: 'BOOKING ADVANCE' }, { h: 'ON-SITE', s: 'MUMBAI SERVICE' }, { h: 'CLEAR', s: 'NEXT STEP — ALWAYS' }].map((item, i) => (
              <div key={i} className="md:px-8 first:md:pl-0 border border-ink/12 md:border-0 bg-paper/50 md:bg-transparent p-4 md:p-0">
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
      <section className="min-h-[70vh] flex flex-col justify-center py-16 px-4 sm:px-6 md:px-12 md:py-40 bg-ink text-paper">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-6 text-center md:gap-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-center sm:text-left">
            <img
              src="/team/sharvayu.jpg"
              alt={DESIGNER_NAME}
              onError={(event) => {
                const target = event.currentTarget as HTMLImageElement;
                target.style.display = "none";
              }}
              className="h-16 w-16 rounded-full border border-pearl/20 bg-pearl/10 object-cover shadow-[0_10px_30px_rgba(0,0,0,0.25)] sm:h-20 sm:w-20"
            />
            <div>
              <div className="font-sans text-lg font-bold tracking-[-0.02em] text-pearl sm:text-xl">{DESIGNER_NAME}</div>
              <div className="micro text-pearl/50">Lead Designer, TAAS</div>
            </div>
          </div>

          <p className="max-w-[28rem] text-center font-sans text-xs uppercase tracking-[0.12em] text-lime sm:text-sm">
            You’ll talk to her directly. No sales team.
          </p>

          <p className="micro text-paper/30">BEFORE YOU SPEND, ASK TAAS.</p>

          <h2 className="max-w-[18ch] font-sans text-[clamp(2.2rem,9vw,8rem)] font-bold uppercase leading-[0.82] tracking-[-0.04em]">
            <span className="block">I UNDERSTAND</span>
            <span className="block text-lime">THIS.</span>
          </h2>

          <div className="flex w-full max-w-[30rem] flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/book" className="btn-primary btn-lime w-full text-[0.65rem] py-4 sm:w-auto">
              BOOK TAAS ↗
            </Link>
            <Link href="#cost" className="btn-ghost w-full text-[0.65rem] py-4 hover:bg-paper hover:text-ink sm:w-auto">
              SEE COST
            </Link>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs uppercase tracking-[0.12em] text-spark transition-colors hover:text-pearl sm:text-sm"
          >
            Questions? WhatsApp us.
          </a>

          <p className="micro max-w-[26rem] text-paper/20">
            TAAS® — MUMBAI BASED ON-SITE SPACE DECISIONS
          </p>
        </div>
      </section>

      {/* SEO block */}
      <div className="sr-only">
        <h2>TAAS — Space decision, design and makeover service in Mumbai.</h2>
        <p>TAAS helps rental owners, homeowners, renters, cafés, and commercial spaces decide what to keep, change, invest, and skip. We serve Mumbai, Andheri, Andheri West, Versova, Lokhandwala, Oshiwara, Juhu, Vile Parle, Bandra. Interior design Mumbai, interior designer Andheri, rental interior design Mumbai, rental makeover Mumbai.</p>
      </div>

      {TESTIMONIALS.length > 0 && (
        <section className="border-b border-ink/12 bg-ink px-4 py-16 text-paper sm:px-6 md:px-12 md:py-24">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-8 flex items-end justify-between gap-4 md:mb-12">
              <div>
                <p className="micro mb-2 text-paper/35">CLIENTS SAY.</p>
                <p className="micro text-paper/20">REAL EXPERIENCES. REAL SPACES. REAL DECISIONS.</p>
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <button
                  type="button"
                  aria-label="Previous reviews"
                  onClick={() => scrollCarousel("prev")}
                  className="flex h-10 w-10 items-center justify-center border border-paper/15 bg-transparent text-sm text-paper transition-all duration-200 hover:border-lime hover:text-lime"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next reviews"
                  onClick={() => scrollCarousel("next")}
                  className="flex h-10 w-10 items-center justify-center border border-paper/15 bg-transparent text-sm text-paper transition-all duration-200 hover:border-lime hover:text-lime"
                >
                  →
                </button>
              </div>
            </div>

            <div
              ref={carouselRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:gap-6 md:pb-0"
              style={{ scrollbarWidth: "none" }}
            >
              {TESTIMONIALS.map((note, index) => {
                const source = note.source ?? "CLIENT NOTE";
                const reviewNumber = String(index + 1).padStart(2, "0");

                return (
                  <article
                    key={`${note.name}-${note.area}-${index}`}
                    className="group min-w-[84%] snap-start border border-paper/12 bg-paper/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 md:min-w-[32%]"
                    style={{
                      ...(index % 2 === 1 ? { marginTop: "0.5rem" } : {}),
                      ...(index % 3 === 2 ? { marginTop: "1rem" } : {}),
                    }}
                  >
                    <div className="mb-6 flex items-center justify-between gap-3 border-b border-paper/10 pb-4">
                      <span className="font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-paper/45">
                        {reviewNumber} / {String(TESTIMONIALS.length).padStart(2, "0")}
                      </span>
                      <span className="font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-paper/45">
                        {source}
                      </span>
                    </div>

                    {note.type === "SCREENSHOT" && note.image ? (
                      <div className="overflow-hidden border border-paper/10 bg-paper/[0.02]">
                        <img
                          src={note.image}
                          alt={`${note.name} review`}
                          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    ) : note.type === "VIDEO" && note.videoUrl ? (
                      <div className="relative overflow-hidden border border-paper/10 bg-paper/[0.02]">
                        <video
                          preload="none"
                          playsInline
                          controls
                          className="h-64 w-full object-cover"
                        >
                          <source src={note.videoUrl} type="video/mp4" />
                        </video>
                      </div>
                    ) : (
                      <p className="mb-8 font-sans text-base leading-relaxed text-paper/75 md:text-lg md:leading-relaxed">
                        “{note.quote}”
                      </p>
                    )}

                    {!((note.type === "SCREENSHOT" || note.type === "VIDEO") && (note.image || note.videoUrl)) && (
                      <div className="mt-8 border-t border-paper/10 pt-4">
                        <div className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-paper/85">
                          {note.name}
                        </div>
                        <div className="mt-1 font-sans text-[10px] uppercase tracking-[0.14em] text-paper/45">
                          {note.area} · {note.spaceType}
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center md:mt-14">
              <Link href="/book" className="btn-primary btn-lime inline-flex text-[0.65rem] py-4 px-7">
                BOOK TAAS ↗
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

