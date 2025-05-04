const prompt = require('prompt-sync')();

const valor1 = parseFloat(prompt('Digite o primeiro valor: '));
const valor2 = parseFloat(prompt('Digite o segundo valor: '));

if (valor1 === valor2) {
    console.log("Os valores não podem ser iguais.");
} else if (valor1 < valor2) {
    console.log(`Ordem crescente: ${valor1}, ${valor2}`);
} else {
    console.log(`Ordem crescente: ${valor2}, ${valor1}`);
}