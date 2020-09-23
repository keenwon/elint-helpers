'use strict'

const debug = require('debug')('elint-helpers:install')
const path = require('path')
const fs = require('fs-extra')
const { linterConfigFile } = require('./config')

debug('run install')

const cwd = process.env.INIT_CWD
const root = cwd.split('/node_modules/')[0]

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
