const Boletim = require('../models/Boletim')
const Aluno = require('../models/Aluno')
const Turma = require('../models/Turma')


const createBoletim = async (request, response) => {
    const { aluno, turma, nota } = request.body;

    try {
          
       
        if (nota < 6) {
            await Boletim.create({
                aluno,
                turma,
                nota,
                aprovado: false
            })
        } else {
            await Boletim.create({
                aluno,
                turma,
                nota,
                aprovado: true
            })
        }
        return response.status(200).json({ message: "boletim Cadastrado"})

    } catch (error) {
        return response.status(500).json({ erro: error })
    }
}



module.exports = createBoletim 