
# Exercício 10 - Repetição de um número 10 vezes

Este repositório contém um programa simples em JavaScript que utiliza a biblioteca `prompt-sync` para ler um número inteiro do usuário e exibi-lo 10 vezes no console utilizando um laço de repetição `for`.

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`10.js`)
```javascript
const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número inteiro: '));

for (let i = 1; i <= 10; i++) {
    console.log(`${i}ª vez: ${numero}`);
}

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `10.js`:
```bash
cd \\Dev-Full Stack Jr-T2-praTi-Codifica\\Exercicio-10-praTi-Codifica\\10-Exercicio-Repeticao

```
3. Execute o script com Node.js:
```bash
node 10.js
```

## 📌 Exemplo de execução:

```
Digite um número inteiro: 7  
1ª vez: 7  
2ª vez: 7  
3ª vez: 7  
...  
10ª vez: 7

```
