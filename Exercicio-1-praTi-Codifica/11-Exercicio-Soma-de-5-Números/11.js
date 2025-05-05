const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 1; i <= 5; i++) {
    const numero = parseFloat(prompt(`Digite o ${i}º número: `));
    soma += numero;
}

console.log(`A soma total dos 5 números é: ${soma}`);
