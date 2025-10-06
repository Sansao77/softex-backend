-- Atividade Conceitual
-- Entidades: Cliente, Filme, Locação
/*
Propriedades:
    Cliente: id, nome, email, telefone, endereço
    Filme: id, título, diretor, ano, gênero, duração
    Locação: id, cliente_id, filme_id, data_inicio, data_fim, valor_total

Relacionamentos:
    Cliente assisti Filme
    Cliente solicita Locação
    Locação envolve Filme
    Locação empresta Filme
*/

-- Atividade Física

CREATE TABLE Cliente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(200) NOT NULL
);

CREATE TABLE Filme (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    diretor VARCHAR(100) NOT NULL,
    ano INT NOT NULL,
    genero VARCHAR(50) NOT NULL,
    duracao INT NOT NULL
)

CREATE TABLE Locacao(
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT FOREIGN KEY REFERENCES Cliente(id) NOT NULL,
    filme_id INT FOREIGN KEY REFERENCES Filme(id) NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL
)
