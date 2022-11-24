const Aluno = require("../models/Aluno");


const deleteAluno =async (request, response) => {

    const id = request.params.id;
    try {
        if (Aluno.destroy({ where: { id } })) {
            return response.status(200).json({ message: "Registro Deletado." })
        } else {
            return response.status(300).json({ message: "Erro ao deletar registro" })
        }
    } catch (error) {
        return response.status(500).json({ error })
    }

}

module.exports = deleteAluno;