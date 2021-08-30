const chalk = require('chalk')
const fakerDependence = require('faker')

const fakeName = fakerDependence.name.findName()

console.log(chalk.blue.bgRed.bold(`El nombre de la persona es ${fakeName}`))