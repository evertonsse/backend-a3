const Boletim = require('../models/Boletim')


const selectBoletins = async (request, response) => {
    try {
        const { aluno, turma } = request.query

        let op = {}
        let haveFilter = false

        if (aluno) {
            op.aluno = aluno
            haveFilter = true
        }
        if (turma) {
            op.turma = turma
            haveFilter = true
        }
        const where = { where: { [op.or]: { ...op } } }
        let boletins  
        if (haveFilter) { 
            boletins = await Boletim.findAll(where)
        } else { 
            boletins = await Boletim.findAll()
        }

        return response.status(200).json({boletins}) 

    } catch (error) {
        return response.status(500).json({error: error})
    }

}

module.exports = selectBoletins