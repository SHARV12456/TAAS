"use client";

import { useState } from "react";
import Link from "next/link";

/* ══════════════════════════════════════════════════
   1 LAKH CHALLENGE BOOKING PAGE
   ══════════════════════════════════════════════════ */

export default function ChallengePage() {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({ name: "", whatsapp: "", location: "", address: "", spaceType: "" });
  const [ref, setRef] = useState("");

  const totalSteps = 4;
  const progress = `${((step - 1) / totalSteps) * 100}%`;

  function next() { setStep((s) => Math.min(s + 1, totalSteps + 1)); }

  function handleBook() {
    const r = `1LAKH-${Math.floor(1000 + Math.random() * 9000)}`;
    setRef(r);
    next();
  }

  return (
    <div className="min-h-screen bg-ink text-paper overflow-x-hidden selection:bg-lime selection:text-ink">
      
      {/* PROGRESS BAR */}
      {step <= totalSteps && (
        <div className="fixed top-0 left-0 w-full h-1 bg-ink/50 z-50">
          <div className="h-full bg-lime transition-all duration-700 ease-out" style={{ width: progress }} />
        </div>
      )}

      {/* BACK BUTTON */}
      <div className="fixed top-8 left-6 md:left-12 z-40 flex items-center justify-between w-[calc(100%-3rem)] md:w-[calc(100%-6rem)]">
        {step > 1 && step <= totalSteps ? (
          <button onClick={() => setStep((s) => s - 1)} className="micro text-paper/40 hover:text-lime transition-colors uppercase tracking-[0.2em] font-bold">
            ← Back
          </button>
        ) : (
          <Link href="/" className="micro text-paper/40 hover:text-lime transition-colors uppercase tracking-[0.2em] font-bold">
            ← Home
          </Link>
        )}
        <span className="micro text-lime uppercase tracking-[0.2em] font-bold">
          ₹1 LAKH CHALLENGE
        </span>
      </div>

      <div className="flex min-h-screen">
        
        {/* Left Side: Editorial / Brand */}
        <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-12 border-r border-paper/10">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" alt="Interior" className="w-full h-full object-cover opacity-20 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink"></div>
          </div>
          <div className="relative z-10 mt-20">
            <div className="flex items-center gap-3 bg-lime/10 border border-lime/20 rounded-full px-5 py-2.5 w-max mb-8">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span></span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-lime uppercase">Home Makeover Challenge</span>
            </div>
            <h1 className="font-sans font-black text-6xl xl:text-7xl leading-[0.85] tracking-[-0.04em] uppercase text-paper mb-6">
              <span className="block text-transparent [-webkit-text-stroke:1px_#F7F4EF]">FULL HOME</span>
              <span className="block">MAKEOVER.</span>
              <span className="block text-lime">₹1 LAKH.</span>
            </h1>
            <p className="font-sans text-xl font-medium text-paper/60 max-w-md mb-10">
              A complete home revamp — not a mood board, not a consultation. We come in, decide what stays, what changes, and what transforms. Then we execute it. All under ₹1,00,000.
            </p>

            {/* What's included */}
            <div className="flex flex-col gap-5">
              {[
                { label: "ON-SITE VISIT", desc: "We physically walk through your space — every room, every corner." },
                { label: "KEEP / CHANGE / INVEST / SKIP PLAN", desc: "A precise room-by-room decision map. No guesswork, no wasted spend." },
                { label: "EXECUTION", desc: "We handle the actual makeover — paint, furniture, lighting, styling — within the ₹1L budget." },
                { label: "BEFORE & AFTER DOCUMENTATION", desc: "Full photo documentation of the transformation." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-sans font-bold text-[11px] tracking-[0.2em] text-lime uppercase mb-0.5">{item.label}</p>
                    <p className="font-sans text-sm text-paper/50 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <p className="micro text-paper/30">TAAS PLATFORM — MUMBAI</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-32 md:px-16 xl:px-24">
          
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            
            {/* ─── STEP 1: SPACE TYPE ─── */}
            {step === 1 && (
              <div className="animate-fade-in-up">
                <p className="micro text-lime mb-6 tracking-[0.2em]">STEP 01 / 04</p>
                <h2 className="font-sans font-bold text-5xl md:text-6xl leading-[0.85] tracking-[-0.035em] uppercase text-paper mb-12">
                  WHAT ARE WE<br/>WORKING WITH?
                </h2>
                <div className="flex flex-col gap-4">
                  {["Studio Apartment", "1BHK / 2BHK Room", "Rental Space", "Café / Commercial"].map((type) => (
                    <button
                      key={type}
                      onClick={() => { setDetails({ ...details, spaceType: type }); setTimeout(next, 200); }}
                      className={`group flex items-center justify-between p-6 rounded-2xl border-2 transition-all duration-300 ${
                        details.spaceType === type 
                          ? "border-lime bg-lime/10 text-lime" 
                          : "border-paper/10 bg-paper/5 hover:border-lime/50 text-paper/80"
                      }`}
                    >
                      <span className="font-sans font-bold text-xl md:text-2xl tracking-[-0.02em] uppercase">{type}</span>
                      <span className={`text-2xl transition-transform duration-300 ${details.spaceType === type ? "scale-110" : "scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-50"}`}>→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ─── STEP 2: THE PROMISE ─── */}
            {step === 2 && (
              <div className="animate-fade-in-up">
                <p className="micro text-lime mb-6 tracking-[0.2em]">STEP 02 / 04</p>
                <h2 className="font-sans font-bold text-5xl md:text-6xl leading-[0.85] tracking-[-0.035em] uppercase text-paper mb-4">
                  WHAT YOU<br/>GET.
                </h2>
                <p className="font-sans text-base text-paper/50 mb-8 max-w-sm leading-relaxed">
                  The ₹1 Lakh Interior Challenge is a full home makeover — not a consultation, not a report. We design and execute the transformation of your entire space within a strict ₹1,00,000 execution budget.
                </p>
                <div className="bg-paper/5 border border-paper/10 rounded-3xl p-8 md:p-10 mb-10 flex flex-col gap-8">
                  <div>
                    <h3 className="font-sans font-bold text-xl text-lime mb-2">1. FULL HOME REVAMP</h3>
                    <p className="text-paper/60 font-medium">This isn't a single room — it's your entire home. Paint, furniture placement, lighting, styling, storage solutions. Everything that's visible and liveable gets addressed.</p>
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xl text-lime mb-2">2. STRICT ₹1,00,000 EXECUTION BUDGET</h3>
                    <p className="text-paper/60 font-medium">Every rupee is tracked. We work with vendors and sourcing that maximises visible impact — not markup. No surprise bills, no scope creep.</p>
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xl text-lime mb-2">3. WHAT WE DON'T DO</h3>
                    <p className="text-paper/60 font-medium">No structural demolition, no breaking functional walls, no replacing tiles that already work. We invest where it actually matters and skip what's a waste of money.</p>
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xl text-lime mb-2">4. DESIGN FEE — ₹25,000</h3>
                    <p className="text-paper/60 font-medium">The design direction, on-site visit, and your Keep/Change/Invest/Skip plan is covered by an upfront fee of <span className="text-white">₹25,000</span>. This is separate from the ₹1L execution budget.</p>
                  </div>
                </div>
                <button onClick={next} className="w-full bg-lime text-ink font-bold text-sm md:text-base uppercase px-8 py-5 rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(200,241,74,0.3)]">
                  I'M IN — LET'S START →
                </button>
              </div>
            )}

            {/* ─── STEP 3: DETAILS ─── */}
            {step === 3 && (
              <div className="animate-fade-in-up">
                <p className="micro text-lime mb-6 tracking-[0.2em]">STEP 03 / 04</p>
                <h2 className="font-sans font-bold text-5xl md:text-6xl leading-[0.85] tracking-[-0.035em] uppercase text-paper mb-10">
                  TELL US<br/>ABOUT YOU.
                </h2>
                
                <div className="flex flex-col gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="FULL NAME"
                      value={details.name}
                      onChange={(e) => setDetails({ ...details, name: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-paper/20 py-4 font-sans font-bold text-2xl md:text-3xl text-paper uppercase placeholder-paper/20 focus:outline-none focus:border-lime transition-colors"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="tel"
                      placeholder="WHATSAPP NUMBER"
                      value={details.whatsapp}
                      onChange={(e) => setDetails({ ...details, whatsapp: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-paper/20 py-4 font-sans font-bold text-2xl md:text-3xl text-paper uppercase placeholder-paper/20 focus:outline-none focus:border-lime transition-colors"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="LOCATION (IN MUMBAI)"
                      value={details.location}
                      onChange={(e) => setDetails({ ...details, location: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-paper/20 py-4 font-sans font-bold text-2xl md:text-3xl text-paper uppercase placeholder-paper/20 focus:outline-none focus:border-lime transition-colors"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="DETAILED ADDRESS FOR SITE VISIT"
                      value={details.address}
                      onChange={(e) => setDetails({ ...details, address: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-paper/20 py-4 font-sans font-bold text-2xl md:text-3xl text-paper uppercase placeholder-paper/20 focus:outline-none focus:border-lime transition-colors"
                    />
                  </div>
                </div>

                <div className="mt-14 flex items-center gap-6">
                  <button onClick={next} disabled={!details.name || !details.whatsapp || !details.location || !details.address} className="flex-1 bg-lime text-ink font-bold text-sm md:text-base uppercase px-8 py-5 rounded-full hover:bg-white disabled:opacity-50 disabled:hover:bg-lime transition-colors duration-300">
                    REVIEW & PROCEED →
                  </button>
                </div>
              </div>
            )}

            {/* ─── STEP 4: REVIEW ─── */}
            {step === 4 && (
              <div className="animate-fade-in-up">
                <p className="micro text-lime mb-6 tracking-[0.2em]">STEP 04 / 04</p>
                <h2 className="font-sans font-bold text-5xl md:text-6xl leading-[0.85] tracking-[-0.035em] uppercase text-paper mb-10">
                  LOCK IT IN.
                </h2>
                
                <div className="bg-paper/5 border border-paper/10 rounded-3xl p-8 mb-10">
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <p className="micro text-paper/40 mb-2">NAME</p>
                      <p className="font-sans font-bold text-xl uppercase">{details.name || "—"}</p>
                    </div>
                    <div>
                      <p className="micro text-paper/40 mb-2">WHATSAPP</p>
                      <p className="font-sans font-bold text-xl uppercase">{details.whatsapp || "—"}</p>
                    </div>
                    <div>
                      <p className="micro text-paper/40 mb-2">LOCATION</p>
                      <p className="font-sans font-bold text-xl uppercase">{details.location || "—"}</p>
                    </div>
                    <div>
                      <p className="micro text-paper/40 mb-2">SPACE TYPE</p>
                      <p className="font-sans font-bold text-xl uppercase">{details.spaceType || "—"}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="micro text-paper/40 mb-2">DETAILED ADDRESS</p>
                      <p className="font-sans font-bold text-xl uppercase">{details.address || "—"}</p>
                    </div>
                  </div>
                  
                  <hr className="border-paper/10 mb-8" />
                  
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="micro text-lime mb-2">CHALLENGE DESIGN FEE</p>
                      <p className="font-sans font-bold text-4xl tracking-[-0.02em]">₹25,000</p>
                    </div>
                  </div>
                </div>

                <button onClick={handleBook} className="w-full bg-lime text-ink font-bold text-sm md:text-base uppercase px-8 py-5 rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(200,241,74,0.3)]">
                  CONFIRM CHALLENGE →
                </button>
                <p className="text-center micro text-paper/30 mt-6">LIMITED SLOTS AVAILABLE THIS MONTH.</p>
              </div>
            )}

            {/* ─── CONFIRMATION ─── */}
            {step === totalSteps + 1 && (
              <div className="animate-fade-in-up text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-lime/10 rounded-full flex items-center justify-center mb-8 border border-lime/20">
                  <span className="text-lime text-3xl">✓</span>
                </div>
                <h2 className="font-sans font-bold text-5xl md:text-6xl leading-[0.85] tracking-[-0.035em] uppercase text-paper mb-6">
                  CHALLENGE<br/>ACCEPTED.
                </h2>
                <p className="text-xl text-paper/60 font-medium mb-10 max-w-md">
                  Your reference is <strong className="text-white">{ref}</strong>. The final step is to send us a quick hello on WhatsApp so we can coordinate your space photos.
                </p>

                <a
                  href={`https://wa.me/917400162509?text=${encodeURIComponent(
                    `Hi TAAS! I just booked the ₹1 Lakh Interior Challenge.\n\nMy Reference: ${ref}\nName: ${details.name}\nSpace: ${details.spaceType}\nLocation: ${details.location}\n\nI am ready to pay the ₹25,000 design fee. Please send me the payment link.\n\nHere is my detailed address for the on-site visit:\n${details.address}\n\nI am ready to share my space photos!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-lime text-ink font-bold text-sm md:text-base uppercase px-8 py-5 rounded-full hover:bg-white transition-colors duration-300 mb-8 inline-flex justify-center"
                >
                  SEND WHATSAPP ↗
                </a>
                
                <Link href="/" className="micro text-paper/40 hover:text-white transition-colors uppercase tracking-[0.2em] font-bold">
                  RETURN TO HOME
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
