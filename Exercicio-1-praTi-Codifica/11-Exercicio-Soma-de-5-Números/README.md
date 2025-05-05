
# Exercício 11 - Soma de 5 números com `for`

Este repositório contém um programa em JavaScript que solicita ao usuário 5 números e calcula a soma total, utilizando um laço de repetição `for` e a biblioteca `prompt-sync` para entrada de dados.

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`11.js`)
```javascript
const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 1; i <= 5; i++) {
    const numero = parseFloat(prompt(`Digite o ${i}º número: `));
    soma += numero;
}

console.log(`A soma total dos 5 números é: ${soma}`);

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `11.js`:
```bash
cd \\Dev-Full Stack Jr-T2-praTi-Codifica\\Exercicio-11-praTi-Codifica\\11-Exercicio-Soma

```
3. Execute o script com Node.js:
```bash
node 11.js
```

## 📌 Exemplo de execução:

```
Digite o 1º número: 5  
Digite o 2º número: 3  
Digite o 3º número: 7  
Digite o 4º número: 2  
Digite o 5º número: 8  
A soma total dos 5 números é: 25


```
