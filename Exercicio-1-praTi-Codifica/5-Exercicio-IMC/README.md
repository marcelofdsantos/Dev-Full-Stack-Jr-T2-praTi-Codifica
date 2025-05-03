# Exercício 5 - Cálculo do IMC

Este repositório contém um programa em JavaScript que calcula o **Índice de Massa Corporal (IMC)** de uma pessoa e classifica a pessoa em uma das categorias de peso utilizando a estrutura `if-else`. As categorias são:

- **Baixo Peso**: IMC abaixo de 18,5
- **Peso Normal**: IMC entre 18,5 e 24,9
- **Sobrepeso**: IMC entre 25 e 29,9
- **Obesidade**: IMC acima de 30

---

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:

```bash
npm install prompt-sync
```

---

## 📄 Código-fonte (`05.js`)

```javascript
const prompt = require('prompt-sync')();

const peso = parseFloat(prompt('Digite seu peso (em kg): '));
const altura = parseFloat(prompt('Digite sua altura (em metros): '));

const imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log('Você está abaixo do peso.');
} else if (imc >= 18.5 && imc < 24.9) {
    console.log('Você tem peso normal.');
} else if (imc >= 25 && imc < 29.9) {
    console.log('Você está com sobrepeso.');
} else {
    console.log('Você está com obesidade.');
}
```

---

## 🚀 Como executar

1. Abra o prompt de comando (cmd)  
2. Vá até a pasta onde está o arquivo `05.js`:

```bash
cd \Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-5-praTi-Codifica\5-Exercicio-IMC
```

3. Execute o script com Node.js:

```bash
node 05.js
```

---

## 📌 Exemplo de execução:

```bash
Digite seu peso (em kg): 75
Digite sua altura (em metros): 1.75
Seu IMC é: 24.49
Você tem peso normal.
```
