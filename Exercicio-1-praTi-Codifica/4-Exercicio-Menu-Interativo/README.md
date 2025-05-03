# Exercício 4 - Menu Interativo com Switch-Case

Este repositório contém um programa em JavaScript que utiliza a biblioteca `prompt-sync` para criar um **menu interativo no console**, onde o usuário pode escolher entre três opções. A lógica de decisão é implementada com a estrutura `switch-case`.

---

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:

```bash
npm install prompt-sync
```

---

## 📄 Código-fonte (`04.js`)

```javascript
const prompt = require('prompt-sync')();

console.log("==== MENU ====");
console.log("1 - Ver saudação");
console.log("2 - Mostrar data atual");
console.log("3 - Sair");

const opcao = prompt("Escolha uma opção (1, 2 ou 3): ");

switch (opcao) {
    case '1':
        console.log("Olá! Seja bem-vindo ao sistema.");
        break;
    case '2':
        const dataAtual = new Date();
        console.log("Data atual: " + dataAtual.toLocaleString());
        break;
    case '3':
        console.log("Encerrando o programa...");
        break;
    default:
        console.log("Opção inválida. Tente novamente.");
}
```

---

## 🚀 Como executar

1. Abra o prompt de comando (cmd)  
2. Vá até a pasta onde está o arquivo `04.js`:

```bash
cd \Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-4-praTi-Codifica\4-Exercicio-Menu-Switch
```

3. Execute o script com Node.js:

```bash
node 04.js
```

---

## 📌 Exemplo de execução:

```bash
==== MENU ====
1 - Ver saudação
2 - Mostrar data atual
3 - Sair
Escolha uma opção (1, 2 ou 3): 2
Data atual: 03/05/2025 14:22:05
```
