import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      },
    },
  },
  plugins: [],
};
export default config;
