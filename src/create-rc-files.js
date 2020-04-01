const execa = require('execa')
const path = require('path')
const { rcFilesJsPath, appRootPath } = require('./paths')

const eslintDeps = ['eslint']
const prettierRelatedDeps = [
  'prettier',
  'eslint-config-prettier',
  'eslint-plugin-prettier'
]
const huskyDeps = ['husky']
const lintStagedDeps = ['lint-staged']

async function cpFiles() {
  await execa('cp', ['-r', `${rcFilesJsPath}${path.sep}.`, appRootPath])
  console.log('.*rc filed created.')
}

async function installDeps() {
  await execa('npm', [
    'install',
    '-D',
    ...eslintDeps,
    ...prettierRelatedDeps,
    ...huskyDeps,
    ...lintStagedDeps
  ])
  console.log('realted dependencies installed.')
}

module.exports = async function createRcFiles() {
  await cpFiles()
  await installDeps()
}
