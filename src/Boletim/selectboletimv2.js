const { QueryTypes } = require('sequelize');
const db = require("../../dbconfig");


const selectBoletinsv2 = async (request, response) => {
    try {
        console.log("teste")
        const  boletins = await db.query(` select
            boletims.id,
            alunos.nome as aluno,
            turmas.disciplina as turma, 
            boletims.aprovado, 
            boletims.nota

        from
            boletims
            join alunos on boletims.aluno = alunos.id
            join turmas on boletims.turma = turmas.id;
        `, { type: QueryTypes.SELECT });
        

         return response.status(200).json({boletins}) 

    } catch (error) {
        return response.status(500).json({error})
    }

}

module.exports = selectBoletinsv2; 