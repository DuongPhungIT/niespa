import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#DDEFFD',
          'pink-light': '#F2F9FF',
          'pink-dark': '#BEDCF2',
          mint: '#D7F3F0',
          'mint-light': '#F0FBFA',
          'mint-dark': '#B8E4DD',
          cream: '#F7FCFF',
          white: '#FFFFFF',
        },
        brand: {
          primary: '#234E70',
          secondary: '#78C6E3',
        },
      },
      fontFamily: {
        sans: [
          'Segoe UI',
          'Arial',
          'Helvetica Neue',
          'Tahoma',
          'Verdana',
          'sans-serif',
        ],
        display: [
          'Iowan Old Style',
          'Baskerville',
          'Palatino Linotype',
          'Book Antiqua',
          'Cambria',
          'Times New Roman',
          'Georgia',
          'serif',
        ],
      },
      fontSize: {
        'display-hero': ['clamp(2.125rem, 3.6vw, 4.5rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'display-page': ['clamp(2.4rem, 4.4vw, 4.75rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-section': ['clamp(2rem, 3vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-card': ['clamp(1.5rem, 1.8vw, 2.25rem)', { lineHeight: '1.14', letterSpacing: '-0.02em' }],
        overline: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.28em' }],
        label: ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.18em' }],
        body: ['1rem', { lineHeight: '1.85' }],
        'body-lg': ['1.125rem', { lineHeight: '1.9' }],
        button: ['0.95rem', { lineHeight: '1.2' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
