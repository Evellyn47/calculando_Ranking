const prompt = require("prompt-sync")();

console.log("RANKING DOS HERÓIS\nVamos calcular seu ranking!");

function calcularVitorias(quantidadeVitorias, quantidadeDerrotas) {
    return quantidadeVitorias - quantidadeDerrotas;
}

let sair = false;

do {
    let escolha = prompt("Digite [1] - Para calcularmos seu ranking OU Digite [2] para sair da aplicação: ");
    escolha = parseInt(escolha);

    if (escolha === 2) {
        sair = true;
        console.log("Saindo da aplicação... Até a próxima!");
    } else if (escolha === 1) {

        const novasVitorias = parseFloat(prompt("Digite a quantidade de vitórias: "));
        const novasDerrotas = parseFloat(prompt("Digite a quantidade de derrotas: "));
        const resultado = calcularVitorias(novasVitorias, novasDerrotas);

        switch (true) {
            case (resultado <= 100):
                console.log(resultado + " - A sua classificação é: FERRO");
                break;
            case (resultado > 100 && resultado <= 200):
                console.log( resultado + " - A sua classificação é: BRONZE");
                break;
            case (resultado > 200 && resultado <= 500):
                console.log(resultado + " - A sua classificação é: PRATA");
                break;
            case (resultado > 500 && resultado <= 700):
                console.log(resultado + " - A sua classificação é: OURO");
                break;
            case (resultado > 700 && resultado <= 800):
                console.log(resultado + " - A sua classificação é: PLATINA");
                break;
            case (resultado > 800 && resultado <= 900):
                console.log(resultado + " - A sua classificação é: ASCENDENTE");
                break;
            case (resultado > 900 && resultado <= 1000):
                console.log(resultado + " - A sua classificação é: IMORTAL...PARABÉNS PELA CONQUISTA!!");
                break;
            default:
                console.log("Pontuação inválida. Tente novamente.");
                break;
        }

        console.log(`Sua pontuação é: ${resultado}`);

    } else {
        console.log("Opção inválida! Tente novamente.");
    }
} while (!sair);
