import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void:  "#000000",
        pearl: "#ffffff",
        spark: "#BBFF33",
        iron:  "#1a1a1a",
        ink: "#000000",
        paper: "#ffffff",
        lime: "#BBFF33",
        blood: "#ff2a2a",
        glow: "rgba(187, 255, 51, 0.4)",
      },
      fontFamily: {
        sans: ["var(--font-syne)", "sans-serif"],
        serif: ["Georgia", "serif"],
        body: ["var(--font-dm)", "sans-serif"],
        mono: ["var(--font-syne)", "monospace"],
      },
      fontSize: {
        mega:  ["clamp(3.5rem, 14vw, 12rem)", { lineHeight: "0.9",  letterSpacing: "-0.04em" }],
        huge:  ["clamp(2.8rem, 8vw, 6rem)",  { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        big:   ["clamp(1.8rem, 4vw, 3rem)", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        label: ["0.65rem",                    { lineHeight: "1.2",  letterSpacing: "0.22em"  }],
      },
      transitionDuration: {
        DEFAULT: "250",
        fast:    "150",
        slow:    "500",
        xmslow:  "1000",
      },
      keyframes: {
        fadeInBrutalist: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInBold: {
          "0%":   { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.02)", filter: "blur(2px)" },
        },
        panImage: {
          "0%": { transform: "scale(1.1) translate(0, 0)" },
          "50%": { transform: "scale(1.15) translate(-1%, -1%)" },
          "100%": { transform: "scale(1.1) translate(0, 0)" },
        }
      },
      animation: {
        "fade-in-brutal": "fadeInBrutalist 800ms ease-out forwards",
        "slide-in-bold": "slideInBold 800ms ease-out forwards",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "pan-image": "panImage 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

