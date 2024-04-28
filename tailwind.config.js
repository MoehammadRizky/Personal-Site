/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto", "sans-serif"],
        display: ["DM Serif Display", "sans-serif"]
      },
      colors: {
        'discord': '#5865F2',
      },
    },
  },
  plugins: [],
}

