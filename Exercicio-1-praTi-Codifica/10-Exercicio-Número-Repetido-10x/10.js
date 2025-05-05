const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número inteiro: '));

for (let i = 1; i <= 10; i++) {
    console.log(`${i}ª vez: ${numero}`);
}
