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
  metadataBase: new URL("https://taas-vf6a.vercel.app"),
  title: {
    default: "TAAS — Interior Design Decision Support",
    template: "%s | TAAS",
  },
  description:
    "TAAS is a premium interior design decision support service in Mumbai. We help homeowners and businesses decide what to keep, change, invest, and skip before committing to large-scale work.",
  openGraph: {
    title: "TAAS — Interior Design Decision Support",
    description: "Design decision support for homes and businesses before you build, spend, or commit.",
    url: "https://taas-vf6a.vercel.app",
    siteName: "TAAS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TAAS — Design decisions before you build, spend or commit.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAAS — Interior Design Decision Support",
    description: "Design decision support for homes and businesses before you build, spend, or commit.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://taas-vf6a.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dm.variable}`}>
      <body className="bg-void text-ink min-h-screen flex flex-col pb-20 md:pb-0 relative">
        <div className="suspense-noise"></div>

        {/* ── NAVIGATION ────────────────────────────────── */}
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        {/* ── STICKY MOBILE CTA ─────────────────────────── */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 flex">
          <div className="flex-1 bg-void border-t border-ink/[0.06] flex items-center justify-between px-5 py-3.5">
            <span className="font-dm text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-ink/50">
              30% ADVANCE
            </span>
            <a
              href="/challenge"
              className="font-dm text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-ink flex items-center gap-2 font-bold"
            >
              BOOK NOW <span className="text-ember text-base leading-none">↗</span>
            </a>
          </div>
        </div>

        <footer className="bg-ink px-5 py-8 md:px-12 text-void">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="text-left">
              <p className="font-syne font-black text-lg">TAAS®</p>
              <p className="font-dm text-[10px] uppercase tracking-[0.12em] mt-1">We help you make better space decisions.</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-syne text-sm font-bold tracking-[-0.03em] text-void hover:opacity-95 transition-colors"
              >
                {WHATSAPP_DISPLAY}
              </a>
              <nav className="mt-4 flex gap-6 uppercase tracking-[0.14em] text-[10px]">
                <a href="/#what">SPACE</a>
                <a href="/#cost">COST</a>
                <a href="/work">WORK</a>
                <a href="/about">ABOUT</a>
              </nav>
            </div>
          </div>
        </footer>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-4 z-40 inline-flex items-center justify-center rounded-full bg-ember px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-void shadow-[0_10px_30px_rgba(255,106,61,0.18)] transition-colors hover:opacity-95 md:bottom-6 md:right-6"
        >
          WhatsApp us
        </a>

      </body>
    </html>
  );
}
