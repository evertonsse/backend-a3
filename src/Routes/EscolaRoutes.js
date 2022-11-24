
const createEscola = require("../Escola/createEscola")
const selectEscola = require("../Escola/selectEscola")
const upateEsola = require("../Escola/updateEscola")
const deleteEsola = require("../Escola/deleteEscola")
const express = require("express"); 
const EscolaRoutes = express.Router();

EscolaRoutes.put("/escola",  (request, response) => { 
    createEscola(request, response)
})

EscolaRoutes.get("/escola/:id",  (request, response) => { 
    selectEscola(request, response)
})

EscolaRoutes.patch("/escola/:id",  (request, response) => { 
    upateEsola(request, response)
})

EscolaRoutes.delete("/escola/:id",  (request, response) =>{
    deleteEsola(request, response)
})

module.exports = EscolaRoutes;