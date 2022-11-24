const Boletim = require('../models/Boletim')
const Aluno = require('../models/Aluno')
const Turma = require('../models/Turma')


const createBoletim = async (request, response) => {
    const { aluno, turma, nota } = request.body;

    try {
        const countAluno = Aluno.count({ where: aluno })
        if (countAluno.length < 0) {
            return response.status(400).json({ message: "aluno não cadastrado" });
        }
        const countTurma = Turma.count({ where: turma })

        if (countTurma.length < 0) {
            return response.status(400).json({ message: "Turma não cadastrado" });
        }

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