"use client";

import Link from "next/link";
import React from "react";

type Props = {
  calcSpace: string;
  setCalcSpace: (v: string) => void;
  calcType: string;
  setCalcType: (v: string) => void;
  calcBudget: string;
  setCalcBudget: (v: string) => void;
  price: number;
  advance: number;
  balance: number;
  fmt: (n: number) => string;
};

export default function PricingEstimator({
  calcSpace,
  setCalcSpace,
  calcType,
  setCalcType,
  calcBudget,
  setCalcBudget,
  price,
  advance,
  balance,
  fmt,
}: Props) {
  return (
    <>
      <section id="cost" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-paper text-ink">
        <div className="max-w-[1600px] mx-auto">
          <p className="micro text-ink/40 mb-8 md:mb-10">CLEAR PRICING. NO SURPRISES.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { price: '₹35,000', label: 'SINGLE ROOM', note: 'Design direction + what matters.' },
              { price: '₹70,000', label: 'MULTIPLE ROOMS', note: 'Cohesive approach across the space.' },
              { price: '₹1,50,000', label: 'FULL SPACE', note: 'Complete space audit and plan.' },
            ].map((tier, i) => (
              <div key={i} className="p-6 bg-void/5 rounded-lg">
                <span className="micro text-ink/40">{tier.label}</span>
                <div className="font-sans font-bold text-[clamp(1.6rem,4vw,2.6rem)] mt-3">{tier.price}</div>
                <p className="mt-2 text-sm text-ink/60">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 md:px-12 bg-void text-paper">
        <div className="max-w-[1600px] mx-auto">
          <p className="micro text-paper/40 mb-6">COST ESTIMATOR</p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-8">
              <div>
                <p className="micro text-paper/40 mb-3">YOUR SPACE</p>
                <div className="flex flex-wrap gap-3">
                  {['ROOM', 'MULTIPLE ROOMS', 'FULL SPACE'].map((o) => (
                    <button
                      key={o}
                      onClick={() => setCalcSpace(o)}
                      className={`micro px-4 py-3 sm:py-2.5 border rounded-md w-full sm:w-auto text-center ${
                        calcSpace === o ? 'bg-paper text-ink border-paper' : 'text-paper/70 border-paper/12'
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="micro text-paper/40 mb-3">SPACE TYPE</p>
                <div className="flex flex-wrap gap-3">
                  {['RENTAL', 'HOME', 'CAFÉ', 'COMMERCIAL'].map((o) => (
                    <button
                      key={o}
                      onClick={() => setCalcType(o)}
                      className={`micro px-4 py-3 sm:py-2.5 border rounded-md w-full sm:w-auto text-center ${
                        calcType === o ? 'bg-paper text-ink border-paper' : 'text-paper/70 border-paper/12'
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="micro text-paper/40 mb-3">YOUR BUDGET</p>
                <div className="flex flex-wrap gap-3">
                  {['₹50K', '₹1L', '₹3L', '₹5L+', 'NOT SURE'].map((o) => (
                    <button
                      key={o}
                      onClick={() => setCalcBudget(o)}
                      className={`micro px-4 py-3 sm:py-2.5 border rounded-md w-full sm:w-auto text-center ${
                        calcBudget === o ? 'bg-paper text-ink border-paper' : 'text-paper/70 border-paper/12'
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-paper/12 p-6 md:p-8 rounded-lg bg-paper/[0.03]">
              <div className="border-b border-paper/12 pb-6">
                <p className="micro text-paper/40 mb-2">STARTING PRICE</p>
                <div className="font-sans font-bold text-[clamp(1.6rem,4vw,2.8rem)] tracking-[-0.03em]">{fmt(price)}</div>
              </div>

              <div className="border-b border-paper/12 pb-6 mt-6">
                <p className="micro text-spark mb-2">30% BOOKING ADVANCE</p>
                <div className="font-sans font-bold text-2xl text-spark">{fmt(advance)}</div>
              </div>

              <div className="pb-2 mt-6">
                <p className="micro text-paper/30 mb-2">BALANCE</p>
                <div className="font-sans font-bold text-2xl text-paper/60">{fmt(balance)}</div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <p className="micro text-paper/30">FINAL PRICE DEPENDS ON SPACE + SCOPE.</p>
                <p className="micro bg-spark text-ink px-2 py-1 self-start rounded font-bold">EXECUTION AVAILABLE ON REQUEST.</p>
              </div>

              <div className="mt-6">
                <Link href="/book" className="inline-flex items-center gap-3 bg-ink text-paper font-bold uppercase px-5 py-3 rounded-md">
                  BOOK TAAS ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
