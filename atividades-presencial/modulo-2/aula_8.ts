// Atividades Praticas

// Atividade 1

class Cliente{
    private nome:string;
    private cpf:string;

    constructor(nome:string, cpf:string){
        this.nome = nome;
        this.cpf = cpf;
    }

    public saudar() {
        console.log("Olá, " + this.nome + "! Seu CPF é " + this.cpf);
    }
}

const cliente1 = new Cliente("Gabriel Santos Ramos", "00000000000");
cliente1.saudar();

const cliente2 = new Cliente("Alison Silva Filipiano", "11111111111");
cliente2.saudar();

// Atividade 2

class Endereco{
    private rua:string;
    private numero:number;
    private cidade:string;

    constructor(rua:string, numero:number, cidade: string){
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
    }

    formatar(){
        console.log("Rua " + this.rua + ", Nº " + this.numero + ", " + this.cidade);
    }
}

const endereco1 = new Endereco("Baker", 221, "Londres");
endereco1.formatar();

// Atividade 3
/*
# Causava conflito com a classe do arquivo aula_9.ts

 class Pedido{
    private id:string;
    private total:number;

    constructor(id: string){
        // Definir a variável id externa com mesmo valor com a do parametro do constructor
        this.id = id;

        // Definir a variável total externa como 0 ao iniciar a instância da classe
        this.total = 0;
    }

    adicionarValor(v: number){
        // Adicionar o valor do parametro v a variável externa total
        this.total += v;
    }

    mostrarValor(){
        console.log("\nID: " + this.id + "\nTotal: " + this.total);
    }
}

const pedido = new Pedido("12345");
pedido.mostrarValor();
pedido.adicionarValor(5);
pedido.mostrarValor();

*/
