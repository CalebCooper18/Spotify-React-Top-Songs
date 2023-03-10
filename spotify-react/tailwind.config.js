/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'spotify-green': '#1DB954',
        'modal-backdrop': '#0901017f'
      }
    },
  },
  plugins: [],
}
