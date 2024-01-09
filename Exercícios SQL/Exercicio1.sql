/*1) Escreva comandos SQL para inserir os dados abaixo conforme o diagrama
apresentado

Comandos para criação das tabelas:*/
 
CREATE TABLE Aluno (
  Id NUMBER PRIMARY KEY,
  Nome VARCHAR2(100) 
);

CREATE TABLE Responsavel (
  Id NUMBER PRIMARY KEY,
  Nome VARCHAR2(100) 
);

CREATE TABLE Parentesco (
  ParentescoId NUMBER PRIMARY KEY,
  IdAluno NUMBER,
  IdResponsavel NUMBER,
  ParentescoTipo VARCHAR2(20), 
  FOREIGN KEY (IdAluno) REFERENCES Aluno(Id),
  FOREIGN KEY (IdResponsavel) REFERENCES Responsavel(Id)
);

/*Comandos para inserção de dados:*/
        
INSERT INTO Aluno VALUES (1,'Lucas');

INSERT INTO Responsavel VALUES (1,'Pablo');
INSERT INTO Responsavel VALUES (2,'Brenda');

/*a) Pablo é Pai de Lucas:*/
INSERT INTO Parentesco VALUES (1,1,1,'Pai');

/*b) Brenda é Mãe de Lucas:*/
INSERT INTO Parentesco VALUES (2,1,2,'Mãe');


