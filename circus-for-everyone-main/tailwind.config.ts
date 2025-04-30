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
        white: '#f9ecdc',
        darkbg: '#0b0b0b',
        contrast: '#d58551',
        gold: '#846c44',
        red: '#d84029',
        unimportant: '#704427',
        tahiti: {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        amberdark: {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        kufa1img: {
          800: "#0b0b0b",
          700: '#422819',
          600: '#704427',
          500: '#846c44',
          400: "#d84029",
          300: '#d58551',
          200: '#e4946c',
          100: '#f9ecdc',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
