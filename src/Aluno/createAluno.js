const aluno = require("../models/Aluno");
const { Op } = require("sequelize")

const createAluno = async function (request, response) {

    const { cpf, matricula } = request.body
    try {
        const exists = await aluno.count({
            where: {
                [Op.and]: {
                    cpf: cpf,
                    matricula: matricula
                }
            }
        })
       
       if (exists > 0) { 
        return response.status(409).json({message: "Aluno já cadastrado com esse CPF ou Matrrícula."})

       } else { 
        await aluno.create(request.body);
        return response.status(202).json({ message: "Registro criado com sucesso" });
       }
       
    } catch (error) {
        return response.status(500).json({ error });
    }

};

module.exports = createAluno;
