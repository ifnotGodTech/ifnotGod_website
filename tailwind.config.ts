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
        gray: 'var(--gray)'
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        instrument: ['var(--font-instrument-serif)', 'serif'],
      },
    },
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
export default config;