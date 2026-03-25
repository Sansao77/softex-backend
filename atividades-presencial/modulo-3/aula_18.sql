/*
-- Atividade 3
-- A tabela abaixo armazena informações de vendas em uma loja.
-- Analise a estrutura e identifique se ela está normalizada.
-- Caso não esteja, aplique a Terceira Forma Normal (3FN), criando novas tabelas necessárias

-- Tabela original (não normalizada)

-----------------------------------------------------------------------------------------------------------------------
| CodVenda | DataVenda  | CodCliente | NomeCliente | Cidade | UF | CodVendedor | NomeVendedor | Comissão | ValorTotal |
| -------- | ---------- | ---------- | ----------- | ------ | -- | ----------- | ------------ | -------- | ---------- |
| 1        | 01/10/2025 | CO1        | Ana Silva   | Recife | PE | V01         | Pedro Lima   | 10%      | 500.00     |
| 2        | 02/10/2025 | CO1        | Ana Silva   | Recife | PE | V02         | Carla Souza  | 8%       | 750.00     |
| 3        | 03/10/2025 | CO2        | João Melo   | Natal  | RN | V01         | Pedro Lima   | 10%      | 600.00     |
-----------------------------------------------------------------------------------------------------------------------

-- Resposta

[X] Está dentro da 1FN? (Verdade)
    --> Não existe tabelas multivaloradas ou repetição

[ ] Está dentro da 2FN? (Falso)
    --> Existe dependências parciais entre colunas, como exemplo: NomeCliente depende de CodVenda e CodCliente

[ ] Está dentro da 3FN? (Falso)
    --> Não está dentro de 2FN
    --> Existe dependências entre campos não chave, como exemplo: NomeVendedor depende de CodVendedor

-- Resolução (Separação e Normalização da Tabela):

--> Tabela Venda (Principal)
-----------------------------------------------------------------
| CodVenda | DataVenda  | CodCliente | CodVendedor | ValorTotal |
| -------- | ---------- | ---------- | ----------- | ---------- |
| 1        | 01/10/2025 | CO1        | V01         | 500.00     |
| 2        | 02/10/2025 | CO1        | V02         | 750.00     |
| 3        | 03/10/2025 | CO2        | V01         | 600.00     |
-----------------------------------------------------------------

--> Tabela Cliente
------------------------------------------
| CodCliente | NomeCliente | Cidade | UF |
| ---------- | ----------- | ------ | -- |
| CO1        | Ana Silva   | Recife | PE |
| CO2        | João Melo   | Natal  | RN |
------------------------------------------

--> Tabela Vendedor
-----------------------------------------
| CodVendedor | NomeVendedor | Comissão |
| ----------- | ------------ | -------- |
| V01         | Pedro Lima   | 10%      |
| V02         | Carla Souza  | 8%       |
-----------------------------------------

*/
-- Demonstração em código SQL

CREATE TABLE venda(
    cod_venda INT PRIMARY KEY AUTO_INCREMENT,
    data_venda DATE NOT NULL,
    cod_cliente VARCHAR(10) NOT NULL,
    cod_vendedor VARCHAR(10) NOT NULL,
    valor_total REAL NOT NULL,

    FOREIGN KEY (cod_cliente) REFERENCES cliente(cod_cliente),
    FOREIGN KEY (cod_vendedor) REFERENCES vendedor(cod_vendedor)
);

CREATE TABLE cliente(
    cod_cliente VARCHAR(10) PRIMARY KEY,
    nome_cliente VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    uf CHAR(2) NOT NULL
);

CREATE TABLE vendedor(
    cod_vendedor VARCHAR(10) PRIMARY KEY,
    nome_vendedor VARCHAR(100) NOT NULL,
    comissao REAL NOT NULL
);
