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
        // Pastel palette - MẸ & BÉ
        pastel: {
          pink: '#FADADD',
          'pink-light': '#FCE4EC',
          'pink-dark': '#F8BBD9',
          mint: '#B2DFDB',
          'mint-light': '#E0F2F1',
          'mint-dark': '#80CBC4',
          cream: '#FFF8F0',
          white: '#FFFFFF',
        },
        brand: {
          primary: '#E91E63',
          secondary: '#009688',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-quicksand)', 'system-ui', 'sans-serif'],
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
