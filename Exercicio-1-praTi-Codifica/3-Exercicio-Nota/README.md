# Exercício 3 - Classificar Nota

Este repositório contém um programa simples em JavaScript que utiliza a biblioteca `prompt-sync` para ler uma nota de 0 a 10 e classificá-la como **Aprovado**, **Recuperação** ou **Reprovado**, utilizando uma estrutura de controle `if-else if`.

---

## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:

```bash
npm install prompt-sync
```

---

## 📄 Código-fonte (`03.js`)

```javascript
const prompt = require('prompt-sync')();

let nota = parseFloat(prompt('Digite a nota (0 a 10): '));

if (nota < 0 || nota > 10) {
    console.log('Nota inválida. Digite um valor entre 0 e 10.');
} else if (nota >= 7) {
    console.log('Aprovado');
} else if (nota >= 5) {
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}
```

---

## 🚀 Como executar

1. Abra o prompt de comando (cmd)  
2. Digite o caminho completo até a pasta onde está o arquivo `03.js`:

```bash
cd \Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-3-praTi-Codifica\3-Exercicio-Classificacao-Nota
```

3. Execute o script com Node.js:

```bash
node 03.js
```

---

## 📌 Exemplo de execução:

```bash
Digite a nota (0 a 10): 6.5
Recuperação
```
