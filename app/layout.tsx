import type { Metadata } from "next";
import "./globals.css";
import { Syne, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import { DESIGNER_NAME, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

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
      <body className="bg-void text-pearl min-h-screen flex flex-col pb-20 md:pb-0 relative">
        <div className="suspense-noise"></div>

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
              BOOK NOW <span className="text-blood text-base leading-none">↗</span>
            </a>
          </div>
        </div>

        <footer className="border-t border-pearl/[0.06] bg-void/95 px-5 py-6 md:px-12">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="font-dm text-[10px] uppercase tracking-[0.18em] text-pearl/40">
              Designed by {DESIGNER_NAME}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-syne text-sm font-bold tracking-[-0.03em] text-pearl hover:text-blood transition-colors"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </div>
        </footer>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-4 z-40 inline-flex items-center justify-center rounded-full bg-blood px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-void shadow-[0_10px_30px_rgba(255,42,42,0.35)] transition-colors hover:bg-pearl md:bottom-6 md:right-6"
        >
          WhatsApp us
        </a>

      </body>
    </html>
  );
}
