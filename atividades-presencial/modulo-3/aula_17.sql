-- Atividade Prática 1: Resolvida no arquivo aula_16_2.sql, são as tabelas de dados
-- Atividade Prática 2
/*

Modelo Lógico Relacional
--------------------------------

Descrição:
-- Um hospital possui médicos, paciente e consultas
-- Cada médico pode atender vários pacientes, e cada paciente pode ter várias consultas

Relacionamentos:
Paciente agendam Consultas
Médicos atendem Consultas

Cardinalidade:
Paciente (1) ------ (N) Consultas
Medicos (1) ------- (N) Consultas
Paciente (N) ------ (N) Medicos

*/

CREATE TABLE Paciente (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    cpf INT,
    idade INT
);

CREATE TABLE Medico (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    especialidade VARCHAR(100)
);

CREATE TABLE Consulta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    paciente_id INT,
    medico_id INT,
    motivo_consulta VARCHAR(255),
    hora_marcada DATETIME,
    FOREIGN KEY (paciente_id) REFERENCES Paciente(id),
    FOREIGN KEY (medico_id) REFERENCES Medico(id)
);
