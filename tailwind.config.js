module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'prisma': ['PRISMA'],
        'avenir400': ['AVENIR400', 'sans-serif'],
        'avenir500': ['AVENIR500', 'sans-serif'],
        'avenir600': ['AVENIR600', 'sans-serif'],
      },
      colors: {
        'beige': '#F6F6F6',
        'darkPink': '#F69AC1',
        'lightPink': '246 154 193 0.5',
        'accentGreen': '#10D94D',
        'accentRed': '#E82223'

      },
      animation: {
        'moveLeft': 'moveLeft 20s linear infinite',
      },
      keyframes: {
        moveLeft: {
          'to': { 'margin-left': '-100%' },
        },
      },
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};