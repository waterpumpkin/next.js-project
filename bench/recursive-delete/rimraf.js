const { join } = require('path')
const { promisify } = require('util')
const rimrafMod = require('rimraf')
const resolveDataDir = join(__dirname, `fixtures-${process.argv[2]}`, '**/*')
const rimraf = promisify(rimrafMod)
// how to deal with async functions

async function test() {
  const time = process.hrtime()
  await rimraf(resolveDataDir)

  const hrtime = process.hrtime(time)
  const nanoseconds = hrtime[0] * 1e9 + hrtime[1]
  const milliseconds = nanoseconds / 1e6
  console.log(milliseconds)
}

test();
