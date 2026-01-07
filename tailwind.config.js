/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        pulseHeart: {
          '0%, 100%': { transform: 'scale(1)' },
          '20%': { transform: 'scale(1.05)' },
          '40%': { transform: 'scale(1)' },
          '60%': { transform: 'scale(1.08)' },
          '80%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'pulse-heart': 'pulseHeart 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
