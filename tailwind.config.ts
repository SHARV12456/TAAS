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
        void:  "#07070C",
        pearl: "#EDEAE2",
        spark: "#BBFF33",
        iron:  "#141419",
      },
      fontFamily: {
        sans: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm)", "sans-serif"],
        mono: ["var(--font-syne)", "monospace"],
      },
      fontSize: {
        mega:  ["clamp(4rem, 12vw, 10rem)", { lineHeight: "0.9",  letterSpacing: "-0.04em" }],
        huge:  ["clamp(2.5rem, 6vw, 5rem)",  { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        big:   ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        label: ["0.65rem",                    { lineHeight: "1.2",  letterSpacing: "0.22em"  }],
      },
      transitionDuration: {
        DEFAULT: "250",
        fast:    "150",
        slow:    "500",
      },
      keyframes: {
        scan: {
          "0%":   { transform: "translateY(-100vh)", opacity: "0"   },
          "5%":   {                                  opacity: "0.5" },
          "95%":  {                                  opacity: "0.5" },
          "100%": { transform: "translateY(100vh)",  opacity: "0"   },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)"   },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1"   },
          "50%":      { opacity: "0.3" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)"  },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      animation: {
        scan:          "scan 8s ease-in-out infinite",
        marquee:       "marquee 30s linear infinite",
        "pulse-slow":  "pulse-slow 3s ease-in-out infinite",
        float:         "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
