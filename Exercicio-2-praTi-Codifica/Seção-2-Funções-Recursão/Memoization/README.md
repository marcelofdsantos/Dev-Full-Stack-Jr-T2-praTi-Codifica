
# Exercício 6 - Memoization

Este repositório contém um programa em JavaScript que implementa a função `memoize(fn)`, usada para armazenar em cache os resultados de chamadas anteriores de uma função com base nos argumentos. O exemplo principal aplica memoization à função `fibonacci(n)` para otimizar o desempenho.


## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`06.js`)
```javascript
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

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `06.js`:
```bash
C:\Users\marcelo\Desktop\Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-2-praTi-Codifica\Seção-2-Funções-Recursão\Memoization

```
3. Execute o script com Node.js:
```bash
node 06.js
```

## 📌 Exemplo de execução:

```
Digite um número inteiro para calcular o Fibonacci: 10  
Fibonacci(10) = 55

Testando novamente com o mesmo número...
🧠 Resultado obtido do cache para: [10]
Fibonacci(10) (do cache) = 55
```
