const prompt = require('prompt-sync')();

const a = parseFloat(prompt('Digite o valor do lado A: '));
const b = parseFloat(prompt('Digite o valor do lado B: '));
const c = parseFloat(prompt('Digite o valor do lado C: '));

// Verificar se os valores forma um triângulo
if (a + b > c && a + c > b && b + c > a) {
    console.log("Os valores fornecidos formam um triângulo.");
    
    // Verificar o tipo do triângulo
    if (a === b && b === c) {
        console.log("O triângulo é EQUILÁTERO.");
    } else if (a === b || b === c || a === c) {
        console.log("O triângulo é ISÓSCELES.");
    } else {
        console.log("O triângulo é ESCALENO.");
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.");
}
