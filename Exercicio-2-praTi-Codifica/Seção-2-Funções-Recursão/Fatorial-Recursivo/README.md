
# Exercício 4 - Fatorial Recursivo

Este repositório contém um programa em JavaScript que implementa uma função `fatorial(n)` de forma recursiva. A função trata os seguintes casos:

- Se `n < 0`, lança um erro.
- Se `n === 0`, retorna 1 (caso base).
- Caso contrário, retorna `n * fatorial(n - 1)`.

O programa lê um número inteiro do usuário utilizando a biblioteca `prompt-sync`.

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`04.js`)
```javascript
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

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `04.js`:
```bash
C:\Users\marcelo\Desktop\Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-2-praTi-Codifica\Seção-2-Funções-Recursão\Fatorial-Recursivo
```
3. Execute o script com Node.js:
```bash
node 04.js
```

## 📌 Exemplo de execução:

```
Digite um número inteiro não negativo: 5  
Fatorial de 5 é 120 

Ou, em caso de entrada inválida: 

Digite um número inteiro não negativo: -3  
Erro: O fatorial não é definido para números negativos.

```
