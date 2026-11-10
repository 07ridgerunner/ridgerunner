/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        kashmir: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dcfd',
          300: '#7cc0fb',
          400: '#36a0f6',
          500: '#0c82e7',
          600: '#0163c4',
          700: '#014f9e',
          800: '#054382',
          900: '#0a396c',
          950: '#07234a',
        },
        ridge: {
          yellow: '#FFB81C',
          'yellow-dark': '#E08A00',
          navy: '#0C0D10',
          sky: '#FFF2D4',
          mist: '#F6F5F1',
          green: '#6BA32A',
        },
        gold: {
          400: '#f5c842',
          500: '#e6b020',
        },
        saffron: {
          500: '#ff6b2b',
          600: '#e85a1b',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'badge-pop': 'badgePop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        badgePop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
