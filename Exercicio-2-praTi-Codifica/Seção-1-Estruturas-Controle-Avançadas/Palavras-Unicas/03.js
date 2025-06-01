const prompt = require('prompt-sync')();

// Solicita a frase do usuário
const frase = prompt('Digite uma frase: ');

// Divide a frase em palavras (separadas por espaços)
const palavras = frase.split(' ');

// Array para armazenar palavras únicas
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
  let palavraAtual = palavras[i];
  let contador = 0;

  // Conta quantas vezes a palavra atual aparece na frase
  for (let j = 0; j < palavras.length; j++) {
    if (palavras[j] === palavraAtual) {
      contador++;
    }
  }

  // Se apareceu só uma vez, adiciona ao array de únicas (e ainda não está nele)
  if (contador === 1) {
    unicas.push(palavraAtual);
  }
}

// Exibe o resultado
console.log('Palavras únicas:', unicas);
