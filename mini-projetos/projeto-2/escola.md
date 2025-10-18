# Sistema Escolar Alfa

## Tarefas

1. Identifique as Entidades, Atributos e Relacionamentos

  ```txt
    ---------------------------
    | Aluno                   |
    ---------------------------
    | id: number              |
    | RA: number              |
    | nome: string            |
    | data_nascimento: string |
    ---------------------------

    ---------------------------
    | Professor              |
    ---------------------------
    | id: number              |
    | codigo: string          |
    | nome: string            |
    | formacao: string        |
    ---------------------------

    ---------------------------
    | Disciplina              |
    ---------------------------
    | id: number              |
    | professor_id: number    |
    | codigo: number          |
    | nome: string            |
    ---------------------------

    ---------------------------
    | Matricula               |
    ---------------------------
    | id: number              |
    | aluno_id: number        |
    | disciplina_id: number   |
    | nota: number            |
    | situacao: string        |
    ---------------------------
  ```

2. Monte o DER (Diagrama de Entidade-Relacionamento) conceitual, indicando as cardinalidades

  - Propriedades:
    - Aluno: id, RA, nome, data_nascimento
    - Professor: id, codigo, nome, formacao
    - Disciplina: id, professor_id, codigo, nome
    - Matricula: id, aluno_id, disciplina_id, nota, situacao

  - Relacionamentos
    - Aluno faz Disciplina
    - Disciplina possui Professor
    - Matricula contem Aluno
    - Matricula contem Disciplina

  - Cardinalidade
    - Aluno(1) <------> (N) Matricula
    - Disciplina (1) <-----------> (1) Professor
    - Disciplina (1) <-----------> (N) Matricula

3. Construa o **modelo lógico relacional** com PKs e FKs

  ![SQL Sistema Escolar Alfa](/media/sansao/CANAIS/projetos/javascript/softex-backend/public/drawSQL-escola.png)

4. Verifique se o modelo está **normalizado até 3FN**.

  [X] Está dentro da 1FN?
    --> Regra: Cada célula contém um único valor?

  [X] Está dentro da 2FN?
      --> Regra: Todos os campos dependem da chave completa

  [X] Está dentro da 3FN?
      --> Regra: Campos não-chave não dependem de outros campos não-chave

5º Explique onde havia dependências parciais ou transitiva antes da normalização
  R: Existia dependência transitiva antes da criação da tabela Matricula, pois era conectado Aluno e Disciplina para conectar os dados.

```sql
CREATE TABLE "alunos"(
    "id" BIGINT NOT NULL,
    "RA" BIGINT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" DATE NOT NULL
);
-- Definição da chave primaria de alunos
ALTER TABLE
    "alunos" ADD PRIMARY KEY("id");

CREATE TABLE "professores"(
    "id" BIGINT NOT NULL,
    "codigo" BIGINT NOT NULL,
    "nome" TEXT NOT NULL,
    "formacao" VARCHAR(255) NOT NULL
);
-- Definição da chave primaria de professores
ALTER TABLE
    "professores" ADD PRIMARY KEY("id");

CREATE TABLE "disciplinass"(
    "id" BIGINT NOT NULL,
    "professor_id" BIGINT NOT NULL,
    "codigo" BIGINT NOT NULL,
    "nome" TEXT NOT NULL
);
-- Definição da chave primaria de disciplinas
ALTER TABLE
    "disciplinas" ADD PRIMARY KEY("id");

CREATE TABLE "matriculas"(
    "id" BIGINT NOT NULL,
    "aluno_id" BIGINT NOT NULL,
    "disciplina_id" BIGINT NOT NULL,
    "nota" BIGINT NOT NULL,
    "situacao" VARCHAR(255) NOT NULL
);
-- Definição da chave primaria de matriculas
ALTER TABLE
    "matriculas" ADD PRIMARY KEY("id");

-- Definição das chaves estrangeiras

ALTER TABLE
    "disciplinas" ADD CONSTRAINT "disciplina_professor_id_foreign" FOREIGN KEY("professor_id") REFERENCES "professores"("id");
ALTER TABLE
    "matriculas" ADD CONSTRAINT "matricula_aluno_id_foreign" FOREIGN KEY("aluno_id") REFERENCES "alunos"("id");
ALTER TABLE
    "matriculas" ADD CONSTRAINT "matricula_disciplina_id_foreign" FOREIGN KEY("disciplina_id") REFERENCES "disciplinas"("id");
```
