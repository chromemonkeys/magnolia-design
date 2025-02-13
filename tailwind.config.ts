import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        didot: ['var(--font-didot)', 'serif'],
        bodoni: ['var(--font-bodoni)', 'serif'],
        caslon: ['var(--font-caslon)', 'serif'],
        garamond: ['var(--font-garamond)', 'serif'],
        modern: ['var(--font-modern)', 'serif'],
        compressed: ['var(--font-compressed)', 'serif'],
        decorative: ['var(--font-decorative)', 'serif'],
        optima: ['Optima', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
