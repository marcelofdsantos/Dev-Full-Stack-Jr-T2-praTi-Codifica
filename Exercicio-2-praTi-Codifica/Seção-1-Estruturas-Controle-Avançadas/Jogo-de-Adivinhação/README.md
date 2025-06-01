
# Exercício 2 - Jogo de Adivinhação

Este repositório contém um programa em JavaScript que utiliza a biblioteca `prompt-sync` para criar um jogo de adivinhação. O script gera um número aleatório entre 1 e 100 e pede ao usuário para tentar adivinhar. A cada palpite incorreto, o programa informa se o número secreto é mais alto ou mais baixo, repetindo até o usuário acertar. Também conta o número de tentativas feitas.

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`02.js`)
```javascript

const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let palpite = 0;

console.log('=== Jogo de Adivinhação ===');
console.log('Tente adivinhar o número entre 1 e 100.');

while (palpite !== numeroSecreto) {
  palpite = parseInt(prompt('Digite seu palpite: '), 10);
  tentativas++;

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    console.log('Por favor, digite um número válido entre 1 e 100.');
    continue;
  }

  if (palpite < numeroSecreto) {
    console.log('Mais alto! Tente novamente.');
  } else if (palpite > numeroSecreto) {
    console.log('Mais baixo! Tente novamente.');
  } else {
    console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
  }
}

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `02.js`:
```bash
C:\Users\marcelo\Desktop\Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-2-praTi-Codifica\Seção-1-Estruturas-Controle-Avançadas\Jogo-de-Adivinhação

```
3. Execute o script com Node.js:
```bash
node 02.js
```

## 📌 Exemplo de execução:

```
=== Jogo de Adivinhação ===
Tente adivinhar o número entre 1 e 100.
Digite seu palpite: 50
Mais alto! Tente novamente.
Digite seu palpite: 75
Mais baixo! Tente novamente.
Digite seu palpite: 63
Mais alto! Tente novamente.
Digite seu palpite: 69
Parabéns! Você acertou o número em 4 tentativas.

```
