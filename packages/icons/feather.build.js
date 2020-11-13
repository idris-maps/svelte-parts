const fs = require('fs')
const util = require('util')
const path = require('path')

const readdir = util.promisify(fs.readdir)
const read = file => util.promisify(fs.readFile)(file, 'utf-8')
const mkdir = util.promisify(fs.mkdir)
const write = (path, content) => util.promisify(fs.writeFile)(path, content, 'utf-8')

const IN_DIR = path.resolve(__dirname, 'temp', 'feather')
const OUT_DIR = path.resolve(__dirname, 'feather')

const removeExtension = d => d.split('.')[0]
const capitalize = d => d.charAt(0).toUpperCase() + d.slice(1)
const toCamelCase = d => d.split('-')
  .map(capitalize)
  .join('')

const prepareTemplate = async () => {
  const template = await read(path.resolve(__dirname, 'feather.template.html'))
  const [before, after] = template.split('  {{content}}')

  return content => [
    before,
    content,
    after,
  ].join('')
}

const createComponent = template => async fileName => {
  const file = await read(path.resolve(IN_DIR, fileName))
  const content = file.split('\n')
    .filter(d => d.startsWith('  <'))
    .join('\n')
  const name = removeExtension(fileName)
  const camelCaseName = toCamelCase(name)
  const folder = path.resolve(OUT_DIR, name)
  const indexFile = `export { default as default } from './${camelCaseName}.svelte'`

  await mkdir(folder)
  await write(path.resolve(folder, `${camelCaseName}.svelte`), template(content))
  await write(path.resolve(folder, `index.js`), indexFile)

  return undefined
}

const createIndex = fileNames => {
  const names = fileNames.map(d => ({
    cc: toCamelCase(removeExtension(d)),
    d: removeExtension(d),
  }))
  const imports = names
    .map(({ cc, d }) => `import _${cc} from './${d}'`)
    .join('\n')
  
  const exports = names
    .map(({ cc }) => `export const ${cc} = _${cc}`)
    .join('\n')

  const defaultExport = [
    'export default {',
    ...names.map(({cc}) => `  ${cc},`),
    '}',
  ].join('\n')

  const content = [
    imports,
    exports,
    defaultExport,
  ].join('\n\n')

  return write(
    path.resolve(OUT_DIR, 'index.js'),
    content,
  )
}

const run = async () => {
  const template = await prepareTemplate()
  const files = await readdir(IN_DIR)

  await Promise.all(files.map(createComponent(template)))
  await createIndex(files)

  console.log('Done creating feather icons')
}

run()

