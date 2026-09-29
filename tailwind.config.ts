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
      },
      animation: {
        "fade-in-brutal": "fadeInBrutalist 800ms ease-out forwards",
        "slide-in-bold": "slideInBold 800ms ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

