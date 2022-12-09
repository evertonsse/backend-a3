const express = require("express");
const selectTurmaAluno = require("../Turma/alunosPorTurma");
const TurmaRoutes = express.Router();
const createTurma = require("../Turma/createTurma");
const deleteTurma = require("../Turma/deleteTurma");
const selectTurma = require("../Turma/selectTurma");
const selectTurmas = require("../Turma/selectTurmas");
const selectTurmasv2 = require("../Turma/selectTurmav2");
const updateTurma = require("../Turma/updateTurma");


TurmaRoutes.put("/turma", (request, response) => {
    createTurma(request, response);
})
TurmaRoutes.get("/turma", (request, response) => {
    selectTurmas(request, response);
})

TurmaRoutes.get("/turmaAluno", (request, response) => {
    selectTurmaAluno(request, response);
})

TurmaRoutes.get("/turma/v2", (request, response) => {
    selectTurmasv2(request, response);
})
TurmaRoutes.get("/turma/:id", (request, response) => {
   selectTurma(request, response);
})

TurmaRoutes.patch("/turma/:id", (request, response) => {
    updateTurma(request, response);
})

TurmaRoutes.delete("/turma/:id", (request, response) => {
    deleteTurma(request, response);
})

module.exports = TurmaRoutes; 
