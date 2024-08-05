module.exports = {
  purge: [],
   purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          'brand-blue': '#1e3a8a',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}