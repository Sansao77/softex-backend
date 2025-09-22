// Atividade Prática

// Modelo UML

/*
    + -------------------- +            + -------------------------- +            + ------------------------- +
    |       Livro          |            |          Usuario           |            |        Emprestimo         |
    + -------------------- +            + -------------------------- +            + ------------------------- +
    |  - titulo: string    |            |  - nome: string            |            |  - data: string           |
    |  - autor: string     |            |  - email: string           |            |  - livro: Livro           |
    |  - ano: number       |            + -------------------------- +            |  - usuario: Usuario       |
    + -------------------- +            |  + pegarLivroEmprestado()  |            + ------------------------- +
                                        + -------------------------- +            |  + confirmarEmprestimo()  |
                                                                                  + ------------------------- +
*/


// Código

// Classes

class Livro{
    constructor (
        private titulo: string,
        private autor: string,
        private ano: number
    ){}

    getTitulo(){
        return this.titulo;
    }

    getAutor(){
        return this.autor;
    }

    getAno(){
        return this.ano;
    }
}

class Usuario{
    constructor(
        private nome: string,
        private email: string
    ){}

    pegarLivroEmprestado(livro: Livro){
        console.log("Quero pegar o livro, " + livro.getTitulo() + ", emprestado");
    }

    getNome(){
        return this.nome;
    }

    getEmail(){
        return this.email;
    }
}

class Emprestimo{
    constructor(
        private data: string,
        private livro: Livro,
        private usuario: Usuario
    ){}

    confirmarEmprestimo(){
        console.log("O usuario " + this.usuario.getNome() + " pegou o livro " + this.livro.getTitulo() + "na data de " + this.data);
    }
}