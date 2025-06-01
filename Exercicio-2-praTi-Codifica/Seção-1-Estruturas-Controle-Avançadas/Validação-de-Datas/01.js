// Importa o módulo prompt-sync para leitura de entrada no terminal
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
  // Verifica se dia, mês e ano são inteiros positivos
  if (
    !Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano) ||
    dia <= 0 || mes <= 0 || ano <= 0
  ) {
    return false;
  }

  // Verifica se o mês está entre 1 e 12
  if (mes < 1 || mes > 12) {
    return false;
  }

  // Função auxiliar para verificar se o ano é bissexto
  function ehBissexto(ano) {
    // Ano bissexto: divisível por 400 ou divisível por 4 e não por 100
    return (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);
  }

  // Array com o número de dias em cada mês
  // Para fevereiro, usa 29 se for bissexto, senão 28
  const diasNoMes = [
    31,
    ehBissexto(ano) ? 29 : 28,31,30,31,30,31,31,30,31,30,31];

  // Verifica se o dia informado é maior que o número máximo de dias do mês
  if (dia > diasNoMes[mes - 1]) {
    return false;
  }

  // Se passou por todas as validações, a data é válida
  return true;
}

// Solicita ao usuário o dia, mês e ano usando prompt-sync
const dia = parseInt(prompt('Digite o dia: '), 10);
const mes = parseInt(prompt('Digite o mês: '), 10);
const ano = parseInt(prompt('Digite o ano: '), 10);

// Verifica se a data é válida e exibe a mensagem correspondente
if (ehDataValida(dia, mes, ano)) {
  console.log('Data válida!');
} else {
  console.log('Data inválida!');
}
