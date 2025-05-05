const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número para ver sua tabuada (de 1 a 10): '));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
