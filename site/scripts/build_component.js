const util = require('util')
const exec = require('child_process').exec

const run = util.promisify(exec)

const component = process.argv[2]

run(`COMPONENT=${component} npx rollup -c`)
  .then(console.log)
  .catch(console.log)