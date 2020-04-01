const path = require('path')
const process = require('process')
const fs = require('fs')

const packageJsonPath = path.resolve(__dirname, '..', 'package.json')
const rcFilesJsPath = path.resolve(__dirname, '..', 'rc-files-js')
const currentPath = process.cwd()
const USER_HOME = process.env.HOME

const getAppRootPath = currentPath => {
  let possiblePackageJsonPath = path.resolve(currentPath, 'package.json')

  while (!fs.existsSync(possiblePackageJsonPath)) {
    if (currentPath === USER_HOME) {
      throw new Error('package.json file not found')
    }

    currentPath = path.resolve(currentPath, '..')
    possiblePackageJsonPath = path.resolve(currentPath, 'package.json')
  }

  return currentPath
}

module.exports = {
  packageJsonPath,
  rcFilesJsPath,
  currentPath,
  appRootPath: getAppRootPath(currentPath)
}
