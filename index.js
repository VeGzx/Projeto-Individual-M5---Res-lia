import chalk from 'chalk'
import readLineSync from 'readline-sync'

const valores = []
let input = ""

while(input != "sair")
{
    valores.push(input)
    input = readLineSync
    .question ("Digite as propriedades do CSS: ")
    .toLocaleLowerCase()
}

console.log(chalk.yellowBright.bgCyan.bold((valores.sort().join('\n'))))