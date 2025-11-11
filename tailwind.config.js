/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Cormorant', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'premium-navy': '#1a365d',
        'premium-green': '#4a7c3c',
        'premium-red': '#e53e3e',
        'premium-cream': '#f8f6f0',
        'premium-gray': '#4a5568',
        'premium-gold': '#d4af37',
      },
    },
  },
  plugins: [],
};
