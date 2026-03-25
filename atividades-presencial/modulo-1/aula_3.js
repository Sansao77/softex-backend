//import promptSync from 'prompt-sync';

// Atividades Práticas

//const prompt = promptSync();

// Atividade 1 - Calculando média de 3 valores

function atividade1(){
    console.log("Qual o primeiro valor?");
    const nota1 = Number(prompt("R:"));

    console.log("\nQual o segundo valor?");
    const nota2 = Number(prompt("R:"));

    console.log("\nQual o terceiro valor?");
    const nota3 = Number(prompt("R:"));

    console.log("\n---------- Resultado: ", ((nota1 + nota2 + nota3)/3).toFixed(3));
}

// Atividade 2 - Calculando da multa

function atividade2(){
    // R$1,5 por dia de atraso
    const multaBiblioteca = 1.5

    console.log("Quantos dias de atraso?");
    const diasAtrasados = Number(prompt("R:"));

    console.log("\n---------- Valor a ser pago: R$", diasAtrasados*multaBiblioteca);
}

// Atividade 3 - Calculo do rateio

function atividade3(){
    console.log("Qual o valor da conta d'água?");
    const valorContaAgua = Number(prompt("R:"));

    console.log("Qual o valor da conta de energia?");
    const valorContaEnergia = Number(prompt("R:"));

    console.log("Quantidade de apartamentos");
    const quantidadeApartamentos= Number(prompt("R:"));

    console.log("Multa para cada apartamento: R$", ((valorContaAgua + valorContaEnergia)/quantidadeApartamentos).toFixed(2));
}

// Teste

atividade2();