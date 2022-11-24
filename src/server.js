const express = require('express');
const bodyParser = require('body-parser');
const db = require("../dbconfig")
const alunoRoutes = require("./Routes/AlunoRoutes")
const professorRoutes = require("./Routes/ProfessorRoutes")
const escolaRoutes = require("./Routes/EscolaRoutes")
const turmaRoutes = require("./Routes/TurmaRoutes");
const BoletimRoutes = require('./Routes/BoletimRoutes');

app = express();
app.use(bodyParser.json());

app.use(alunoRoutes)
app.use(professorRoutes)
app.use(escolaRoutes)
app.use(turmaRoutes)
app.use(BoletimRoutes)
app.listen(3333) 
db.sync(); 
