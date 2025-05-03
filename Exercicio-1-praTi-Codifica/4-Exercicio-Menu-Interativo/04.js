const prompt = require('prompt-sync')();

console.log("==== MENU ====");
console.log("1 - Ver saudação");
console.log("2 - Mostrar data atual");
console.log("3 - Sair");

const opcao = prompt("Escolha uma opção (1, 2 ou 3): ");

switch (opcao) {
    case '1':
        console.log("Olá! Seja bem-vindo ao sistema.");
        break;
    case '2':
        const dataAtual = new Date();
        console.log("Data atual: " + dataAtual.toLocaleString());
        break;
    case '3':
        console.log("Encerrando o programa...");
        break;
    default:
        console.log("Opção inválida. Tente novamente.");
}
