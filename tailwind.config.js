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
        navy: {
          DEFAULT: "#0a1f44",
          dark: "#061230",
          light: "#1a3a6e",
        },
        orange: {
          DEFAULT: "#f26522",
          dark: "#d4551a",
          light: "#ff7a35",
        },
        slate: {
          bg: "#f0f4f8",
          light: "#e8eef5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;