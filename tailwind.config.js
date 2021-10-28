// tailwind.config.js
module.exports = {
  mode: 'jit',

  purge: { content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], safelist: ['bg-alpha', 'bg-beta', 'bg-gamma', 'bg-delta', 'bg-jota'] },

  darkMode: 'media', // or 'class'

  theme: {
    extend: {
      fontFamily: { atkinson: ['Atkinson Hyperlegible', 'sans-serif'], },
      colors: {
        alpha: '#E57661', beta: '#8ED0B2', gamma: '#F8C567', delta: '#5789A3', jota: '#EF6D81',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit,minmax(48px,1fr))',
        'auto-fill': 'repeat(auto-fill,minmax(48px,1fr))',

      },
    },
    scale: {
      300: '3',
      1100: "11",
    },
  },


  variants: {
    extend: {},
  },

  plugins: [],
}