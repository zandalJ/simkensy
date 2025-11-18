/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Manrope"', "sans-serif"],
        mono: ['"Space Grotesk"', "sans-serif"],
      },
      colors: {
        sable: "#110B0A",
        espresso: "#1A1614",
        claret: "#4A1D2B",
        merlot: "#651E2C",
        champagne: "#F4E8D3",
        parchment: "#E7D6C1",
        aurum: "#C8A96A",
        ember: "#B26C4B",
      },
      boxShadow: {
        glow: "0 20px 45px rgba(200, 169, 106, 0.14)",
        card: "0 18px 40px rgba(10, 8, 6, 0.35)",
      },
      letterSpacing: {
        widePlus: "0.12em",
      },
      animation: {
        floatSlow: "floatSlow 14s ease-in-out infinite",
        floatMedium: "floatMedium 18s ease-in-out infinite",
        floatFast: "floatFast 22s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate3d(-12px, -8px, 0)" },
          "50%": { transform: "translate3d(12px, 10px, 0)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translate3d(10px, 6px, 0)" },
          "50%": { transform: "translate3d(-16px, -12px, 0)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translate3d(6px, -16px, 0)" },
          "50%": { transform: "translate3d(-8px, 14px, 0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

