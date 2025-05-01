
# Exercício 1 - Verificar se um número é Par ou Ímpar

Este repositório contém um programa simples em **JavaScript** que utiliza a biblioteca [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) para ler um número do usuário e verifica se ele é **par** ou **ímpar**, utilizando uma estrutura de controle `if`.

## 📋 Requisitos

- [Node.js](https://nodejs.org/) instalado
- Biblioteca `prompt-sync` instalada:

```bash
npm install prompt-sync
```

## 📄 Código-fonte (`01.js`)

```javascript
const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número inteiro: '));

if (numero % 2 === 0) {
    console.log(`O número ${numero} é PAR.`);
} else {
    console.log(`O número ${numero} é ÍMPAR.`);
}
```

## 🚀 Como executar

1. **Abra o Prompt de Comando (cmd)**

2. **Digite o caminho completo até a pasta onde está o arquivo `01.js`:**

```cmd
cd \Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-1-praTi-Codifica\1-Exercicio-Par-ou-Impar
```

3. **Execute o script com Node.js:**

```cmd
node 01.js
```

---

📌 Exemplo de execução:

```
Digite um número inteiro: 7
O número 7 é ÍMPAR.
```




