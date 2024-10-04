
## Atividade 12 - Construção e Consulta em Bancos de Dados MySQL III

Estudo de Caso - Escola de Informática

Uma escola de informática deseja manter um controle do seu funcionamento. Os alunos são organizados em turmas associadas a um tipo específico de curso. As informações sobre uma turma são a quantidade de alunos, horário da aula, duração da aula, data inicial, data final e tipo de curso. Cada turma é orientada por um único professor para o qual são cadastrados CPF, nome, data de nascimento, titulação e todos os telefones possíveis para sua localização. Um professor pode orientar várias turmas que podem ser de diferentes cursos. Para cada turma existe um aluno monitor que auxilia o professor da turma, sendo que um aluno pode ser monitor no máximo em uma turma. Os dados cadastrados dos alunos são: código de matricula, data de matrícula, nome, endereço, telefone, data de nascimento, altura e peso. Um aluno pode estar matriculado em várias turmas se deseja realizar cursos diferentes e para cada matrícula é mantido um registro das ausências do aluno.

Fazer consultas SQL que respondam as seguINTes questões:

1) Listar os dados dos alunos;
2) Listar os dados dos alunos e as turmas que eles estão matriculados;
3) Listar os alunos que não possuem faltas;
4) Listar os professores e a quantidade de turmas que cada um leciona;
5) Listar nome dos professores, apenas um dos números de telefone do professor, dados (id da turma, data início, data fim e horário) das turmas que o professor leciona, curso da turma e alunos matriculados ordenado por nome do professor, id turma e nome do aluno;

Fazer alterações nas tabelas:

1) Alterar o nome de todos os professores para maiúsculo;
2) Colocar o nome de todos os alunos que estão na turma com o maior número de alunos em maiúsculo;
3) Excluir as ausências dos alunos nas turmas que estes são monitores;

##

