/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        laranja: '#E6A76C',
        verde: '#7EAB88',
        laranjaEsc: '#8D5723',
        verdeEsc: '#394D3D',
        verdeMusgo: '#242E26',
        vermelhoEsc: '#8D2D23',
      },
    },
  },
  plugins: [],
}