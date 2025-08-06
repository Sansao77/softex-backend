import PromptSync from 'prompt-sync';
const prompt = PromptSync();

// Atividades Práticas

// Atividade 1 - Guardando nomes

function atividade1(){
    const nomes = [];

    while(nomes.length < 5){
        console.log("Qual o " + (nomes.length + 1) + "º nome?");
        const nome = prompt("R: ");
        nomes.push(nome);
    }

    console.log("\nLista de nomes: ", nomes);
}

// Atividade 2 - Guardando numeros e calculando média

function atividade2(){
    const numeros = [];
    let total = 0;

    while(numeros.length < 4){
        console.log("Qual o " + (numeros.length + 1) + "º número?");
        const numero = Number(prompt("R: "));
        numeros.push(numero);

        total += numero;
    }

    console.log("\nLista de numeros: ", numeros);
    console.log("Média: ", total/numeros.length);
}

// Atividade 3 - Mostrando elementos em ordem reversa

function atividade3(){
    const nomes = [];

    while(nomes.length < 3){
        console.log("Qual o " + (nomes.length + 1) + "º nome?");
        const nome = prompt("R: ");
        nomes.push(nome);
    }

    console.log("\nLista de nomes (ordem inversa): ", nomes.reverse());
}

// Atividade 4 - Desáfio: encontrando o maior número

function atividade4(){
    const numeros = [];
    const tentativas = 8;
    let maior = 0;

    console.log("Loop de números (tem um número máximo de tentátivas e depois acaba)");

    while(numeros.length < tentativas){
        console.log("Qual o " + (numeros.length + 1) + "º número? (", (tentativas - numeros.length), "tentativa(s) restando)");
        const numero = Number(prompt("R: "));

        if(maior<numero) maior = numero;

        numeros.push(numero);
    }

    console.log("\nLista de numeros: ", numeros);
    console.log("Maior número da lista: ", maior);
}


// Teste

atividade4();