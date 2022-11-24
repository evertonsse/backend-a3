const createAluno = require("../Aluno/createAluno")
const selectAlunos = require("../Aluno/selectAlunos")
const selectAluno = require("../Aluno/selectAluno")
const updateAluno = require("../Aluno/updateAluno")
const deleteAluno = require("../Aluno/deleteAluno")
const express = require("express") 
const alunoRoutes = express.Router();


alunoRoutes.put("/aluno" , (request, response ) => { 
    createAluno(request, response)
});

alunoRoutes.get("/aluno", (request, response) => {
    selectAlunos(request, response)
})
alunoRoutes.get("/aluno/:id", (request, response) => {
    selectAluno(request, response)
})

alunoRoutes.patch("/aluno/:id", (request, response) => {
    updateAluno(request, response)
})

alunoRoutes.delete("/aluno/:id", (request, response) => {
    deleteAluno(request, response)
})
module.exports = alunoRoutes; 