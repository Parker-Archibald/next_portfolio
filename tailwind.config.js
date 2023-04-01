/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: '',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        homePic: "url('../styles/Pictures/HomePic.jpg')",
        aboutMePic: "url('../styles/Pictures/AboutMePic.jpg')"
      }),
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
