
# Exercício 9 - Conversão Entre Formatos

Este script implementa duas funções para converter entre dois formatos:

- `paresParaObjeto(pares)`: Converte um array de pares `[[chave, valor], ...]` em um objeto.
- `objetoParaPares(obj)`: Converte um objeto em um array de pares `[[chave, valor], ...]`.


## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`09.js`)
```javascript
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

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `09.js`:
```bash
C:\Users\marcelo\Desktop\Dev-Full Stack Jr-T2-praTi-Codifica\Seção-3-Arrays-Objetos-Complexos\Conversão-Entre-Formatos

```
3. Execute o script com Node.js:
```bash
node 09.js
```

## 📌 Exemplo de execução:

```
Escolha uma operação:
1 - Converter pares para objeto
2 - Converter objeto para pares
Digite 1 ou 2: 1
Digite pares [chave, valor]. Digite "fim" como chave para encerrar.
Chave: nome
Valor: Ana
Chave: idade
Valor: 25
Chave: fim

Objeto gerado a partir dos pares:
{ nome: 'Ana', idade: '25' }


Opção 2 (objeto → pares):


Escolha uma operação:
1 - Converter pares para objeto
2 - Converter objeto para pares
Digite 1 ou 2: 2
Digite propriedades do objeto. Digite "fim" como chave para encerrar.
Chave: cidade
Valor: São Paulo
Chave: estado
Valor: SP
Chave: fim

Array de pares gerado a partir do objeto:
[ [ 'cidade', 'São Paulo' ], [ 'estado', 'SP' ] ]

```
