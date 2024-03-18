import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        backgroundDark: {
          0: "#000000",
          100: "#0F1111",
          200: "#212424",
          300: "#383D3D",
          400: "#575D5D",
          500: "#7B8484",
          600: "#A6B1B2",
          700: "#D8E5E6",
        },
        textWhite: "#D8E5E6",
        textBlue: "#6ADAE0",
        textPink: "#F8CDEF",
        textPurple: "#836FFF",
        textDarkBlue: "#211951",
        textGreen: "#15F5BA",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
