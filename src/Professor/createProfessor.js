const Professor = require("../models/Professor")


const createProfessor = async (request, response) => {
    const { cpf } = request.body

    try {
        const exists = await Professor.count({
            where: { cpf }
        })
        if (exists > 0 ) { 
            return response.status(409).json({message: "Professir já cadastrado com esse CPF."})
        } else  { 
            await Professor.create(request.body) 
            return response.status(202).json({ message: "Registro criado com sucesso" });
        }

    } catch (error) {
        return response.status(500).json({ error });
    }
}

module.exports = createProfessor; 