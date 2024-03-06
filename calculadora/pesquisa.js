const chalk = require('chalk');
const inquirer = require('inquirer');

//função principal que executa
function main(){
    console.log("olá")
    console.log(chalk.bgRed.white('Bem vindo ao questionário'));

    //Perguntar ao usuario seu nome
    inquirer.prompt({
        name: 'name',
        message: 'Qual é o seu nome?'
    })
    //Promise - JavaScript
    .then((nomeResponder) =>{
        //Pergunta ao usuário sua idade
        return inquirer.prompt({
            name: 'age', 
            message: 'Quantos anos você tem?'
        })
        .then((idadeResponder)=>{

            //imprimir mensagem na tela
            console.log(chalk.bgRed.black(`Òla ${nomeResponder.name}! você tem ${idadeResponder.age} anos!`))
        })
    })
}

main();