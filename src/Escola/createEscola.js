const Escola = require("../Models/Escola")


createEscola = async (request, response) => {
    const { cnpj } = request.body

    try {
        const exists = await Escola.count({ where: { cnpj } })

        if (exists > 0) {
            return response.status(409).json({ message: "Escola ja cadastrada." })
        } else {
            await Escola.create(request.body)
            return response.status(202).json({ message: "Registro criado com sucesso." })
        }

    } catch (error) {
        return response.status(500).json({erro: error})
    }
}


module.exports = createEscola; 