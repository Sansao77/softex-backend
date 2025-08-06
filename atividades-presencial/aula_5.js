import PromptSync from 'prompt-sync';
const prompt = PromptSync();

// Atividades Práticas


// Atividade 1 - Contagem de 1 a N

function atividade1(){
    console.log("Qual será o valor de N? (somente números inteiros)");
    const n = parseInt(prompt("R: "));

    console.log("\nContagem:");
    for(let i = 1; i<=n; i++) console.log(i);
}

// Atividade 2 - Tabuada de um Número

function atividade2(){
    console.log("Qual o número da tabuada? (somente números inteiros)");
    const valor_tabuada = parseInt(prompt("R: "));

    console.log("\nTabuada do " + valor_tabuada);

    for(let i = 1; i<=10; i++) console.log(i +"º)",valor_tabuada*i);
}

// Atividade 3 - Soma dos números pares de 1 a 100

function atividade3(){
    let pares = 0;
    
    console.log("Processo de soma dos valores pares:")
    for(let i = 1; i<=100; i++){
        if(i%2 === 0){
            console.log("\nSoma atual", pares, "(Proximo valor par para a soma: " + i + ")");
            pares += i;
        }
    }

    console.log("\n\nSoma dos números pares de 1 a 100 é igual a: ", pares);
}

// Atividade 4 - Loop com condição de parada

function atividade4(){
    const valor_condicao = 0;
    const valores = [];
    let contador = 0;

    console.log("Loop infinito, digite qualquer valor (caso queira sair, digite 0)")
    while(true){
        const valor = Number(prompt("R: "));

        if(valor === valor_condicao) break;

        contador++;
        valores.push(valor);

        console.log("\nMuito bem! Qual o proximo valor?");
    }

    console.log("\nFim do processo, parabens por sair do Loop!");
    console.log("Quantidade de valores inseridos: ", contador);
    console.log("Lista de valores: ", valores);
}

// Teste

atividade4();