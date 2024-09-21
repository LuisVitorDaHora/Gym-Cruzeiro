CREATE DATABASE GymCruzeiroAcademia;
USE GymCruzeiroAcademia; 

CREATE TABLE alunos (
    id_aluno INT NOT NULL AUTO_INCREMENT, 
    nome VARCHAR(100) NOT NULL, 
    dt_nasc DATE NOT NULL, 
    sexo CHAR(1) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(100),
    CPF VARCHAR(12) NOT NULL,
    dt_inscricao DATE NOT NULL,
    status VARCHAR(10) NOT NULL,
    PRIMARY KEY (id_aluno)
);

CREATE TABLE instrutores (
    id_instrutor INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    dt_nascimento DATE NOT NULL,
    sexo CHAR(1) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(100),
    CPF VARCHAR(12) NOT NULL,
    especialidade VARCHAR(50) NOT NULL,
    dt_contratacao DATE NOT NULL,
    PRIMARY KEY (id_instrutor)
);

CREATE TABLE avali_fisica (
    id_avaliacao INT NOT NULL AUTO_INCREMENT,
    dt_avaliacao DATE NOT NULL,
    id_aluno INT NOT NULL, 
    peso DECIMAL(5,2) NOT NULL,
    altura DECIMAL(5,2) NOT NULL,
    IMC DECIMAL(4,2) NOT NULL,
    objetivo VARCHAR(40),
    id_instrutor_fk INT NOT NULL,
    PRIMARY KEY (id_avaliacao),
    FOREIGN KEY (id_instrutor_fk) REFERENCES instrutores(id_instrutor)
);

CREATE TABLE frequencia (
    id_frequencia INT NOT NULL AUTO_INCREMENT,
    dt_presenca DATE NOT NULL,
    id_aluno_fk INT NOT NULL,
    PRIMARY KEY (id_frequencia),
    FOREIGN KEY (id_aluno_fk) REFERENCES alunos(id_aluno)
);

CREATE TABLE treinos (
    id_treino INT NOT NULL AUTO_INCREMENT,
    nome_treino VARCHAR(100) NOT NULL,
    descricao VARCHAR(300),
    dt_criacao DATE NOT NULL,
    id_aluno_fk INT NOT NULL,
    id_instrutor_fk INT NOT NULL,
    PRIMARY KEY (id_treino),
    FOREIGN KEY (id_aluno_fk) REFERENCES alunos(id_aluno),
    FOREIGN KEY (id_instrutor_fk) REFERENCES instrutores(id_instrutor)
);

CREATE TABLE exercicios (
    id_exercicio INT NOT NULL AUTO_INCREMENT,
    nome_exercicio VARCHAR(100) NOT NULL,
    descricao VARCHAR(300) NOT NULL,
    PRIMARY KEY (id_exercicio)
);

CREATE TABLE treino_exercicio (
    id_treino_exerc INT NOT NULL AUTO_INCREMENT,
    repeticoes INT NOT NULL,
    series INT NOT NULL,
    carga DECIMAL(5,2) NULL,
    id_treino_fk INT NOT NULL,
    id_exercicio_fk INT NOT NULL,
    PRIMARY KEY (id_treino_exerc),
    FOREIGN KEY (id_treino_fk) REFERENCES treinos(id_treino),
    FOREIGN KEY (id_exercicio_fk) REFERENCES exercicios(id_exercicio)
);


insert into alunos (id_aluno, nome, dt_nasc, sexo, endereco, telefone, email, CPF, dt_inscricao, status) values
(1, 'Caio Guedes', '2004-08-14', 'M', 'Rua das Flores', '99854-5555', 'caio_guedes@gmail.com', '008547213-91', '2024-08-01', 'Ativo'),
(2, 'Thaissa Rodrigues', '1999-04-05', 'F', 'Travessa Olaria', '98778-5432', 'thaissarodrigues@gmail.com', '521478587-10', '2022-01-30', 'Ativo'),
(3, 'Lucas Sgalla', '1985-05-21', 'M', 'Rua Benedito de Souza', '96657-4585', 'lucas_sgalla@hotmail.com', '555741258-25', '2023-09-09', 'Ativo'),
(4, 'Luis Da Hora', '1970-01-25', 'M', 'Avenida Paulo Ayres', '95587-9966', 'luisdahora@yahoo.com', '123456789-15', '2024-05-10', 'Ativo'),
(5, 'Elisangela Silva', '1995-06-01', 'F', 'Rua Jalapão', '93541-5588', 'elisangela_silva@outlook.com','958745523-50', '2023-10-10', 'Ativo');

