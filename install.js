'use strict'

const debug = require('debug')('elint-helpers:install')
const path = require('path')
const fs = require('fs-extra')
const { linterConfigFile } = require('./config')

function install () {
  const cwd = process.cwd()
  const root = cwd.split(`${path.sep}node_modules${path.sep}`)[0]

  debug(`cwd: ${cwd}`)
  debug(`root: ${root}`)

  linterConfigFile.forEach(fileName => {
    const from = path.join(cwd, fileName)
    const to = path.join(root, fileName)

    if (!fs.pathExistsSync(from)) {
      return
    }

    fs.moveSync(from, to, { overwrite: true })

    console.log(`  move: from "${from}"`)
    console.log(`          to "${to}"`)
  })
}

module.exports = install
