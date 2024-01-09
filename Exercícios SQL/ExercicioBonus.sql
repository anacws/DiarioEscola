/*Bônus:
1) Escreva uma consulta SQL para trazer todos os dados. Seja criativo.*/

SELECT 'Aluno' AS Tipo, Id AS ID_Aluno, Nome AS Nome_Aluno FROM Aluno
UNION ALL
SELECT 'Responsavel' AS Tipo, Id AS ID_Responsavel, Nome AS Nome_Responsavel FROM Responsavel
UNION ALL
SELECT 'Parentesco' AS Tipo, ParentescoId AS ID_Parentesco, IdAluno AS ID_Aluno, IdResponsavel AS ID_Responsavel, Parentesco FROM Parentesco;
