import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pop: {
          "0%": { transform: "scale(0.1)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        pop: "pop 1s ease-out 0.6s forwards",
      },
    },
    screens: {
      "lg-custom": "1000px", // breakpoint mới
    },
  },
  plugins: [],
} satisfies Config;
