// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite um número inteiro
const numero = parseInt(prompt("Digite um número inteiro: "));

// Verifica se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}