```sql


CREATE SCHEMA atividade12;

USE atividade12;



CREATE TABLE curso(
cursoId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
tipoCurso VARCHAR(100) NOT NULL UNIQUE
);


CREATE TABLE professor(
professorId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
cpf VARCHAR(15),
nome VARCHAR(100) NOT NULL,
dataNAscimento DATE NOT NULL,
titulacao VARCHAR(30) NOT NULL
);

CREATE TABLE monitorTurma(
monitorTurmaId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alunoId INT NOT NULL,
turmaId INT NOT NULL
);

CREATE TABLE phones(
phonesId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
userId INT NOT NULL,
phone VARCHAR(20) NOT NULL,
CONSTRAINT userId FOREIGN KEY (userId) 
 REFERENCES professor(professorId) ON DELETE CASCADE
);

CREATE TABLE alunos (
alunoId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
monitorTurmaId INT, -- Referência ao monitor em turma
codigoMatricula INT NOT NULL,
dataMatricula DATE NOT NULL,
nome VARCHAR(100) NOT NULL,
endereco VARCHAR(200) NOT NULL,
telefone VARCHAR(20),
dataNascimento DATE NOT NULL,
altura Decimal(5,2) NOT NULL,
peso Decimal(5,2) NOT NULL,
CONSTRAINT monitorTurmaId FOREIGN KEY (monitorTurmaId) 
 REFERENCES monitorTurma(monitorTurmaId) ON DELETE SET NULL
);


CREATE TABLE turma (
turmaId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
quantidadeAlunos INT NOT NULL,
horarioAula TIME NOT NULL,
duracao INT NOT NULL,
dataInicial DATE NOT NULL,
dataFinal DATE NOT NULL, 
tipoCurso VARCHAR(100) NOT NULL,
professorId INT NOT NULL,
monitorTurmaId INT, 
CONSTRAINT tipoCurso FOREIGN KEY (tipoCurso) 
 REFERENCES curso(tipoCurso) ON DELETE CASCADE,
CONSTRAINT professorId FOREIGN KEY (professorId) 
 REFERENCES professor(professorId) ON DELETE CASCADE,
CONSTRAINT fk_monitorTurmaId FOREIGN KEY (monitorTurmaId) 
 REFERENCES monitorTurma(monitorTurmaId) ON DELETE SET NULL
);




CREATE TABLE matricula (
matriculaId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alunoId INT NOT NULL,
turmaId INT NOT NULL,
ausencia INT NOT NULL default 0,
CONSTRAINT alunoId FOREIGN KEY (alunoId) 
 REFERENCES alunos(alunoId) ON DELETE CASCADE,
CONSTRAINT turmaId FOREIGN KEY (turmaId) 
 REFERENCES turma(turmaId) ON DELETE CASCADE
);


-- Inserindo dados na tabela `curso`
INSERT INTO curso (tipoCurso) VALUES
('Matemática'),
('História'),
('Ciências'),
('Geografia'),
('Física'),
('Química'),
('Literatura'),
('Biologia'),
('Educação Física'),
('Filosofia');



-- Inserindo dados na tabela `professor`
INSERT INTO professor (cpf, nome, dataNascimento, titulacao) VALUES
('123.456.789-00', 'João Silva', '1980-05-15', 'Mestre'),
('987.654.321-00', 'Maria Oliveira', '1975-10-22', 'Doutora'),
('555.444.333-00', 'Pedro Santos', '1988-07-30', 'Graduado'),
('111.222.333-44', 'Ana Costa', '1990-12-11', 'Mestre'),
('234.567.890-12', 'Carlos Almeida', '1983-03-22', 'Doutor'),
('890.123.456-78', 'Luciana Ferreira', '1985-08-30', 'Mestre'),
('678.912.345-67', 'Rafael Souza', '1992-02-15', 'Graduado'),
('345.678.901-23', 'Juliana Pereira', '1979-06-11', 'Doutora'),
('567.890.123-45', 'Gabriel Lima', '1987-04-18', 'Mestre'),
('456.789.012-34', 'Mariana Borges', '1982-11-05', 'Graduada');



-- Inserindo dados na tabela `monitorTurma`
INSERT INTO monitorTurma (alunoId, turmaId) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 3),
(6, 3),
(7, 4),
(8, 4),
(9, 5),
(10, 5);




-- Inserindo dados na tabela `turma`
INSERT INTO turma (quantidadeAlunos, horarioAula, duracao, dataInicial, dataFinal, tipoCurso, professorId, monitorTurmaId) VALUES
(30, '08:00:00', 60, '2024-01-15', '2024-06-15', 'Matemática', 1, 1),
(25, '10:00:00', 90, '2024-02-01', '2024-07-01', 'História', 2, 2),
(20, '14:00:00', 45, '2024-03-01', '2024-08-01', 'Ciências', 3, 3),
(15, '16:00:00', 75, '2024-04-01', '2024-09-01', 'Geografia', 4, 4),
(28, '09:00:00', 60, '2024-01-15', '2024-06-15', 'Física', 5, 5),
(22, '11:00:00', 90, '2024-02-01', '2024-07-01', 'Química', 6, NULL),
(18, '13:00:00', 60, '2024-03-01', '2024-08-01', 'Literatura', 7, NULL),
(12, '15:00:00', 75, '2024-04-01', '2024-09-01', 'Biologia', 8, NULL),
(30, '08:30:00', 60, '2024-01-15', '2024-06-15', 'Educação Física', 9, NULL),
(25, '10:30:00', 90, '2024-02-01', '2024-07-01', 'Filosofia', 10, NULL);



-- Inserindo dados na tabela `alunos`
INSERT INTO alunos (monitorTurmaId, codigoMatricula, dataMatricula, nome, endereco, telefone, dataNascimento, altura, peso) VALUES
(1, 1001, '2024-01-10', 'Lucas Pereira', 'Rua A, 123', '1111-1111', '2000-03-01', 1.75, 70.0),
(2, 1002, '2024-01-12', 'Julia Almeida', 'Rua B, 456', '2222-2222', '1999-04-15', 1.68, 60.0),
(3, 1003, '2024-01-15', 'Pedro Lima', 'Rua C, 789', '3333-3333', '2001-07-20', 1.80, 80.0),
(4, 1004, '2024-01-20', 'Camila Souza', 'Rua D, 101', '4444-4444', '2002-10-05', 1.65, 55.0),
(5, 1005, '2024-01-25', 'Bruno Costa', 'Rua E, 202', '5555-5555', '1998-11-21', 1.78, 75.0),
(6, 1006, '2024-01-28', 'Sara Lima', 'Rua F, 303', '6666-6666', '1997-05-18', 1.70, 62.0),
(7, 1007, '2024-02-02', 'Ricardo Fernandes', 'Rua G, 404', '7777-7777', '2000-01-10', 1.85, 85.0),
(8, 1008, '2024-02-05', 'Fernanda Martins', 'Rua H, 505', '8888-8888', '1999-08-12', 1.60, 50.0),
(9, 1009, '2024-02-10', 'Gustavo Rocha', 'Rua I, 606', '9999-9999', '2001-09-30', 1.82, 78.0),
(10, 1010, '2024-02-15', 'Patricia Silva', 'Rua J, 707', '1010-1010', '1998-06-25', 1.67, 58.0);



-- Inserindo dados na tabela `matricula`
INSERT INTO matricula (alunoId, turmaId, ausencia) VALUES
(1, 5, 0),
(2, 6, 2),
(3, 7, 1),
(4, 8, 0),
(5, 9, 1),
(6, 9, 3),
(7, 3, 0),
(8, 4, 1),
(9, 2, 2),
(10, 5, 0);


-- Inserindo dados na tabela `phones`
INSERT INTO phones (userId, phone) VALUES
(1, '9999-9999'),
(2, '8888-8888'),
(3, '7777-7777'),
(4, '6666-6666'),
(5, '5555-5555'),
(6, '4444-4444'),
(7, '3333-3333'),
(8, '2222-2222'),
(9, '1111-1111'),
(10, '1010-1010');


-- Fazer consultas SQL que respondam as seguINTes questões:

-- 1) Listar os dados dos alunos;
SELECT * FROM alunos;

-- 2) Listar os dados dos alunos e as turmas que eles estão matriculados;
SELECT alunos.*,turma.turmaId,turma.tipocurso FROM alunos
INNER JOIN matricula ON alunos.alunoId=matricula.alunoId
INNER JOIN turma ON matricula.turmaId=turma.turmaId;

-- 3) Listar os alunos que não possuem faltas;
SELECT * FROM alunos INNER JOIN matricula 
ON matricula.alunoId=alunos.alunoId 
WHERE ausencia=0;


-- 4) Listar os professores e a quantidade de turmas que cada um leciona;
SELECT p.nome, count(t.turmaId) AS qtd_turmas FROM professor p
INNER JOIN turma t ON p.professorId =t.professorId
GROUP BY p.nome;


-- 5) Listar nome dos professores, apenas um dos números de telefone do professor, dados (id da turma, data início, data fim e horário) das turmas que o professor leciona,
-- curso da turma e alunos matriculados ordenado por nome do professor, id turma e nome do aluno;
SELECT p.nome AS professor_nome, MIN(tp.phone), t.turmaId, 
       t.datainicial, t.datafinal, t.horarioaula, t.tipoCurso, 
       a.nome AS aluno_nome
FROM professor p
INNER JOIN phones tp ON p.professorId = tp.phonesId
INNER JOIN turma t ON p.professorId = t.professorId
INNER JOIN matricula m ON t.turmaId = m.turmaId
INNER JOIN alunos a ON m.alunoId = a.alunoId
GROUP BY p.nome, t.turmaId, t.datainicial, t.datafinal, 
         t.horarioaula, t.tipoCurso, a.nome
ORDER BY p.nome, t.turmaId, a.nome;



-- Fazer alterações nas tabelas:


-- 1) Alterar o nome de todos os professores para maiúsculo;
UPDATE professor
SET nome=UPPER(nome)
WHERE professorId>0;

-- 2) Colocar o nome de todos os alunos que estão na turma com o maior número de alunos em maiúsculo;
UPDATE alunos 
SET nome=upper(nome)
WHERE alunoId IN(
SELECT m.alunoId FROM matricula m
INNER JOIN turma t ON m.turmaId =t.turmaId
WHERE t.quantidadeAlunos=(SELECT max(quantidadeAlunos) FROM turma)
);


-- 3) Excluir as ausências dos alunos nas turmas que estes são monitores;
SET SQL_SAFE_UPDATES = 0;

UPDATE matricula m
INNER JOIN turma t ON m.turmaId = t.turmaid
SET m.ausencia = 0
WHERE m.alunoid= t.monitorturmaId;

SET SQL_SAFE_UPDATES = 1;



```
