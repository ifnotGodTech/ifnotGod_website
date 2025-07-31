import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        "off-white": 'var(--off-white)',
        "off-black": 'var(--off-black)',
        gray: 'var(--gray)',
        "near-black": 'var(--near-black)',
        "gray-black": 'var(--gray-black)',
        desctructive: 'var(--destructive)',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        instrument: ['var(--font-instrument-serif)', 'serif'],
      },
      animation: {
        slidedown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideup: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)"
      }

    },
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
export default config;