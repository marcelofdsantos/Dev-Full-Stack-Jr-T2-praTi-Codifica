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
