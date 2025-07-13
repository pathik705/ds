/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'walmart-blue': '#0071CE',
        'walmart-yellow': '#FFC220',
      },
      fontFamily: {
        'walmart': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}