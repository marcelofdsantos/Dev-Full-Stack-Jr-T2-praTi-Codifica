const prompt = require('prompt-sync')();

/**
 * Função que retorna uma versão memoizada da função fornecida
 * @param {Function} fn - Função original a ser memoizada
 * @returns {Function} - Função com cache interno
 */
function memoize(fn) {
  const cache = {}; // Armazena resultados anteriores

  return function (...args) {
    const key = JSON.stringify(args); // Cria chave única para os argumentos

    if (cache.hasOwnProperty(key)) {
      console.log('🧠 Resultado obtido do cache para:', key);
      return cache[key];
    }

    const resultado = fn.apply(this, args); // Calcula resultado normalmente
    cache[key] = resultado; // Armazena no cache
    return resultado;
  };
}

/**
 * Função recursiva para calcular o n-ésimo número de Fibonacci
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Cria versão memoizada de Fibonacci
const fibonacciMemo = memoize(fibonacci);

// Lê número do usuário
const entrada = prompt('Digite um número inteiro para calcular o Fibonacci: ');
const numero = parseInt(entrada, 10);

if (isNaN(numero) || numero < 0) {
  console.log('Por favor, insira um número inteiro válido não negativo.');
} else {
  // Calcula e exibe o resultado
  const resultado = fibonacciMemo(numero);
  console.log(`Fibonacci(${numero}) = ${resultado}`);

  // Testa repetição para mostrar o uso do cache
  console.log('\nTestando novamente com o mesmo número...');
  const resultado2 = fibonacciMemo(numero);
  console.log(`Fibonacci(${numero}) (do cache) = ${resultado2}`);
}
