// Atividades Praticas

// Atividade 1

class Aluno{
    private nome:string;
    private matricula:string;

    constructor(matricula:string, nome:string){
        this.matricula = matricula;
        this.nome = nome;
    }

    public getNome(){
        return this.nome;
    }

    public getMatricula(){
        return this.matricula;
    }
}

class Turma{
    private listaAlunos:Aluno[];

    constructor(){
        this.listaAlunos = [];
    }

    public adicionarAlunos(aluno: Aluno){
        this.listaAlunos.push(aluno);
    }

    public listarAlunos(){
        this.listaAlunos.forEach(x =>{
            console.log("\nMatricula: " + x.getMatricula() + ", Nome: " + x.getNome());
        })
    }
}

const turma1 = new Turma();

// Lista vazia
turma1.listarAlunos();

turma1.adicionarAlunos(new Aluno('1545100','Gabriel'));
turma1.adicionarAlunos(new Aluno('4584884','Matheus'));
turma1.adicionarAlunos(new Aluno('4848941','Rodrigo'));

// Lista com três alunos
console.log("Lista de Alunos");
turma1.listarAlunos();


// Atividade 2
console.log('\n');

class Produto{
    private id: string;
    private nome: string;
    private preco: number;

    constructor(id: string, nome: string, preco: number){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    public getID(){
        return this.id;
    }

    public getNome(){
        return this.nome;
    }
    
    public getPreco(){
        return this.preco;
    }
}

class Pedido{
    private listaProdutos: Produto[];

    constructor(){
        this.listaProdutos = [];
    }

    public adicionarProduto(produto: Produto){
        this.listaProdutos.push(produto);
    }

    public removerProduto(nome: string){
        this.listaProdutos = this.listaProdutos.filter(x => x.getNome() !== nome);
    }

    public calcularTotal(){
        console.log("Quantidade de produtos: " + this.listaProdutos.length);
        console.log("Nomes dos produtos: " + this.listaProdutos.map(x => x.getNome()));
        console.log("Preço total dos produtos: " + this.listaProdutos.reduce((accumulator, currentValue) => accumulator + currentValue.getPreco(), 0));
    }
}

const produto = new Pedido();

produto.adicionarProduto(new Produto("1", "Maça", 2));
produto.adicionarProduto(new Produto("2", "Laranja", 5));
produto.adicionarProduto(new Produto("3", "Abacaxi", 7));

produto.calcularTotal();

produto.removerProduto('Maça');
console.log('\n');

produto.calcularTotal();


// Atividade 3
console.log('\n');

class Livro{
    private autor: string;
    private nome: string;
    private quantidadePaginas: number;

    constructor(autor: string, nome: string, quantidadePaginas: number){
        this.autor = autor;
        this.nome = nome;
        this.quantidadePaginas = quantidadePaginas;
    }

    public getAutor(){
        return this.autor;
    }

    public getNome(){
        return this.nome;
    }

    public getQuantidadePaginas(){
        return this.quantidadePaginas;
    }
}

class Biblioteca{
    private livros: Livro[];

    constructor(){
        this.livros = [];
    }

    public adicionarLivro(livro: Livro){
        this.livros.push(livro);
    }

    public buscarLivroPorTitulo(titulo: string){
        for(const livro of this.livros){
            if(livro.getNome() === titulo){
                console.log("Esse livro está na biblioteca!");
                return;
            }
        }

        console.log("Este livro não está na biblioteca");
    }
}

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro(new Livro("a", "A", 450));
biblioteca.adicionarLivro(new Livro("b", "B", 450));
biblioteca.adicionarLivro(new Livro("c", "C", 450));
biblioteca.adicionarLivro(new Livro("d", "D", 450));
biblioteca.adicionarLivro(new Livro("e", "E", 450));

biblioteca.buscarLivroPorTitulo("C");
biblioteca.buscarLivroPorTitulo("F");
