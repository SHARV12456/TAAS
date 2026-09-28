"use client";

import { useState } from "react";
import Link from "next/link";

/* ══════════════════════════════════════════════════
   BOOKING DATA
   ══════════════════════════════════════════════════ */

const STEPS = [
  "SPACE",
  "SCOPE",
  "BUDGET",
  "PRICE",
  "PHOTOS",
  "DETAILS",
  "PAY",
];

const SPACE_OPTIONS  = ["RENTAL", "HOME", "CAFÉ", "COMMERCIAL"];
const SCOPE_OPTIONS  = ["ONE ROOM", "MULTIPLE ROOMS", "FULL SPACE", "REFRESH", "MAKEOVER", "NOT SURE"];
const BUDGET_OPTIONS = ["₹50K", "₹1L", "₹3L", "₹5L+", "NOT SURE"];

function getPrice(scope: string | null): number {
  if (scope === "FULL SPACE")      return 150000;
  if (scope === "MULTIPLE ROOMS")  return 70000;
  return 35000;
}

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/* ══════════════════════════════════════════════════
   STEP HEADER
   ══════════════════════════════════════════════════ */

function StepHead({ step, total, title }: { step: number; total: number; title: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="micro text-ink/30 mb-6">
        {String(step).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>
      <h1 className="font-sans font-bold text-huge leading-[0.85] tracking-[-0.035em] uppercase text-ink">
        {title}
      </h1>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   OPTION ROW COMPONENT
   ══════════════════════════════════════════════════ */

function OptionRow({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-center gap-6 py-5 md:py-6 px-0 border-b border-ink/10 transition-colors duration-150 group ${
        selected ? "text-ink" : "text-ink/25 hover:text-ink/70"
      }`}
    >
      {/* Selected indicator */}
      <span
        className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-150 ${
          selected ? "bg-lime" : "bg-transparent border border-ink/20 group-hover:border-ink/50"
        }`}
      />
      <span className="font-sans font-bold text-3xl md:text-big tracking-[-0.03em] uppercase leading-none">
        {label}
      </span>
    </button>
  );
}

/* ══════════════════════════════════════════════════
   MAIN BOOKING PAGE
   ══════════════════════════════════════════════════ */

export default function BookPage() {
  const [step,    setStep]   = useState(1);
  const [space,   setSpace]  = useState<string | null>(null);
  const [scope,   setScope]  = useState<string | null>(null);
  const [budget,  setBudget] = useState<string | null>(null);
  const [details, setDetails] = useState({ name: "", whatsapp: "", email: "", location: "" });
  const [ref,     setRef]    = useState("");

  const total    = 7;
  const price    = getPrice(scope);
  const advance  = price * 0.3;
  const balance  = price - advance;

  const progress = `${((step - 1) / total) * 100}%`;

  function next() { setStep((s) => Math.min(s + 1, total + 1)); }

  function handleBook() {
    const r = `TAAS-${Math.floor(1000 + Math.random() * 9000)}`;
    setRef(r);
    next();
  }

  return (
    <div className="min-h-screen bg-paper text-ink">

      {/* PROGRESS BAR */}
      {step <= total && (
        <div
          className="fixed top-14 left-0 h-0.5 bg-lime z-40 transition-all duration-300"
          style={{ width: progress }}
        />
      )}

      {/* BACK BUTTON */}
      {step > 1 && step <= total && (
        <button
          onClick={() => setStep((s) => s - 1)}
          className="fixed top-[4.5rem] left-6 md:left-12 z-40 micro text-ink/30 hover:text-ink transition-colors"
        >
          ← BACK
        </button>
      )}

      {/* STEP NUMBER — DESKTOP ASIDE */}
      {step <= total && (
        <div className="fixed bottom-8 right-8 md:right-12 hidden md:block">
          <span className="font-sans font-bold text-[8rem] leading-none tracking-[-0.06em] text-ink/5 select-none">
            {String(step).padStart(2, "0")}
          </span>
        </div>
      )}

      {/* CONTENT */}
      <div className="pt-28 md:pt-36 pb-32 px-6 md:px-16 max-w-4xl mx-auto min-h-screen">

        {/* ─── STEP 1: SPACE ─── */}
        {step === 1 && (
          <div>
            <StepHead step={1} total={total} title={"WHAT SPACE\nARE WE\nLOOKING AT?"} />
            {SPACE_OPTIONS.map((s) => (
              <OptionRow
                key={s}
                label={s}
                selected={space === s}
                onClick={() => { setSpace(s); setTimeout(next, 180); }}
              />
            ))}
          </div>
        )}

        {/* ─── STEP 2: SCOPE ─── */}
        {step === 2 && (
          <div>
            <StepHead step={2} total={total} title={"WHAT DO\nYOU NEED?"} />
            {SCOPE_OPTIONS.map((s) => (
              <OptionRow
                key={s}
                label={s}
                selected={scope === s}
                onClick={() => { setScope(s); setTimeout(next, 180); }}
              />
            ))}
          </div>
        )}

        {/* ─── STEP 3: BUDGET ─── */}
        {step === 3 && (
          <div>
            <StepHead step={3} total={total} title={"WHAT'S\nYOUR BUDGET?"} />
            {BUDGET_OPTIONS.map((b) => (
              <OptionRow
                key={b}
                label={b}
                selected={budget === b}
                onClick={() => { setBudget(b); setTimeout(next, 180); }}
              />
            ))}
          </div>
        )}

        {/* ─── STEP 4: PRICE ─── */}
        {step === 4 && (
          <div>
            <StepHead step={4} total={total} title={"YOUR\nSTARTING\nPRICE."} />

            <div className="flex flex-col gap-0 border-t border-ink/12 mt-2">

              <div className="py-8 border-b border-ink/12">
                <p className="micro text-ink/30 mb-2">SERVICE VALUE</p>
                <div className="font-sans font-bold text-big tracking-[-0.03em]">{fmt(price)}</div>
              </div>

              <div className="py-8 border-b border-ink/12 bg-lime/10">
                <p className="micro text-lime mb-2">30% BOOKING ADVANCE</p>
                <div className="font-sans font-bold text-big tracking-[-0.03em] text-ink">{fmt(advance)}</div>
              </div>

              <div className="py-8 border-b border-ink/12">
                <p className="micro text-ink/30 mb-2">BALANCE ON DELIVERY</p>
                <div className="font-sans font-bold text-big tracking-[-0.03em] text-ink/30">{fmt(balance)}</div>
              </div>
            </div>

            <div className="mt-6 mb-10 flex flex-col gap-2">
              <p className="micro text-ink/30">
                FINAL PRICE CONFIRMED AFTER SPACE REVIEW.
              </p>
              <p className="micro bg-lime text-ink px-2 py-1 self-start font-bold">
                EXECUTION AVAILABLE ON REQUEST.
              </p>
            </div>

            <button onClick={next} className="btn-primary btn-lime text-[0.65rem] py-4 px-10">
              CONTINUE ↗
            </button>
          </div>
        )}

        {/* ─── STEP 5: PHOTOS ─── */}
        {step === 5 && (
          <div>
            <StepHead step={5} total={total} title={"SHOW US\nYOUR SPACE."} />

            <div className="border border-ink/12 p-8 md:p-12 bg-lime/10 max-w-xl">
              <h3 className="font-sans font-bold text-2xl tracking-[-0.02em] text-ink mb-4">
                PHOTOS COME LATER.
              </h3>
              <p className="font-sans text-base text-ink/70 leading-snug">
                To keep this process fast, we don't use clunky file uploads here. 
                Complete your booking in the next steps, and we will collect your space photos directly from you once your consultation is confirmed.
              </p>
            </div>

            <button onClick={next} className="btn-primary btn-lime text-[0.65rem] py-4 px-10 mt-10">
              UNDERSTOOD — CONTINUE ↗
            </button>
          </div>
        )}

        {/* ─── STEP 6: DETAILS ─── */}
        {step === 6 && (
          <div>
            <StepHead step={6} total={total} title={"YOUR\nDETAILS."} />

            <div className="flex flex-col gap-10 max-w-xl">
              <div>
                <label className="micro text-ink/40 block mb-2">NAME</label>
                <input
                  type="text"
                  autoFocus
                  placeholder="YOUR NAME"
                  value={details.name}
                  onChange={(e) => setDetails({ ...details, name: e.target.value })}
                  className="taas-input"
                />
              </div>
              <div>
                <label className="micro text-ink/40 block mb-2">WHATSAPP</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={details.whatsapp}
                  onChange={(e) => setDetails({ ...details, whatsapp: e.target.value })}
                  className="taas-input"
                />
              </div>
              <div>
                <label className="micro text-ink/40 block mb-2">LOCATION</label>
                <input
                  type="text"
                  placeholder="MUMBAI NEIGHBOURHOOD"
                  value={details.location}
                  onChange={(e) => setDetails({ ...details, location: e.target.value })}
                  className="taas-input"
                />
              </div>
              <div>
                <label className="micro text-ink/40 block mb-2">EMAIL (OPTIONAL)</label>
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  value={details.email}
                  onChange={(e) => setDetails({ ...details, email: e.target.value })}
                  className="taas-input"
                />
              </div>
            </div>

            <button onClick={next} className="btn-primary btn-lime text-[0.65rem] py-4 px-10 mt-12">
              REVIEW BOOKING ↗
            </button>
          </div>
        )}

        {/* ─── STEP 7: PAY ─── */}
        {step === 7 && (
          <div>
            <StepHead step={7} total={total} title={"CONFIRM\n& BOOK."} />

            {/* Summary */}
            <div className="border border-ink/12 p-8 md:p-12 flex flex-col gap-6 mb-12 max-w-xl">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="micro text-ink/30 mb-1">SPACE</p>
                  <p className="font-sans font-bold">{space ?? "—"}</p>
                </div>
                <div>
                  <p className="micro text-ink/30 mb-1">SCOPE</p>
                  <p className="font-sans font-bold">{scope ?? "—"}</p>
                </div>
                <div>
                  <p className="micro text-ink/30 mb-1">BUDGET</p>
                  <p className="font-sans font-bold">{budget ?? "—"}</p>
                </div>
                <div>
                  <p className="micro text-ink/30 mb-1">NAME</p>
                  <p className="font-sans font-bold">{details.name || "—"}</p>
                </div>
              </div>

              <hr className="border-ink/10" />

              <div>
                <p className="micro text-lime mb-1">30% BOOKING ADVANCE</p>
                <p className="font-sans font-bold text-big tracking-[-0.03em]">{fmt(advance)}</p>
              </div>
            </div>

            <button
              onClick={handleBook}
              className="btn-primary btn-lime text-[0.65rem] py-5 px-12 font-bold text-sm"
            >
              BOOK TAAS ↗
            </button>

            <p className="micro text-ink/30 mt-6 max-w-xs">
              BY BOOKING YOU AGREE TO THE 30% NON-REFUNDABLE ADVANCE.
            </p>
          </div>
        )}

        {/* ─── CONFIRMED ─── */}
        {step === total + 1 && (
          <div className="flex flex-col gap-12 min-h-[60vh] justify-center">

            <div>
              <p className="micro text-lime mb-4">BOOKING CONFIRMED</p>
              <h1 className="font-sans font-bold text-huge leading-[0.85] tracking-[-0.035em] uppercase text-ink">
                YOU'RE<br/>
                <span className="text-lime">IN.</span>
              </h1>
            </div>

            <div className="border border-ink/12 p-8 md:p-12 max-w-md">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="micro text-ink/30 mb-1">REFERENCE</p>
                  <p className="font-sans font-bold text-2xl tracking-[-0.02em] text-lime">{ref}</p>
                </div>
                <div>
                  <p className="micro text-ink/30 mb-1">BOOKING ADVANCE</p>
                  <p className="font-sans font-bold text-2xl tracking-[-0.02em]">{fmt(advance)}</p>
                </div>
              </div>
            </div>

            <div className="bg-lime p-8 md:p-12 max-w-md flex flex-col gap-5">
              <p className="micro text-ink/60 mb-2">NEXT STEP</p>
              <p className="font-sans font-bold text-xl md:text-2xl tracking-[-0.02em] text-ink">
                SEND YOUR SPACE DETAILS<br/>ON WHATSAPP.
              </p>
              <a
                href={`https://wa.me/917400162509?text=${encodeURIComponent(
                  `Hi TAAS, my booking reference is ${ref}. My estimated total is ${fmt(price)}. Please send me the payment link so I can pay the 30% advance (${fmt(advance)}).\n\nHere are my space details:\nName: ${details.name}\nSpace: ${space}\nScope: ${scope}\nLocation: ${details.location}\n\nI have also attached the photos of my space:`
                )}`}
                className="btn-primary self-start text-[0.65rem] py-3.5 px-7"
              >
                OPEN WHATSAPP ↗
              </a>
            </div>

            <Link href="/" className="micro text-ink/30 hover:text-ink transition-colors self-start">
              ← BACK TO TAAS
            </Link>

          </div>
        )}

      </div>
    </div>
  );
}
