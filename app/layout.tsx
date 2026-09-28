import type { Metadata } from "next";
import "./globals.css";
import { Syne, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TAAS® — Before You Spend, Ask TAAS",
  description:
    "TAAS is a premium space-decision platform in Mumbai. Decide what to keep, change, invest and skip. Book from ₹35,000 / room. 30% advance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dm.variable}`}>
      <body className="bg-void text-pearl min-h-screen flex flex-col pb-16 md:pb-0">

        {/* ── NAVIGATION ────────────────────────────────── */}
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        {/* ── STICKY MOBILE CTA ─────────────────────────── */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 flex">
          <div className="flex-1 bg-void border-t border-pearl/[0.06] flex items-center justify-between px-5 py-3.5">
            <span className="font-dm text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-pearl/50">
              30% ADVANCE
            </span>
            <a
              href="/challenge"
              className="font-dm text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-pearl flex items-center gap-2 font-bold"
            >
              BOOK NOW <span className="text-spark text-base leading-none">↗</span>
            </a>
          </div>
        </div>

      </body>
    </html>
  );
}
