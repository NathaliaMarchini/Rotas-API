const chalk = require('chalk');
const inquirer = require('inquirer');

// Função para somar dois númros
function somarNumeros(num1, num2){
    return num1 + num2;
}

function main() {
    console.log(chalk.bgRed.white('Olá, seja bem vindo!'));

    // Perguntar ao usuário dois números
    inquirer.prompt([
        {
            name: 'numero1',
            message: 'Digite o primeiro número'
        },
        {
            name: 'numero2',
            message: 'Digite o segundo número'
        },
    ])
    //Promise - JavaScript
    .then((resposta) =>{
        // Converter os números para valoes númericos
        const numero1 = Number(resposta.numero1);
        const numero2 = Number(resposta.numero2);

        // calcular soma
        const resultado = somarNumeros(numero1, numero2);
        
        // Imprimir
        console.log(chalk.bgRed(`A soma de ${numero1} e ${numero2} é ${resultado}`));
    });
};

main();

/* ------------------------------------------------------------------------------------------------ */


