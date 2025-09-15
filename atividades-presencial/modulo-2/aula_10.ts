// Atividades Praticas - Sintaxe da linguagem OO (Orientação de Objetos) em TypeScript

// Atividade 1

class Funcionario{
    constructor(
        public nome: string,
        private salario: number,
        private readonly id: number
    ){}

    public aumentarSalario(valor: number){
        this.salario += valor;
    }

    public exibirFuncionario(){
        console.log("Funcionário " + this.id + "\nNome: " + this.nome + "\nSalario: " + this.salario);
    }
}

const funcionario = new Funcionario("Rodrigo", 1000, 1);

funcionario.exibirFuncionario();
funcionario.aumentarSalario(5000);
console.log("\n");
funcionario.exibirFuncionario()


// Atividade 2
class Cliente{
    constructor(
        public nome:string,
        private readonly cpf:string,
        private senha:string
    ){}

    validarSenha(senha:string){
        if(this.senha === senha){
            console.log("Essa é a senha correta!");
        }
        else console.log("Essa não é a senha correta!");
    }
}


// Atividade 3

class Veiculo{
    constructor(
        public marca: string,
        public modelo: string,
        public ano: number,
        private placa: string
    ){}

    exibirDados(){
        console.log("Marca: " + this.marca + "\nModelo: " + this.modelo + "Ano: " + this.ano + "Placa: " + this.placa);
    }
}

// Atividades Praticas - Abstração: Definição e Uso de Classes Abstratas

// Atividade 1

abstract class Animal{
    constructor(private nome: string){}

    abstract emitirSom():string;

    apresentar(){
        console.log(this.nome);
    }
}

class Cachorro extends Animal{
    constructor(nome: string){
        super(nome);
    }

    emitirSom(): string {
        return "Au Au";
    }
}

class Gato extends Animal{
    constructor(nome: string){
        super(nome);
    }

    emitirSom(): string {
        return "Miau"
    }
}

const apolo = new Cachorro("Apolo");
apolo.apresentar();
console.log(apolo.emitirSom());
console.log("\n")

const mia = new Gato("Mia");
mia.apresentar();
console.log(mia.emitirSom());
