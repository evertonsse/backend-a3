const Professor = require('../models/Professor')
const { Op } = require("sequelize")

const selectProfessores = async (request, response) => {

    try {
        const { cpf, titulosAcademicos, disciplina, nome } = request.query
        let op = {}
        let temfiltro = false 
        if (cpf) {
            op.cpf = cpf
            temfiltro = true
        }
        if (titulosAcademicos) {
            op.titulosAcademicos = titulosAcademicos
            temfiltro = true
            
        }

        if (disciplina) {
            op.disciplina = disciplina
            temfiltro = true
            
        }

        if (nome) {
            op.nome = nome
            temfiltro = true  

        }

        let professor 
        const where = { where: { [Op.or]: { ...op } } }
        

        if (temfiltro) {
            professor = await Professor.findAll(where)
        } else { 
            professor = await Professor.findAll()
        }
        

        if (professor.length > 0) {
            return response.status(200).json(professor)
        } else {
            return response.status(404).json({ message: "Nenhum professor encontrado..." })
        }

    } catch (error) {
        return response.status(500).json({ message: error })
    }

}
module.exports = selectProfessores; 
