
const Professor = require('../models/Professor')

const selectProfessor = async (request, response) => {
    const { id } = request.params
    try {
        const professor = await Professor.findOne({ where: { id } })

        if (professor) {
            return response.status(202).json({ professor })
        } else {
            return response.status(404).json({ message: "Professor não encontrado com este ID" })
        }
    } catch (error) {
        return response.status(500).json({ error })
    }
}

module.exports = selectProfessor; 