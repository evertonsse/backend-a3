const Turma = require('../models/Turma') 

const selectTurma = async (request, response) => {
    const { id } = request.params
    try {
        const turma = await Turma.findOne({ where: { id } })

        if (turma) {
            return response.status(202).json({ turma })
        } else {
            return response.status(404).json({ message: "turma não encontrado com este ID" })
        }
    } catch (error) {
        return response.status(500).json({ error })
    }
}

module.exports = selectTurma; 