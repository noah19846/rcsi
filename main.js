#!/usr/bin/env node

const fs = require('fs')
const { Command } = require('commander')
const paths = require('./src/paths')
const createRcFiles = require('./src/create-rc-files')

const program = new Command()
const { version } = JSON.parse(
  fs.readFileSync(paths.packageJsonPath).toString()
)

program.version(version)
program.option(
  '-T, --TypeScript',
  'add the the .*rc.yml files of TypeScript version'
)

program.parse(process.argv)

if (program.TypeScript) {
  // TODO: add the the .*rc.yml files of TypeScript version
  console.log('TypeScript')
} else {
  createRcFiles()
}
