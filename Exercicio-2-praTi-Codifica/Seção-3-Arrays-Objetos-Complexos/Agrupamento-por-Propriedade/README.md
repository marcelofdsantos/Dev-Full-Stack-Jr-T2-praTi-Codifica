
# Exercício 8 - Agrupamento por Propriedades

Este script em JavaScript recebe uma lista de vendas (com nome do cliente e total da venda) e utiliza `reduce` para gerar um objeto onde cada chave é um cliente e o valor é a soma de todas as suas vendas.


## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`08.js`)
```javascript
const prompt = require('prompt-sync')(); 

/**
 * Função que agrupa vendas por cliente e soma os totais
 * @param {Array} vendas - Lista de objetos { cliente, total }
 * @returns {Object} - Objeto com { cliente: somaTotal }
 */
function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda;

    // Se o cliente ainda não existe no acumulador, inicializa com 0
    if (!acumulador[cliente]) {
      acumulador[cliente] = 0;
    }

    // Soma o total da venda ao total acumulado do cliente
    acumulador[cliente] += total;

    return acumulador;
  }, {}); // Objeto inicial vazio
}

// Entrada de dados do usuário
const vendas = [];
console.log('Digite as vendas (cliente e total). Digite "fim" para encerrar.');

while (true) {
  const cliente = prompt('Cliente: ');
  if (cliente.toLowerCase() === 'fim') break;

  const total = parseFloat(prompt('Total da venda: '));
  if (isNaN(total)) {
    console.log('Valor inválido. Tente novamente.');
    continue;
  }

  vendas.push({ cliente, total });
}

// Aplica o agrupamento
const resultado = agruparPorCliente(vendas);

// Exibe o resultado
console.log('\nTotais por cliente:');
console.log(resultado);

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `08.js`:
```bash
C:\Users\marcelo\Desktop\Dev-Full Stack Jr-T2-praTi-Codifica\Seção-3-Arrays-Objetos-Complexos\Agrupamento-por-Propriedades

```
3. Execute o script com Node.js:
```bash
node 08.js
```

## 📌 Exemplo de execução:

```
Digite as vendas (cliente e total). Digite "fim" para encerrar.
Cliente: João
Total da venda: 120
Cliente: Ana
Total da venda: 75
Cliente: João
Total da venda: 80
Cliente: fim

Totais por cliente:
{ João: 200, Ana: 75 }

```
