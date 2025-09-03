//import PromptSync from 'prompt-sync';
//const prompt = PromptSync();

// Atividades Práticas

// Atividade 1 - Função de saudação

/**
 * Função para mandar uma mensagem de saudação
 * @param {string} nome 
 */
function saudar(nome){
    console.log("Olá, " + nome + "!");
}

function atividade1(){
    console.log("Qual o seu nome?");
    const nome = prompt("R:");

    saudar(nome)
};


// Atividade 2 - Calculadora simples

/**
 * Função para somar dois valores
 * @param {number} x 
 * @param {number} y 
 * @returns number
 */
const somar = (x, y) => {return x+y;};

function atividade2(){
    console.log("Soma de dois valores:")
    console.log("De o primeiro valor");
    const valor1 = Number(prompt("R:"));

    console.log("\nDe o segundo valor");
    const valor2 = Number(prompt("R:"));

    console.log("\nA soma de " + valor1 + " + " + valor2 + " é igual a", somar(valor1, valor2));
}

// Atividade 3 - Calcular média

/**
 * Media de três valores
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @returns number
 */
const media3 = (x, y, z) =>{return ((x+y+z)/3).toFixed(3)};

function atividade3(){
    console.log("Media de 3 valores:")
    console.log("De o primeiro valor");
    const valor1 = Number(prompt("R:"));

    console.log("\nDe o segundo valor");
    const valor2 = Number(prompt("R:"));

    console.log("\nDe o terceiro valor");
    const valor3 = Number(prompt("R:"));

    console.log("\nA media desses valores é", media3(valor1, valor2, valor3))
}

// Atividade 4 - Conversor de Temperatura

/**
 * 
 * @param {number} celsius 
 * @returns number
 */
const conversorCelsiusFahrenheit = (celsius) => {return ((celsius*9/5) + 32).toFixed(2);};

function atividade4(){
    console.log("Conversor de Celsius (ºC) para Fahrenheit (ºF)");
    console.log("Qual o valor em Celsius (Cº) deseja converter? (somente o número)");
    const celsius = Number(prompt("R:"));

    console.log(celsius + "ºC equivale a " + conversorCelsiusFahrenheit(celsius) + "ºF");
}

// Teste

atividade4();