/*2) Escreva uma consulta SQL para retornar dados únicos conforme tabela abaixo.
Caso o aluno tenha mais de dois responsáveis, traga apenas os dois primeiros
responsáveis encontrados na tabela.*/

SELECT aluno.Nome AS aluno, r1.Nome AS responsavel1, p1.Parentesco AS parentesco1, r2.Nome AS responsavel2, p2.Parentesco AS parentesco2
FROM Aluno aluno
LEFT JOIN (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY IdAluno ORDER BY ParentescoId) AS rn
    FROM Parentesco
) p1 ON aluno.Id = p1.IdAluno AND p1.rn = 1
LEFT JOIN Responsavel r1 ON p1.IdResponsavel = r1.Id
LEFT JOIN (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY IdAluno ORDER BY ParentescoId) AS rn
    FROM Parentesco
) p2 ON aluno.Id = p2.IdAluno AND p2.rn = 2
LEFT JOIN Responsavel r2 ON p2.IdResponsavel = r2.Id
