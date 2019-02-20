const autoprefixer = require('autoprefixer')
const browserslist = require('browserslist')
const path = require('path')
const postCssDiscardDuplicates = require('postcss-discard-duplicates')
const postCssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postCssFocus = require('postcss-focus')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-mdx',
      //options: {
      //  defaultLayouts: { default: path.resolve('./src/components/layout.js') },
      //},
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        constants: path.join(__dirname, 'src/constants'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
        postCssPlugins: [
          autoprefixer({ browsers: browserslist() }),
          postCssDiscardDuplicates(),
          postCssFlexbugsFixes(),
          postCssFocus(),
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}