/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '500px'}, // Custom breakpoint below 350px
        'xxl':{'max':'1500px'}
      },
      colors:{
        'darkGray':'#001f3f',
        'customWhite':'#ffffff',
        'grey':"#b3cde0"
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'], // Set Poppins as the default sans-serif font
      },
    },
  },
  plugins: [],
}