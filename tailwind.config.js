module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gold': '#C39C70',
        'white-smoke': '#F8F8F8',
        'border-gray': '#D2DBe0',
        'good-deeds-blue': {
          '100': '#D6E3F2',
          '500': '#266AB8'
        },
        'good-deeds-gray': {
          '200': '#F6F6F6',
          '300': '#5E6773',
          '500': '#6E7788'
        },
        'good-deeds-green': {
          '100': '#F3F9F3',
          '200': '#98BF98'
        },
        'good-deeds-orange': {
          '400': '#F2513A'
        },
        'good-deeds-red': {
          '100': '#FDE1DD'
        },
        'life-snapshot-blue': {
          '200': '#4283A7',
          '800': '#2E5875'
        },
        'life-snapshot-gray': {
          '100': '#F4F4F4',
          '200': '#E2E8EB'
        }
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
