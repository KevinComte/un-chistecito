/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: { backgroundColor: theme =>({
      ...theme('colors'),
      // 'primary': '#14151C',
      'primary': 'rgb(15 23 42)',
      // 'secondary': '#3A3B41',
      'secondary': 'rgb(51 65 85)',
      'tertiary': '#FE4583',
      }),
      textColor:{
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#FE4583',
      },
      fontFamily: {
        Bebas: ["Bebas Neue", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },},
  },
  plugins: [],
}

