
# Exercício 15 - Sequência de Fibonacci com `for`

Este repositório contém um programa em JavaScript que imprime os 10 primeiros números da sequência de Fibonacci utilizando um laço de repetição `for`.

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`15.js`)
```javascript

let a = 0;
let b = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
}

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `15.js`:
```bash

cd \\Dev-Full Stack Jr-T2-praTi-Codifica\\Exercicio-15-praTi-Codifica\\15-Exercicio-Fibonacci

```
3. Execute o script com Node.js:
```bash
node 15.js
```

## 📌 Exemplo de execução:

```
Os 10 primeiros números da sequência de Fibonacci:
0
1
1
2
3
5
8
13
21
34

```
