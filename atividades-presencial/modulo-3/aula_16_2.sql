-- Atividade Conceitual
-- Entidades: Aluno, Curso, Professor, Disciplina, Matrícula
/*
Propriedades:
    Aluno: id, nome, email, telefone, endereco
    Curso: id, nome, descricao, duracao
    Professor: id, nome, email, telefone, endereco
    Disciplina: id, professor_id, curso_id, nome, descricao, carga_horaria
    Matricula: id, aluno_id, curso_id, data_inicio, data_fim

Relacionamentos:
    Aluno faz Matricula
    Aluno participa de Disciplina
    Disciplina faz parte de Curso
    Curso envolve Disciplina
    Professor ensina Disciplina


Cardinalidade:
    Aluno(1) --- (1)Matricula
    Matricula(N) --- (1) Curso
    Curso(N) --- (1) Professor
    Curso(N) --- (N) Disciplina
    Professor(1) --- (1) Disciplina
*/

-- Atividade Física

CREATE TABLE Aluno(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(200) NOT NULL
)

CREATE TABLE Professor(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(200) NOT NULL
)

CREATE TABLE Curso(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    duracao INT NOT NULL
)

CREATE TABLE Disciplina(
    id INT PRIMARY KEY AUTO_INCREMENT,
    professor_id INT NOT NULL,
    curso_id INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    carga_horaria INT NOT NULL,
    FOREIGN KEY (professor_id) REFERENCES Professor(id),
    FOREIGN KEY (curso_id) REFERENCES Curso(id)
)

CREATE TABLE Matricula(
    aluno_id INT NOT NULL,
    curso_id INT NOT NULL,
    data_matricula DATE NOT NULL,
    FOREIGN KEY (aluno_id) REFERENCES Aluno(id),
    FOREIGN KEY (curso_id) REFERENCES Curso(id)
)
