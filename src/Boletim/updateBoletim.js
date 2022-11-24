const Boletim = require("../models/Boletim");

const updateBoletim = async (request, response) => {
    const id = request.params.id;
    const { aluno, turma, nota } = request.body;
    
    try {

        let update = {};
        if (aluno) {
            update.aluno = aluno;
        }
        

        if (turma) {
            update.turma = turma;
        }

        if (nota) {
            update.nota = nota;
           
            if (nota < 6) {
                update.aprovado = false
            } else {
                update.aprovado = true
            }
        }
        
        
        
        await Boletim.update(update, { where: { id } })
        return response.status(200).json({ message: "Registro Atualizado." })

    } catch (error) {
        return response.status(500).json({ error })
    }

}
module.exports = updateBoletim; 