INSERT INTO instrutores (id_instrutor, nome, dt_nascimento, sexo, telefone, email, CPF, especialidade, dt_contratacao) VALUES
(1, 'Carlos Oliveira', '1985-02-10', 'M', '99876-5432', 'carlos.oliveira@email.com', '111222333-50', 'Musculação', '2020-01-15'),
(2, 'Roberto Almeida', '1987-09-30', 'M', '96543-2109', 'roberto.almeida@email.com', '333444555-10', 'Cardio', '2021-02-10'),
(3, 'Fernanda Lima', '1992-11-15', 'F', '93456-8765', 'fernanda.lima@email.com', '444555666-10', 'HIIT', '2019-04-12'),
(4, 'Larissa Silva', '1990-06-10', 'F', '97755-5421', 'larissa.silva@email.com', '777777777-50', 'Musculação', '2023-10-01'),
(5, 'Roberto Almeida', '1995-03-25', 'M', '96543-2109', 'roberto.almeida@email.com', '858585858-10', 'Cardio', '2021-05-30');

insert into avali_fisica (id_avaliacao, dt_avaliacao, id_aluno, peso, altura, IMC, objetivo, id_instrutor_fk) values
(1, '2024-08-01', 1, 70, 1.75, 22.9, 'Melhorar condicionamento físico', 1),
(2, '2024-08-02', 2, 65, 1.60, 25.4, 'Perder peso', 2),
(3, '2024-08-03', 3, 80, 1.80, 24.7, 'Aumentar massa muscular', 3),
(4, '2024-08-04', 4, 60, 1.70, 20.7, 'Manter forma', 4),
(5, '2024-08-05', 5, 90, 1.85, 26.3, 'Perder peso', 5);

insert into frequencia (id_frequencia, dt_presenca, id_aluno_fk) values
(1, '2024-09-10', 1),
(2, '2024-09-05', 2),
(3, '2024-09-07', 3),
(4, '2024-09-04', 4),
(5, '2024-09-05', 5);

insert into treinos (id_treino, nome_treino, descricao, dt_criacao, id_aluno_fk, id_instrutor_fk) values
(1, 'Treino de Força', 'Treino focado em ganho de massa muscular.', '2024-08-01', 1, 1),
(2, 'Treino Cardio', 'Treino para melhorar o condicionamento cardiovascular.', '2024-08-02', 2, 2),
(3, 'Treino HIIT', 'Treino intervalado de alta intensidade.', '2024-08-03', 3, 3);

insert into exercicios (id_exercicio, nome_exercicio, descricao) values
(1, 'Rosca Direta (Barra)', 'Fique em pé com uma barra nas mãos, braços estendidos. Flexione os cotovelos para levantar a barra em direção ao peito, mantendo os cotovelos fixos.'),
(2, 'Rosca Alternada (Halteres)', 'Com halteres nas mãos, levante um de cada vez em um movimento alternado, flexionando o cotovelo e trazendo o haltere em direção ao ombro.'),
(3, 'Rosca Concentrada', 'Sente-se com um haltere em uma mão, apoie o cotovelo na parte interna da coxa e levante o haltere até o ombro. Isola o bíceps de forma intensa.'),
(4, 'Rosca Martelo (Halteres)', 'Segure halteres com as palmas das mãos voltadas uma para a outra (pegada neutra) e flexione os cotovelos, trazendo os pesos para o peito.'),
(5, 'Rosca Scott (Banco Scott)', 'Sentado em um banco Scott, segure uma barra ou halteres e faça a flexão de cotovelo, isolando os bíceps ao apoiar os braços no banco inclinado.');

insert into treino_exercicio (id_treino_exerc, repeticoes, series, carga, id_treino_fk, id_exercicio_fk) values
(1, 12, 3, null, 1, 1),
(2, 10, 4, null, 2, 2),
(3, 12, 4, null, 3, 3);