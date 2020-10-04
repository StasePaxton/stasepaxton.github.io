module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gold': '#C39C70',
        'white-smoke': '#F8F8F8',
        'border-gray': '#D2DBe0',
        'life-snapshot-blue': {
          '200': '#4283A7',
          '800': '#2E5875'
        },
        'life-snapshot-gray': {
          '100': '#F4F4F4',
          '200': '#E2E8EB'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
