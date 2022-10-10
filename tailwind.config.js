const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        bungee: 'Bungee, cursive',
        deepShadow: 'DeepShadow',
        jacquesFrancoisShadow: 'JacquesFrancoisShadow',
      },
    },
  },
  plugins: [],
}
