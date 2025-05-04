
# Exercício 7 - Cálculo do valor total da compra de maçãs

Este repositório contém um programa simples em JavaScript que utiliza a biblioteca `prompt-sync` para ler a quantidade de maçãs compradas, e calcular o valor total da compra com base no preço unitário. O preço depende da quantidade comprada:

- R$ 0,30 por maçã se forem compradas menos de 12 unidades  
- R$ 0,25 por maçã se forem compradas 12 ou mais unidades

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`07.js`)
```javascript
const prompt = require('prompt-sync')();

const quantidade = parseInt(prompt('Digite a quantidade de maçãs compradas: '));

let precoUnitario;
if (quantidade < 12) {
    precoUnitario = 0.30;
} else {
    precoUnitario = 0.25;
}

const total = quantidade * precoUnitario;

console.log(`O valor total da compra é R$ ${total.toFixed(2)}.`);
```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `07.js`:
```bash
cd \Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-7-praTi-Codifica\7-Exercicio-Macas
```
3. Execute o script com Node.js:
```bash
node 07.js
```

## 📌 Exemplo de execução:

```
Digite a quantidade de maçãs compradas: 10  
O valor total da compra é R$ 3.00.
```
```
Digite a quantidade de maçãs compradas: 12  
O valor total da compra é R$ 3.00.
```
