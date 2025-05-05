
# Exercício 14 - Cálculo do fatorial com `for`

Este repositório contém um programa simples em JavaScript que solicita ao usuário um número e calcula seu fatorial utilizando um laço de repetição `for` e a biblioteca `prompt-sync` para entrada de dados.

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`14.js`)
```javascript

const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número para calcular o fatorial: '));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `14.js`:
```bash

cd \\Dev-Full Stack Jr-T2-praTi-Codifica\\Exercicio-14-praTi-Codifica\\14-Exercicio-Fatorial

```
3. Execute o script com Node.js:
```bash
node 14.js
```

## 📌 Exemplo de execução:

```
Digite um número para calcular o fatorial: 5  
O fatorial de 5 é: 120


```
