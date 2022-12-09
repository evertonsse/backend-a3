const { QueryTypes } = require('sequelize');
const db = require("../../dbconfig");


const selectTurmasv2 = async (request, response) => {
    try {
        const  turmas = await db.query(` select
        turmas.id,
        professors.nome as professor,
        turmas.disciplina
      from
        turmas
        join professors on professors.id = turmas.professor;
        `, { type: QueryTypes.SELECT });
        

        if (turmas.length > 0) {
            return response.status(200).json(turmas)

        } else { return response.status(400).json({ message: "Não foi encontrada turmas com essas informações" }) }
    } catch (error) {
        return response.status(500).json({ message: error })
    }
}

module.exports = selectTurmasv2