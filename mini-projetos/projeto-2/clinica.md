# Clínica Vida Plena e Saúde

## Tarefas

1. Identifique as Entidades e Atributos

  ```txt
    ----------------------------
    | Pacientes                |
    ----------------------------
    | id: number               |
    | CPF: string              |
    | nome: string             |
    | data_nascimento: string  |
    | telefone: string         |
    ----------------------------

    ----------------------------
    | Medicos                  |
    ----------------------------
    | id: number               |
    | CRM: string              |
    | nome: string             |
    | especialidade: string    |
    | telefone: string         |
    ----------------------------

    ----------------------------
    | Consultas                |
    ----------------------------
    | id: number               |
    | paciente_id: number      |
    | medico_id: number        |
    | data: string             |
    | hora: string             |
    | tipo: string             |
    | status: string           |
    ----------------------------
  ```

2. Monte o DER (Diagrama de Entidade-Relacionamento) conceitual

  - Propriedades

    - Pacientes: id, CPF, nome, data_nascimento, telefone
    - Medicos: id, CRM, nome, especialidade, telefone
    - Consultas: id, paciente_id, medico_id, data, hora, tipo, status

  - Relacionamentos

    - Paciente solicita a Consulta
    - Consulta engloba Paciente e Medico
    - Medico marca a Consulta

3. Transforme o modelo conceitual em modelo lógico relacional

  ![SQL Clínica Vida Plena e Saúde](/media/sansao/CANAIS/projetos/javascript/softex-backend/public/drawSQL-clinica.png)

4. Identifique as chaves primarias e secundarias

  - Pacientes: id (Primary Key), CPF (Unique Key), nome, data_nascimento, telefone
  - Medicos: id (Primary Key), CRM (Unique Key), nome, especialidade, telefone
  - Consultas: id (Primary Key), paciente_id (Foreign Key), medico_id (Foreign Key), data, hora, tipo, status

5. Aplique até a Terceira Forma Normal (3FN)
  R: Foi aplicada no SQL

  ```sql
  CREATE TABLE "medicos"(
      "id" BIGINT NOT NULL,
      "CRM" VARCHAR(255) NOT NULL,
      "nome" TEXT NOT NULL,
      "especialidade" TEXT NOT NULL,
      "telefone" VARCHAR(255) NOT NULL
  );
  -- Definição da chave primaria de medicos
  ALTER TABLE
      "medicos" ADD PRIMARY KEY("id");

  CREATE TABLE "pacientes"(
      "id" BIGINT NOT NULL,
      "CPF" VARCHAR(255) NOT NULL,
      "nome" TEXT NOT NULL,
      "data_nascimento" DATE NOT NULL,
      "telefone" VARCHAR(255) NOT NULL
  );
  -- Definição da chave primaria de pacientes
  ALTER TABLE
      "pacientes" ADD PRIMARY KEY("id");

  CREATE TABLE "consultas"(
      "id" BIGINT NOT NULL,
      "paciente_id" BIGINT NOT NULL,
      "medico_id" BIGINT NOT NULL,
      "data" DATE NOT NULL,
      "hora" TIME(0) WITHOUT TIME ZONE NOT NULL,
      "tipo" VARCHAR(255) NOT NULL,
      "status" VARCHAR(255) NOT NULL
  );
  -- Definição da chave primaria de consultas
  ALTER TABLE
      "consultas" ADD PRIMARY KEY("id");

  -- Definição das chaves estrangeiras

  ALTER TABLE
      "consultas" ADD CONSTRAINT "consultas_medico_id_foreign" FOREIGN KEY("medico_id") REFERENCES "medicos"("id");
  ALTER TABLE
      "consultas" ADD CONSTRAINT "consultas_paciente_id_foreign" FOREIGN KEY("paciente_id") REFERENCES "pacientes"("id");
  ```
