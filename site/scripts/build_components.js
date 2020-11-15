const fs = require('fs')
const util = require('util')
const path = require('path')
const exec = require('child_process').exec

const DIR = path.resolve(__dirname, '..', 'src', '_components')

const readdir = util.promisify(fs.readdir)
const run = util.promisify(exec)
const loop = (i, onEach, arr, cb) =>
  i === arr.length
    ? cb()
    : onEach(arr[i]).then(() => loop(i + 1, onEach, arr, cb))
const runAll = (onEach, arr) =>
  new Promise(resolve => loop(0, onEach, arr, resolve))

const bundle = async component => {
  const { stdout, stderr } = await run(`COMPONENT=${component} npx rollup -c`)
  if (stdout) { console.log(stdout) }
  if (stderr) { console.log(stderr) }
  return
}

const main = async () => {
  const components = await readdir(DIR)
  await runAll(bundle, components)
}

main()