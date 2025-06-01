
# Exercício 7 - Mapeamento e Ordenação

Este programa em JavaScript recebe uma lista de produtos (nome e preço), e retorna um novo array contendo apenas os nomes dos produtos ordenados por preço crescente. Utiliza os métodos `map` e `sort`.


## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`07.js`)
```javascript
const prompt = require('prompt-sync')();

/**
 * Função que recebe um array de produtos e retorna os nomes
 * ordenados por preço crescente.
 * @param {Array} produtos - Array de objetos com { nome, preco }
 * @returns {Array} - Array de nomes ordenados
 */
function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice() // Faz uma cópia para não alterar o original
    .sort((a, b) => a.preco - b.preco) // Ordena por preço crescente
    .map(produto => produto.nome);    // Retorna apenas os nomes
}

// Leitura de dados do usuário
const produtos = [];
console.log('Digite os produtos (nome e preço). Digite "fim" para encerrar.');

while (true) {
  const nome = prompt('Nome do produto: ');
  if (nome.toLowerCase() === 'fim') break;

  const preco = parseFloat(prompt('Preço: '));
  if (isNaN(preco)) {
    console.log('Preço inválido. Tente novamente.');
    continue;
  }

  produtos.push({ nome, preco });
}

// Exibe o resultado
const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
console.log('\nProdutos ordenados por preço (nomes):');
console.log(nomesOrdenados);

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `07.js`:
```bash
C:\Users\marcelo\Desktop\Dev-Full Stack Jr-T2-praTi-Codifica\Seção-3-Arrays-Objetos-Complexos\Mapeamento-e-Ordenação
```
3. Execute o script com Node.js:
```bash
node 07.js
```

## 📌 Exemplo de execução:

```
Digite os produtos (nome e preço). Digite "fim" para encerrar.
Nome do produto: Arroz
Preço: 6.5
Nome do produto: Feijão
Preço: 5.2
Nome do produto: Óleo
Preço: 8.0
Nome do produto: fim

Produtos ordenados por preço (nomes):
[ 'Feijão', 'Arroz', 'Óleo' ]

```
