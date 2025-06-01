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
