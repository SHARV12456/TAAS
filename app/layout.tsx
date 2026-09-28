import type { Metadata } from "next";
import "./globals.css";
import { Syne, DM_Sans } from "next/font/google";
import Link from "next/link";

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
      <body className="bg-void text-pearl min-h-screen flex flex-col pb-20 md:pb-0">

        {/* ── NAVIGATION ────────────────────────────────── */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-void/95 backdrop-blur-sm border-b border-pearl/[0.06]">
          <div className="flex items-center justify-between px-6 md:px-12 h-14">

            {/* Logo */}
            <Link
              href="/"
              className="font-syne font-black text-base tracking-tighter text-pearl hover:text-spark transition-colors duration-200"
            >
              TAAS®
            </Link>

            {/* Nav links — desktop */}
            <nav className="hidden md:flex items-center gap-10">
              <Link
                href="/#what"
                className="font-dm text-[10px] tracking-[0.18em] uppercase text-pearl/40 hover:text-pearl transition-colors duration-200"
              >
                SPACE
              </Link>
              <Link
                href="/#cost"
                className="font-dm text-[10px] tracking-[0.18em] uppercase text-pearl/40 hover:text-pearl transition-colors duration-200"
              >
                COST
              </Link>
              <Link
                href="/work"
                className="font-dm text-[10px] tracking-[0.18em] uppercase text-pearl/40 hover:text-pearl transition-colors duration-200"
              >
                WORK
              </Link>
            </nav>

            {/* Primary CTA */}
            <Link
              href="/challenge"
              className="bg-spark text-void font-dm font-bold text-[10px] tracking-[0.22em] uppercase px-5 py-2.5 hover:bg-pearl transition-colors duration-300"
            >
              TAKE CHALLENGE →
            </Link>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        {/* ── STICKY MOBILE CTA ─────────────────────────── */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex">
          <div className="flex-1 bg-void border-t border-pearl/[0.06] flex items-center justify-between px-5 py-4">
            <span className="font-dm text-[10px] tracking-[0.18em] uppercase text-pearl/50">
              30% ADVANCE
            </span>
            <Link
              href="/challenge"
              className="font-dm text-[10px] tracking-[0.18em] uppercase text-pearl flex items-center gap-2 font-bold"
            >
              BOOK NOW <span className="text-spark text-base leading-none">↗</span>
            </Link>
          </div>
        </div>

      </body>
    </html>
  );
}
