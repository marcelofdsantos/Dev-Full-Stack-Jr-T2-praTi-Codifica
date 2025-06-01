const prompt = require('prompt-sync')();

/**
 * Converte um array de pares [[chave, valor], ...] em um objeto
 * @param {Array} pares
 * @returns {Object}
 */
function paresParaObjeto(pares) {
  const obj = {};
  for (const [chave, valor] of pares) {
    obj[chave] = valor;
  }
  return obj;
}

/**
 * Converte um objeto em array de pares [[chave, valor], ...]
 * @param {Object} obj
 * @returns {Array}
 */
function objetoParaPares(obj) {
  const pares = [];
  for (const chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}

// Menu simples para o usuário
console.log('Escolha uma operação:');
console.log('1 - Converter pares para objeto');
console.log('2 - Converter objeto para pares');
const opcao = prompt('Digite 1 ou 2: ');

if (opcao === '1') {
  // Entrada de pares
  const pares = [];
  console.log('Digite pares [chave, valor]. Digite "fim" como chave para encerrar.');

  while (true) {
    const chave = prompt('Chave: ');
    if (chave.toLowerCase() === 'fim') break;

    const valor = prompt('Valor: ');
    pares.push([chave, valor]);
  }

  const obj = paresParaObjeto(pares);
  console.log('\nObjeto gerado a partir dos pares:');
  console.log(obj);

} else if (opcao === '2') {
  // Entrada de objeto
  const obj = {};
  console.log('Digite propriedades do objeto. Digite "fim" como chave para encerrar.');

  while (true) {
    const chave = prompt('Chave: ');
    if (chave.toLowerCase() === 'fim') break;

    const valor = prompt('Valor: ');
    obj[chave] = valor;
  }

  const pares = objetoParaPares(obj);
  console.log('\nArray de pares gerado a partir do objeto:');
  console.log(pares);

} else {
  console.log('Opção inválida.');
}
