const Escola = require("../Models/Escola")

const selectEscola = async (request, response) => {
    const { id } = request.params
 
    try {
        const escola = await Escola.findOne({ where: { id } })

        if (escola) {
            return response.status(200).json({ escola })
        } else {
            return response.status(404).json({message:"Nenhuma escola encontrado."})
        }

    } catch (Error) {
      console.log("🚀 ~ file: selectEsola.js ~ line 15 ~ selectEscola ~ error", Error)
      
        return response.status(500).json({erro: Error })
    }
} 

module.exports =  selectEscola ;
