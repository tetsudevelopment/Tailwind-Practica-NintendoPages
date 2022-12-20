  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme =>({
        'wave-pattern': "url(../img/wave-white.png)",
        'wave-pattern-dots': "url(../img/wave-white-dots.png)",
        'pattern-characters-red':"url(../img/pattern-characters-red.png)",
        'character-mario': "url(../img/character-l.png)",
        'wave-pink': "url(../img/wave-pink.png)",
        'yellow-dots': "url(../img/pattern-yellow-dots.png)",
      }),
      screens:{
        'xsm':'320px',
        'xmd': '450px'
      }
    },
  },
  variants:{
    extends:{},
  },
  plugins: [],
}