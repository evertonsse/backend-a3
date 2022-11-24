const Professor = require("../models/Professor"); 

const updateProfessor = async (request, response) => { 
        const id = request.params.id; 
    try {
        if ( await Professor.update(request.body , {where: {id }})) { 
            return response.status(200).json({message: "Registro Atualizado."})
        } else { 
            return response.status(300).json({message: "Erro ao atualizar registros"})
        } 
    } catch (error) {
        return response.status(500).json({error})
    }

}

module.exports = updateProfessor; 