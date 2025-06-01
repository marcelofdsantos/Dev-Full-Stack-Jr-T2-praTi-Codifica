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
