const Turma = require("../models/Turma")
const Professor = require("../models/Professor")

const createTurma = async (request, response) => {

    try {
        const exists = await Professor.findAll({ where: { id: request.body.professor } })
        if (exists.length > 0) {
           await Turma.create(request.body)
            return response.status(202).json({ message: "Turma creada com sucesso." })

        } else {
            return response.status(400).json({ message: "Professor não cadastrado." })
        }
    } catch (error) {
        return response.status(500).json({ erro: error })
    }

}

module.exports = createTurma; 