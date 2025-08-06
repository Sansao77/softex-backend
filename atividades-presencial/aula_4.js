import promptSync from 'prompt-sync';

// Atividades Práticas

const prompt = promptSync();

// Atividade 1 - Par ou Impar

function atividade1(){
    console.log("Qual o número?");
    const valor = parseInt(prompt("R: "));

    console.log("\nO numero ", valor, " é ", (valor%2 === 0)? "par":"impar");
}

// Atividade 2 - Dar nota

/**
 * @param {number} media 
 * @returns categoria da media
 */
function categoriaMedia(media){
    if(media>=9) return "A";
    else if(media>=7) return "B";
    else if(media>=5) return "C";
    
    return "D"
}

function atividade2(){
    console.log("Qual foi sua média final?");
    const media = Number(prompt("R: "));

    console.log("\nCatégoria da media final:", categoriaMedia(media));
}

// Atividade 3 - Calculadora de IMC

/**
 * 
 * @param {number} imc 
 */
function tabelaIMC(imc){
    if(imc<=18.5) return "Abaixo do peso";
    else if(imc<=24.9) return "Peso normal";
    else if(imc<=29.9) return "Sobrepeso";
    else if(imc<=34.9) return "Obesidade grau 1";
    else if(imc<=39.9) return "Obesidade grau 2";

    return "Obesidade grau 3"
}

function atividade3(){
    console.log("Qual o seu peso (em kg)?");
    const peso = Number(prompt("R: "));

    console.log("\nQual a sua altura (em metros)?");
    const altura = Number(prompt("R: "));

    const imc = (peso/(altura*altura)).toFixed(2);

    console.log("\nResultado do IMC: ", imc, " (", tabelaIMC(imc), ")");
}

// Teste

atividade3();