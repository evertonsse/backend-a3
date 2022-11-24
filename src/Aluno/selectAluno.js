const Aluno = require("../models/Aluno")

const selectAluno = async (request, response) => {
    
    try {

        const aluno = await Aluno.findOne({ where: { id : request.params.id} })
        console.log("🚀 ~ file: selectAluno.js ~ line 8 ~ selectAluno ~ params", request.params.id)

        if (aluno) {
            return response.status(200).json({ aluno })
        } else {
            return response.status(404).json({ message: "Aluno não encontrado com este ID" })
        }
    } catch (error) {
        return response.status(500).json({ error })
    }
}




module.exports = selectAluno