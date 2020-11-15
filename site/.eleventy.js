const componentsPlugin = require('./plugins/components')
const cleanCSS = require('clean-css')
const codeblocks = require('@code-blocks/eleventy-plugin')
const prism = require('@code-blocks/prism')

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(componentsPlugin)
  eleventyConfig.addPlugin(codeblocks([prism]))
  eleventyConfig.addFilter('cssmin', function(code) {
    return new cleanCSS({}).minify(code).styles
  })
}