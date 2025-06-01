
# Exercício 5 - Função Debounce

Este repositório contém um exemplo funcional de implementação do padrão **debounce** em JavaScript. A função `debounce(fn, delay)` recebe uma função `fn` e um tempo de atraso `delay` (em milissegundos), e retorna uma nova função que só executa `fn` se não for chamada novamente dentro do intervalo determinado.

Isso é útil para evitar chamadas repetidas e desnecessárias, como em eventos de digitação ou redimensionamento de janela.


## 📋 Requisitos

- Node.js instalado  
- Biblioteca `prompt-sync` instalada:
```bash
npm install prompt-sync
```

## 📄 Código-fonte (`05s`)
```javascript
// Função debounce que adia a execução de fn até que o delay se passe sem novas chamadas
function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    // Limpa qualquer timeout pendente
    clearTimeout(timeoutId);

    // Cria um novo timeout para executar a função após o delay
    timeoutId = setTimeout(() => {
      fn.apply(this, args); // Mantém o contexto e os argumentos originais
    }, delay);
  };
}

// Função de exemplo que será executada com debounce
function salvarDados() {
  console.log('Salvando dados... (executado em', new Date().toLocaleTimeString(), ')');
}

// Cria uma versão debounce da função salvarDados com 2 segundos de atraso
const salvarDebounce = debounce(salvarDados, 2000);

// Simula chamadas múltiplas e rápidas (ex: usuário digitando em um campo de texto)
console.log('Chamando várias vezes a função salvarDebounce():');
salvarDebounce();              // Chamada 1
setTimeout(salvarDebounce, 500);   // Chamada 2 - cancela a 1
setTimeout(salvarDebounce, 1000);  // Chamada 3 - cancela a 2
setTimeout(salvarDebounce, 2500);  // Chamada 4 - esta será a única executada após o delay

```

## 🚀 Como executar

1. Abra o prompt de comando (cmd)
2. Navegue até a pasta onde está o arquivo `05.js`
```bash
C:\Users\marcelo\Desktop\Dev-Full Stack Jr-T2-praTi-Codifica\Exercicio-2-praTi-Codifica\Seção-2-Funções-Recursão\Debounce

```
3. Execute o script com Node.js:
```bash
node 05.js
```

## 📌 Exemplo de execução:

```
Chamando várias vezes a função salvarDebounce():
Salvando dados... (executado em 15:34:08)

```
