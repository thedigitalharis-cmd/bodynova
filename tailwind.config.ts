import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#D6B06C', dark: '#B8945A', light: '#E5C691' },
        teal: { DEFAULT: '#2B8F89', dark: '#1F6B66', light: '#4FB0AA' },
        cream: '#FBF8F3',
        ink: '#1A1A1A',
        muted: '#6B6B6B',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: { '2xl': '1.25rem', '3xl': '1.75rem', pill: '9999px' },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(26,26,26,0.12)',
        card: '0 20px 50px -20px rgba(43,143,137,0.18)',
      },
      maxWidth: { container: '1280px' },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
