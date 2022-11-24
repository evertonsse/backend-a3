const createProfessor = require('../Professor/createProfessor')
const selectProfessor = require('../Professor/selectProfessor')
const selectProfessores = require('../Professor/selectProfessores')
const updateProfessor = require('../Professor/updateProfessor')
const deleteProfessor = require("../Professor/deleteProfessor")
const express = require("express"); 
const professorRoutes = express.Router();



professorRoutes.put("/professor", (request, response)=> {
    createProfessor(request, response)
})

professorRoutes.get("/professor/:id", (request, response) => {
    selectProfessor(request, response)
})

professorRoutes.get("/professor", (request, response) => {
    selectProfessores(request, response)
})

professorRoutes.patch("/professor/:id", (request, response)=> {
    updateProfessor(request, response)
})

professorRoutes.delete("/professor/:id", (request, response)=> {
    deleteProfessor(request, response)
})

module.exports = professorRoutes; 