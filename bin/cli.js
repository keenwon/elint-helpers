#!/usr/bin/env node

'use strict'

/**
 * cli
 */

const debug = require('debug')('elint-helpers:cli')
const program = require('commander')
const { description } = require('../package.json')
const install = require('../install')

debug('process.argv: %o', process.argv)

program
  .usage('[command] [options]')
  .description(description)
  .storeOptionsAsProperties(true)

/**
 * install preset
 */
program
  .command('install')
  .description('install preset')
  .action(() => {
    debug('run install...')
    install()
  })

if (!process.argv.slice(2).length) {
  program.outputHelp()
  process.exit(0)
}

program.parse(process.argv)
