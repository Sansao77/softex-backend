// Atividades Praticas - Interfaces Definição e Utilização

// Atividade 1

class CadastroUsuario{
    constructor(private nome: string, private senha: string){
        this.registrar(this.nome, this.senha)
    }

    registrar(nome: string, senha: string){
        if(nome.trim() === '') throw new Error('O nome não pode estar vazio');
        if(senha.length < 6) throw new Error('A senha é muito curta');

        console.log("O usuario foi cadastrado")
    }
}

const teste = new CadastroUsuario('Gabriel','12345');

// Atividade 2

class Produto{
    constructor(private nome: string, private valor?: number){}

    setProduto(valor: number){
        if(valor < 0) throw new Error("O valor do produto não pode ser negativo");
        if(valor === 0) throw new Error("O produto não pode ser de graça");

        this.valor = valor;
    }
}

// Atividade 3

class Pedido{
    constructor(private lista: string[] = []){}

    finalizar(){
        if(this.lista.length === 0) throw new Error("Pedido não pode ser finalizado sem itens");
    }

    getLista(){
        console.log(this.lista);
    }

    adicionarElementoLista(pedido: string){
        if(pedido.trim() === "") throw new Error("Um elemento na lista não pode estar vazio");

        this.lista.push(pedido);
        console.log("Elemento adicionado na lista");
    }

    removerElementoLista(pedido: string){
        this.lista.filter(x => x !== pedido);
    }
}