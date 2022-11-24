const Aluno = require("../models/Aluno")
const { Op } = require("sequelize")

const selectAlunos = async (request, response) => {
    try {
        const { matricula, cpf } = request.query

        let op = {}
        let temFiltro = false 
        if (matricula) {
            op.matricula = matricula
            temFiltro = true;
        }
        if (cpf) {
            op.cpf = cpf
            temFiltro = true;
        }
        const where = { where: { [Op.or]: { ...op } } }
        let alunos = {}
        if (temFiltro) { 
            alunos = await Aluno.findAll(where);
        } else { 
            alunos = await Aluno.findAll();
        }

        
        if (alunos.length > 0) {
            return response.status(200).json(alunos)
        }
        else {
            return response.status(404).json({ message: "Nenhum aluno encontrado..." })
        }

    } catch (error) {
        return response.status(500).json({ error })
    }
}
module.exports = selectAlunos; 