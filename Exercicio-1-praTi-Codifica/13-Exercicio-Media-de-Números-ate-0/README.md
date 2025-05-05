
# Exercício 13 - Média de números decimais até digitar 0

Este repositório contém um programa em JavaScript que solicita números decimais do usuário até que ele digite 0 e, ao final, calcula a média aritmética desses números. Foi utilizada a biblioteca `prompt-sync` para entrada de dados e um laço `do...while`.

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`13.js`)
```javascript

const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;
let numero;

do {
    numero = parseFloat(prompt('Digite um número decimal (0 para sair): '));
    if (numero !== 0) {
        soma += numero;
        contador++;
    }
} while (numero !== 0);

if (contador > 0) {
    const media = soma / contador;
    console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);
} else {
    console.log('Nenhum número foi digitado.');
}

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `13.js`:
```bash

cd \\Dev-Full Stack Jr-T2-praTi-Codifica\\Exercicio-13-praTi-Codifica\\13-Exercicio-Media-Decimais

```
3. Execute o script com Node.js:
```bash
node 13.js
```

## 📌 Exemplo de execução:

```
Digite um número decimal (0 para sair): 4.5  
Digite um número decimal (0 para sair): 3.5  
Digite um número decimal (0 para sair): 2  
Digite um número decimal (0 para sair): 0  
A média aritmética dos números digitados é: 3.33


```
