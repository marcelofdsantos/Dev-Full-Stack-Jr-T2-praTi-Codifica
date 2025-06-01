const prompt = require('prompt-sync')();

// Gera um número aleatório entre 1 e 100 (inclusive)
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let palpite = 0;

console.log('=== Jogo de Adivinhação ===');
console.log('Tente adivinhar o número entre 1 e 100.');

while (palpite !== numeroSecreto) {
  // Pede o palpite do usuário e converte para inteiro
  palpite = parseInt(prompt('Digite seu palpite: '), 10);
  
  // Incrementa o contador de tentativas
  tentativas++;

  // Verifica se a entrada é válida
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    console.log('Por favor, digite um número válido entre 1 e 100.');
    continue; // Volta para o começo do loop sem contar essa tentativa
  }

  // Compara o palpite com o número secreto e dá dicas
  if (palpite < numeroSecreto) {
    console.log('Mais alto! Tente novamente.');
  } else if (palpite > numeroSecreto) {
    console.log('Mais baixo! Tente novamente.');
  } else {
    console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
  }
}
