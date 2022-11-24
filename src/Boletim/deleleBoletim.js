const Boletim = require("../models/Boletim");


const deleteBoletim = async (request, response) => {

    const id = request.params.id;
    try {
        if  (await Boletim.destroy({ where: { id } })) {
            return response.status(200).json({ message: "Registro Deletado." })
        } else {
            return response.status(300).json({ message: "Erro ao deletar registro" })
        }
    } catch (error) {
        return response.status(500).json({ error })
    }

}

module.exports = deleteBoletim;