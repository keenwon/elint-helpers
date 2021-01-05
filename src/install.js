'use strict'

const debug = require('debug')('elint-helpers:install')
const path = require('path')
const fs = require('fs-extra')
const { linterConfigFile } = require('./config')

function install () {
  const cwd = process.cwd()
  let root = cwd.split(`${path.sep}node_modules${path.sep}`)[0]

  if (process.versions.pnp) {
    root = cwd.split(`${path.sep}.yarn${path.sep}`)[0]
  }

  debug(`cwd: ${cwd}`)
  debug(`root: ${root}`)

  const rootName = path.basename(root)

  // 在 preset 开发时跳过安装过程
  if (/^elint-preset-.*/.test(rootName)) {
    console.log(`  find elint preset directory: ${rootName}, skip preset installation`)
    return
  }

  linterConfigFile.forEach(fileName => {
    const from = path.join(cwd, fileName)
    const to = path.join(root, fileName)

    if (!fs.pathExistsSync(from)) {
      return
    }

    fs.copySync(from, to, { overwrite: true })

    console.log(`  move: from "${from}"`)
    console.log(`          to "${to}"`)
  })
}

module.exports = install
