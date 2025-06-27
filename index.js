import PromptSync from 'prompt-sync';
import chalk from 'chalk';
const prompt = PromptSync()

let nome = prompt("Informe seu nome: ")
console.log(chalk.bgRgb(255,0,110).underline(`Seja bem vindo ${nome}`));