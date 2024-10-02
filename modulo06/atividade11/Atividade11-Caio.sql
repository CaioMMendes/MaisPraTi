-- A cafeteria BomGosto deseja controlar as suas vendas de café. A BomGosto controla suas vendas a partir de uma comanda. Uma comanda tem um código único, data,
-- o número da mesa do cliente e o nome do cliente registrados. Nos itens da comanda é possível relacionar vários cafés listados no cardápio que foram vendidos. 
-- Cada item da comanda possui o código do cardápio e a quantidade requisitada deste e, não é possível inserir o mesmo código de cardápio mais de uma vez na mesma comanda.
-- No cardápio é apresentado o nome único do café, a descrição da sua composição e o preço unitário.

-- Desenvolva os scripts SQL para atender cada uma das questões abaixo:

-- 1) Faça uma listagem do cardápio ordenada por nome;
-- 2) Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda
--  (código comanda, nome do café, descricão, quantidade, preço unitário e preço total do café) destas ordenados data e código da comanda e, também o nome do café;
-- 3) Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda. Ordene por data esta listagem;
-- 4) Faça a mesma listagem das comandas da questão anterior (6), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;
-- 5) Qual o total de faturamento por data? ordene por data esta consulta.

CREATE schema atividade11;

USE atividade11;


CREATE TABLE comanda(
comanda_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
data_comanda DATE NOT NULL,
mesa INT NOT NULL,
nome_cliente VARCHAR(100) NOT NULL
);

CREATE TABLE cardapio(
cardapio_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
nome_cafe VARCHAR(100),
descricao VARCHAR(255),
preco_unitario DECIMAL(5,2) NOT NULL
);

CREATE TABLE itemsComanda(
	item_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    comanda_id INT NOT NULL,
    cardapio_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco_total DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (comanda_id) REFERENCES comanda(comanda_id),
    FOREIGN KEY (cardapio_id) REFERENCES cardapio(cardapio_id),
    unique(comanda_id,cardapio_id)
);


INSERT INTO comanda (data_comanda, mesa, nome_cliente) VALUES
('2024-09-18', 1, 'João Silva'),
('2024-09-18', 2, 'Maria Oliveira'),
('2024-09-18', 3, 'Pedro Santos'),
('2024-09-18', 4, 'Ana Costa'),
('2024-09-18', 5, 'Carlos Pereira'),
('2024-09-19', 1, 'Fernanda Lima'),
('2024-09-19', 2, 'Lucas Almeida'),
('2024-09-19', 3, 'Isabela Rodrigues'),
('2024-09-19', 4, 'Rafael Fernandes'),
('2024-09-19', 5, 'Juliana Souza');


INSERT INTO cardapio (nome_cafe, descricao, preco_unitario) VALUES
('Café Expresso', 'Café expresso forte e encorpado', 4.50),
('Cappuccino', 'Café com leite e espuma', 5.00),
('Latte', 'Café com leite vaporizado', 5.50),
('Mocha', 'Café com chocolate e creme', 6.00),
('Macchiato', 'Café expresso com um toque de leite', 4.75),
('Americano', 'Café expresso diluído em água quente', 4.25),
('Café au Lait', 'Café com leite quente', 5.25),
('Affogato', 'Café expresso sobre sorvete', 6.50),
('Ristretto', 'Café expresso mais concentrado', 4.75),
('Café Cortado', 'Café expresso com um pouco de leite', 4.50);

INSERT INTO itemsComanda (comanda_id, cardapio_id, quantidade, preco_total) VALUES
(1, 1, 2, 9.00),
(1, 2, 1, 5.00),
(2, 3, 3, 16.50),
(2, 4, 1, 6.00),
(3, 5, 2, 9.50),
(4, 6, 1, 4.25),
(4, 7, 2, 10.50),
(5, 8, 1, 6.50),
(6, 9, 2, 9.50),
(7, 10, 1, 4.50);



-- 1) Faça uma listagem do cardápio ordenada por nome;
SELECT * FROM cardapio 
ORDER BY nome_cafe ASC;

-- 2) Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda
--  (código comanda, nome do café, descricão, quantidade, preço unitário e preço total do café) destas ordenados data e código da comanda e, também o nome do café;
SELECT c.*,ic.*,cd.* FROM comanda c INNER JOIN itemsComanda ic 
ON c.comanda_id=ic.comanda_id
INNER JOIN cardapio cd ON ic.cardapio_id=cd.cardapio_id
ORDER BY c.data_comanda,c.comanda_id,cd.nome_cafe;

-- 3) Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda. Ordene por data esta listagem;
SELECT c.*,Sum(ic.preco_total) AS valor_total FROM comanda c
INNER JOIN itemsComanda ic ON c.comanda_id=ic.comanda_id
GROUP BY c.comanda_id
ORDER BY c.data_comanda;

-- 4) Faça a mesma listagem das comandas da questão anterior (6), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;
SELECT c.*,Sum(ic.preco_total) AS valor_total FROM comanda c
INNER JOIN itemsComanda ic ON c.comanda_id=ic.comanda_id
GROUP BY c.comanda_id
HAVING count(ic.cardapio_id)>1
ORDER BY c.data_comanda;

-- 5) Qual o total de faturamento por data? ordene por data esta consulta.
SELECT c.data_comanda, Sum(ic.preco_total) AS faturamento_total
FROM comanda c
INNER JOIN itemscomanda ic ON c.comanda_id=ic.comanda_id
GROUP BY c.data_comanda
ORDER BY c.data_comanda;


