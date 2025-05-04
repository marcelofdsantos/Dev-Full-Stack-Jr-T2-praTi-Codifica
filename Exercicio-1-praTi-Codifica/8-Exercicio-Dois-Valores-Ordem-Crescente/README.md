
# Exercício 8 - Ordenação de dois valores

Este repositório contém um programa simples em JavaScript que utiliza a biblioteca `prompt-sync` para ler dois valores distintos do usuário e exibi-los em ordem crescente.

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`08.js`)
```javascript
const prompt = require('prompt-sync')();

const valor1 = parseFloat(prompt('Digite o primeiro valor: '));
const valor2 = parseFloat(prompt('Digite o segundo valor: '));

if (valor1 === valor2) {
    console.log("Os valores não podem ser iguais.");
} else if (valor1 < valor2) {
    console.log(`Ordem crescente: ${valor1}, ${valor2}`);
} else {
    console.log(`Ordem crescente: ${valor2}, ${valor1}`);
}
```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `08.js`:
```bash
cd \Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-7-praTi-Codifica\8-Exercicio-Ordem
```
3. Execute o script com Node.js:
```bash
node 08.js
```

## 📌 Exemplo de execução:

```
Digite o primeiro valor: 15
Digite o segundo valor: 9
Ordem crescente: 9, 15
```
