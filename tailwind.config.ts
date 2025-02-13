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
        blue: {
          dark: "var(--darkblue)",     // #003b80
          DEFAULT: "var(--debiblue)",  // #69baff
          light: "var(--text)",        // #2b73ff
          100: "#e6f3ff",
          200: "#bde2ff",
          300: "#94d1ff",
          400: "#69baff",  // --debiblue
          500: "#2b73ff",  // --text
          600: "#1a5cd9",
          700: "#003b80",  // --darkblue
          800: "#002b66",
          900: "#001a4d"
        },
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
      },
      animation: {
        'glow-1': 'glow1 3s ease-out infinite',
        'glow-2': 'glow2 3s ease-out infinite 1.5s',
      },
      keyframes: {
        glow1: {
          '0%': { transform: 'scale(1)', opacity: '0.4' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        glow2: {
          '0%': { transform: 'scale(1)', opacity: '0.4' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;