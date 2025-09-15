// Atividades Praticas - Interfaces Definição e Utilização

// Atividade 1

interface IVeiculo{
    marca:string,
    modelo:string,
    ligar():void,
    desligar():void,
}

class Carro implements IVeiculo{
    constructor(public marca:string, public modelo:string){}

    ligar(): void{
        console.log("Vrom Vrom");
    }

    desligar(): void {
        console.log("Uhmhunmm")
    }
}

class Motor implements IVeiculo{
    constructor(public marca:string, public modelo:string){}

    ligar(): void{
        console.log("Shum Shum");
    }

    desligar(): void {
        console.log("Viiiauuuuu")
    }
}

// Atividade 2

interface IAparelho{
    ligar():void;
    desligar():void;
}

class Televisao implements IAparelho{
    ligar(): void {
        console.log("A TV está ligada");
    }

    desligar(): void {
        console.log("A TV está desligada");
    }
}

class Celular implements IAparelho{
    ligar(): void {
        console.log("O Celular está ligado");
    }

    desligar(): void {
        console.log("O Celular está desligado");
    }
}


// Atividades Práticas - Agregação e Composição de Objetos

// Atividade 1
// Pergunta: Essa relação é agregação ou conformidade
// Resposta: Agregação (é possível ter Livros existirem sem estarem na biblioteca)

class Livro{
    constructor(private titulo:string, private autor:string){}

    public getTitulo(){return this.titulo;}
    public getAutor(){return this.autor;}
}

class Biblioteca{
    constructor(private livros?: Livro[]){}

    public adicionarLivro(livro: Livro){
        this.livros?.push(livro);
        console.log(livro.getTitulo + " adicionado a biblioteca");
    }

    public adicionarLivros(livros: Livro[]){
        livros.push(... livros);

        console.log("Livros:");
        livros.forEach(x => console.log("- " + x.getTitulo));
        console.log("\n Foram adicionados!");
    }

    public listarLivros():void{
        if(this.livros === undefined){
            console.log("A biblioteca está vazia, sem livros!");
            return;
        }

        console.log("Lista de livros:\n");
        for(const livro of this.livros){
            
            console.log("- " + livro.getTitulo + " (Autor: " + livro.getAutor + ")\n");
        }
    }
}