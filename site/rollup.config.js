import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'

// https://github.com/rollup/rollup/issues/703 for bundling multiple files
const component = process.env.COMPONENT
if (!component || component === '') {
  throw new Error('No component name was specified')
}

const capitalize = d => d.charAt(0).toUpperCase() + d.slice(1)
const toCamelCase = d => d.split('-')
  .map(capitalize)
  .join('')

export default {
  input: `src/_components/${component}/index.ts`,
  output: {
    sourcemap: false,
    format: 'iife',
    name: toCamelCase(component),
    file: `dist/${component}.js`
  },
  plugins: [
    svelte({
      dev: false,
      preprocess: sveltePreprocess(),
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),
    typescript({
      sourceMap: false,
      inlineSources: false,
    }),
    terser(),
  ],
}