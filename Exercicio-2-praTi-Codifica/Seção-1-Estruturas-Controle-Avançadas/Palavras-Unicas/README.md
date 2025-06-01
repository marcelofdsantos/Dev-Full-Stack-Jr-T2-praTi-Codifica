
# Exercício 3 - Palavras Únicas

Este repositório contém um programa em JavaScript que utiliza a biblioteca `prompt-sync` para ler uma frase digitada pelo usuário, identificar e exibir as palavras que aparecem apenas uma vez na frase. O algoritmo utiliza estruturas `if/else` e `for` para realizar a contagem e filtragem.

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```
## 📄 Código-fonte (`03.js`)

```javascript
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

  // Se apareceu só uma vez, adiciona ao array de únicas
  if (contador === 1) {
    unicas.push(palavraAtual);
  }
}

// Exibe o resultado
console.log('Palavras únicas:', unicas);

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `03.js`:
```bash
C:\Users\marcelo\Desktop\Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-2-praTi-Codifica\Seção-1-Estruturas-Controle-Avançadas\Palavras-Unicas

```
3. Execute o script com Node.js:
```bash
node 03.js
```

## 📌 Exemplo de execução:

```
Digite uma frase: olá mundo olá javascript
Palavras únicas: [ 'mundo', 'javascript' ]

```
