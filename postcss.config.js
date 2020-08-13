const jekyllEnv = process.env.JEKYLL_ENV || 'development';

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    '!(_site|node_modules)/**/*.+(html|js|md)',
    '*.html'
  ]
})

const cssnano = require("cssnano")({
  preset: 'default'
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...jekyllEnv != 'development' ? [purgecss, cssnano] : []
  ]
}
