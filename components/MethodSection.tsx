"use client";

import React from "react";

type Decision = { word: string; sub: string; desc: string };

export default function MethodSection({
  decisions,
  active,
  onChange,
}: {
  decisions: Decision[];
  active: number;
  onChange: (i: number) => void;
}) {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-void text-ink text-center md:text-left">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-start">

        <div>
          <p className="micro text-paper/30 mb-8">THE TAAS METHOD</p>
          <div className="flex flex-col">
            {decisions.map((d, i) => (
                <button
                key={d.word}
                onMouseEnter={() => onChange(i)}
                onClick={() => onChange(i)}
                className={`text-left py-4 md:py-6 border-b border-ink/8 transition-colors duration-200 group flex items-baseline gap-4 md:gap-6 w-full sm:w-auto ${
                  active === i ? "text-spark" : "text-paper/30 hover:text-paper/60"
                }`}
              >
                <span className="micro text-ink/40 w-8 text-[0.65rem] md:text-[0.75rem]">0{i + 1}</span>
                <span className="font-sans font-black leading-[0.85] tracking-[-0.035em] uppercase" style={{ fontSize: 'clamp(1.4rem, 6vw, 4rem)' }}>
                  {d.word}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center md:pl-8 text-center md:text-left">
          <div className="transition-all duration-200 border border-paper/12 bg-paper/[0.03] p-6 md:p-8">
            <span className="micro text-spark mb-4 block">{decisions[active].sub}</span>
            <p className="font-sans text-xl md:text-3xl font-medium text-paper/70 leading-snug max-w-lg">
              {decisions[active].desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
