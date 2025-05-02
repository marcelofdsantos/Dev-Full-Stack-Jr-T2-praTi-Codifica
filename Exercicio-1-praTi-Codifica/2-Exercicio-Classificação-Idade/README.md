## Exercício 2 - Classificar Idade

Este repositório contém um programa simples em JavaScript que utiliza a biblioteca prompt-sync para ler a idade de uma pessoa e classificá-la como criança, adolescente, adulto ou idoso, utilizando uma estrutura de controle if-else.

📋 Requisitos  
Node.js instalado  
Biblioteca prompt-sync instalada:
```bash
npm install prompt-sync
```

📄 Código-fonte (`02.js`)
```javascript
const prompt = require('prompt-sync')();

const idade = parseInt(prompt('Digite sua idade: '));

if (idade >= 0 && idade <= 12) {
    console.log("Você é uma CRIANÇA.");
} else if (idade >= 13 && idade <= 17) {
    console.log("Você é um ADOLESCENTE.");
} else if (idade >= 18 && idade <= 59) {
    console.log("Você é um ADULTO.");
} else if (idade >= 60) {
    console.log("Você é um IDOSO.");
} else {
    console.log("Idade inválida.");
}
```

🚀 Como executar  
Abra o prompt de comando (cmd)  
Digite o caminho completo até a pasta onde está o arquivo `02.js`:
```bash
cd \Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-2-praTi-Codifica\2-Exercicio-Classificacao-Idade
```
Execute o script com Node.js:
```bash
node 02.js
```

📌 Exemplo de execução:
```
Digite sua idade: 60
Você é um IDOSO.
```