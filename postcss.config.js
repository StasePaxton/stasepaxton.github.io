const jekyllEnv = process.env.JEKYLL_ENV || 'development';

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    '!(_site|node_modules)/**/*.+(html|js|md)',
    '*.html'
  ],

  // This is the function used to extract class names from your templates
  defaultExtractor: content => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    return broadMatches.concat(innerMatches)
  }
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
