module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['active'],
      width: ['group-hover'],
      height: ['group-hover'],
      boxShadow: ['active'],
      textColor: ['active'],
    }
  },
  plugins: [],
}


