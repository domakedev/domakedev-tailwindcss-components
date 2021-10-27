module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      Primary: ['"Roboto"', "sans-serif"],
      Secondary: ['"Qahiri"', "sans-serif"],
     }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['active'],
      width: ['group-hover'],
      height: ['group-hover'],
      boxShadow: ['active'],
      textColor: ['active'],
      borderColor: ['active','focus'],
      ringColor: ['focus'],
      borderStyle: ['hover', 'focus','active'],
      borderWidth: ['hover', 'focus','active','visited','focus-within'],
    }
  },
  plugins: [],
}


