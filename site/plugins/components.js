const yaml = require('yaml')
const generateId = require('uuid').v4
const getParts = require('@code-blocks/from-html').default
const R = require('ramda')

const capitalize = d => d.charAt(0).toUpperCase() + d.slice(1)
const toCamelCase = d => d.split('-')
  .map(capitalize)
  .join('')

const partReducer = (result, d) => {
  if (d.type !== 'code' || d.language !== 'comp') {
    return {
      ...result,
      html: result.html + d.content
    }
  }

  const data = parseComp(d.content)

  if (!data.name) {
    return {
      ...result,
      html: result.html + `<pre><code class="language-comp">${d.content}</code></pre>`
    }
  }

  const id = generateId()
  const html = `<div id="${id}" class="${data.className || 'comp'}">${data.fallback || ''}</div>`
  const script = `document.getElementById("${id}").textContent="";${toCamelCase(data.name)}("${id}", ${JSON.stringify(data.props || {})})`
  return {
    ...result,
    html: result.html + html,
    components: R.uniq([...result.components, data.name]),
    scripts: [...result.scripts, script]
  }
}

const parseComp = d => yaml.parse(d)

const transform = content => {
  const parts = getParts(content, ['comp'])
  const { html, components, scripts } = parts.reduce(
    partReducer,
    { html: '', components: [], scripts: [] },
  )
  return [
    html,
    ...components.map(d => `<script src="/js/${d}.js"></script>`),
    ...scripts.map(d => `<script>${d}</script>`),
  ].join('\n')
}

module.exports = eleventyConfig => {
  eleventyConfig.addTransform('components', content => {
    return transform(content)
  })
}
