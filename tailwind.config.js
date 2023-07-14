/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dblue': '#006994',
        'dgray':'#e5e7eb9f'
      },
    },
  },
  plugins: [],
}

