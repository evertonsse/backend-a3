const Turma = require('../models/Turma')
const { Op } = require("sequelize")


const selectTurmas = async (request, response) => {
    try {
        const { professor, disciplina } = request.query;
        let op = {}
        let haveFilter = false

        if (professor) {
            op.professor = professor
            haveFilter = true

        }

        if (disciplina) {
            op.disciplina = disciplina
            haveFilter = true
        }
        const where = { where: { [Op.or]: { ...op } } }

        let turmas
        if (haveFilter) {
            turmas = await Turma.findAll(where)
        }
        else {
            turmas = await Turma.findAll()
        }

        if (turmas.length > 0) {
            return response.status(200).json(turmas)

        } else { return response.status(400).json({ message: "Não foi encontrada turmas com essas informações" }) }
    } catch (error) {
        return response.status(500).json({ message: error })
    }
}

module.exports = selectTurmas