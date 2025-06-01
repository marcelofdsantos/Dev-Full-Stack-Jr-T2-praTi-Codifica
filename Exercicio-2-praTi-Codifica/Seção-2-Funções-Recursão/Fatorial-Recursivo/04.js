const prompt = require('prompt-sync')();

/**
 * Função recursiva para calcular o fatorial de um número n.
 * @param {number} n - Número inteiro não negativo
 * @returns {number} - Fatorial de n
 * @throws {Error} - Se n for negativo
 */
function fatorial(n) {
  // Lança erro se o número for negativo
  if (n < 0) {
    throw new Error('O fatorial não é definido para números negativos.');
  }

  // Caso base: fatorial de 0 é 1
  if (n === 0) {
    return 1;
  }

  // Chamada recursiva: n! = n * (n-1)!
  return n * fatorial(n - 1);
}

// Leitura do número do usuário
const entrada = prompt('Digite um número inteiro não negativo: ');
const numero = parseInt(entrada, 10);

// Tenta calcular e exibir o fatorial
try {
  const resultado = fatorial(numero);
  console.log(`Fatorial de ${numero} é ${resultado}`);
} catch (erro) {
  console.error('Erro:', erro.message);
}
