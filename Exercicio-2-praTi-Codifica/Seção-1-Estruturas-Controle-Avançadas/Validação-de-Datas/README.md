
# Exercício 1 - Validação de Datas

Este repositório contém um programa em JavaScript que utiliza a biblioteca `prompt-sync` para ler do usuário o dia, mês e ano e verificar se a data informada é válida. A validação considera os dias corretos para cada mês e o ano bissexto para o mês de fevereiro.


## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`01.js`)
```javascript
const prompt = require('prompt-sync')();

/**
 * Função que verifica se uma data é válida considerando:
 * - dias corretos para cada mês
 * - anos bissextos para fevereiro
 * 
 * @param {number} dia - Dia do mês
 * @param {number} mes - Mês do ano (1 a 12)
 * @param {number} ano - Ano (positivo)
 * @returns {boolean} - true se a data for válida, false caso contrário
 */
function ehDataValida(dia, mes, ano) {
  if (
    !Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano) ||
    dia <= 0 || mes <= 0 || ano <= 0
  ) {
    return false;
  }

  if (mes < 1 || mes > 12) {
    return false;
  }

  function ehBissexto(ano) {
    return (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);
  }

  const diasNoMes = [
    31,
    ehBissexto(ano) ? 29 : 28,
    31,30,31,30,31,31,30,31,30,31
  ];

  if (dia > diasNoMes[mes - 1]) {
    return false;
  }

  return true;
}

const dia = parseInt(prompt('Digite o dia: '), 10);
const mes = parseInt(prompt('Digite o mês: '), 10);
const ano = parseInt(prompt('Digite o ano: '), 10);

if (ehDataValida(dia, mes, ano)) {
  console.log('Data válida!');
} else {
  console.log('Data inválida!');
}

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `01.js`:
```bash
C:\Users\marcelo\Desktop\Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-2-praTi-Codifica\Seção-1-Estruturas-Controle-Avançadas\Validação-de-Datas

```
3. Execute o script com Node.js:
```bash
node 01.js
```

## 📌 Exemplo de execução:

```
Digite o dia: 29
Digite o mês: 2
Digite o ano: 2024
Data válida!

Digite o dia: 31
Digite o mês: 4
Digite o ano: 2023
Data inválida!

```
