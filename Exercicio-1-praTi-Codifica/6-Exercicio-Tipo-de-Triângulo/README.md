
# Exercício 6 - Verifique se três lados formam um triângulo e identifique seu tipo

Este repositório contém um programa simples em JavaScript que utiliza a biblioteca `prompt-sync` para ler três valores numéricos do usuário e verificar se eles podem formar um triângulo. Se sim, o programa identifica se o triângulo é **equilátero**, **isósceles** ou **escaleno**, utilizando estruturas de controle `if`.

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`06.js`)
```javascript
const prompt = require('prompt-sync')();

const a = parseFloat(prompt('Digite o valor do lado A: '));
const b = parseFloat(prompt('Digite o valor do lado B: '));
const c = parseFloat(prompt('Digite o valor do lado C: '));

if (a + b > c && a + c > b && b + c > a) {
    console.log("Os valores fornecidos formam um triângulo.");

    if (a === b && b === c) {
        console.log("O triângulo é EQUILÁTERO.");
    } else if (a === b || b === c || a === c) {
        console.log("O triângulo é ISÓSCELES.");
    } else {
        console.log("O triângulo é ESCALENO.");
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.");
}
```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `06.js`:
```bash
cd \Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-6-praTi-Codifica\6-Exercicio-Triangulo
```
3. Execute o script com Node.js:
```bash
node 06.js
```

## 📌 Exemplo de execução:

```
Digite o valor do lado A: 5  
Digite o valor do lado B: 5  
Digite o valor do lado C: 8  
Os valores fornecidos formam um triângulo.  
O triângulo é ISÓSCELES.
```
