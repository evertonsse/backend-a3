const { QueryTypes } = require('sequelize');
const db = require("../../dbconfig");


const selectTurmaAluno = async (request, response) => {
    try {
        const  turmas = await db.query(`select turmas.id from turmas`, { type: QueryTypes.SELECT });
        var turmaAlunos = []
        turmas.forEach( async turma => {
            const aluno = await db.query(`select
            turmas.disciplina,
            alunos.nome
          from
            turmas
            join boletims on boletims.turma = turmas.id
            join alunos on alunos.id = boletims.aluno
            where turmas.id = ${turma.id};`, { type: QueryTypes.SELECT });

            const alunoTurmas =  JSON.stringify(`${turma.id }:`+  JSON.stringify(aluno));
                
            turmaAlunos.push(alunoTurmas)                        
            
             }        
        );
        console.log("🚀 ~ file: alunosPorTurma.js ~ line 22 ~ selectTurmaAluno ~ turmaAlunos", turmaAlunos)
      if (turmaAlunos.length > 0) {
            return response.status(200).json(turmaAlunos)

        } else { return response.status(400).json({ message: "Não foi encontrada turmas com essas informações" }) }
    } catch (error) {
        return response.status(500).json({ message: error })
    }
}

module.exports = selectTurmaAluno; 