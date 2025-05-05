
# Exercício 12 - Tabuada com `for`

Este repositório contém um programa simples em JavaScript que solicita ao usuário um número e exibe a sua tabuada de multiplicação (de 1 a 10) utilizando um laço de repetição `for` e a biblioteca `prompt-sync` para entrada de dados.

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync

```

## 📄 Código-fonte (`12.js`)
```javascript

const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número para ver sua tabuada (de 1 a 10): '));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}


```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `12.js`:
```bash
cd \\Dev-Full Stack Jr-T2-praTi-Codifica\\Exercicio-12-praTi-Codifica\\12-Exercicio-Tabuada

```
3. Execute o script com Node.js:
```bash
node 12.js
```

## 📌 Exemplo de execução:

```
Digite um número para ver sua tabuada (de 1 a 10): 5  
5 x 1 = 5  
5 x 2 = 10  
5 x 3 = 15  
5 x 4 = 20  
5 x 5 = 25  
5 x 6 = 30  
5 x 7 = 35  
5 x 8 = 40  
5 x 9 = 45  
5 x 10 = 50

```
