const prompt = require('prompt-sync')();

const quantidade = parseInt(prompt('Digite a quantidade de maçãs compradas: '));

let precoUnitario;
if (quantidade < 12) {
    precoUnitario = 0.30;
} else {
    precoUnitario = 0.25;
}

const total = quantidade * precoUnitario;

console.log(`O valor total da compra é R$ ${total.toFixed(2)}.`);
