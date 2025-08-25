//import PromptSync from "prompt-sync";


/**
 * Função para fazer certa operação em dois valores
 * @param {number} valor1 
 * @param {number} valor2 
 * @param {number} operacao 
 * @returns string
 */
function operacoes(valor1, valor2, operacao){
    switch(operacao){
        case 1:
            return "\nO resultado de " + valor1 + " + " + valor2 + " é igual a " + (valor1 + valor2);
        case 2:
            return "\nO resultado de " + valor1 + " - " + valor2 + " é igual a " + (valor1 - valor2);
        case 3:
            return "\nO resultado de " + valor1 + " * " + valor2 + " é igual a " + (valor1 * valor2);
        case 4:
            return "\nO resultado de " + valor1 + "/" + valor2 + " é igual a " + ((valor1/valor2).toFixed(2));
        case 5:
            return "\nO resultado de " + valor1 + "^" + valor2 + " é igual a " + (valor1 ** valor2);
        case 6:
            return "\nO resultado da raiz " + valor2 + " de " + valor1 + " é igual a " + Math.pow(valor1, 1/valor2);
    }

    return "\nResposta não válida";
}

function main(){
    console.log("Sistema de Calculadora simples\n");
    //const prompt = PromptSync();
    let resposta;

    do{
        console.log("Qual ação gostaria de realizar? (Por favor só use números como resposta, para sair use o comando FINALIZAR)\n"
            +"0 - FINALIZAR   | 1 - SOMAR   | 2 - SUBTRAIR   | 3 - MULTIPLICAR   | 4 - DIVIDIR | 5 - EXPONENCIAL | 6 - RAIZ N");

        resposta = parseInt(prompt("R:"));

        if(Number.isNaN(resposta) || resposta > 6 || resposta < 0){
            console.log("\nEssa resposta não é valida para o sistema, RECOMECE!\n");
            continue;
        }
        else if(resposta !== 0){
            console.log("\nDefina os valores os 2 valores que serão usados");

            console.log("Primeiro valor")
            const valor1 = Number(prompt("R:"));

            console.log("\nSegundo valor")
            const valor2 = Number(prompt("R:"));

            console.log(operacoes(valor1, valor2, resposta) + "\n\n");
        }
    }while(resposta !== 0);

    console.log("\nFim do sistema! Obrigado por utilizar o serviço :)");
}

main();