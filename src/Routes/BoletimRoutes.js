
const express = require("express"); 
const createBoletim = require("../Boletim/createBoletim");
const deleteBoletim = require("../Boletim/deleleBoletim");
const selectBoletins = require("../Boletim/selectBoletim");
const selectBoletinsv2 = require("../Boletim/selectboletimv2");
const updateBoletim = require("../Boletim/updateBoletim");
const BoletimRoutes = express.Router();




BoletimRoutes.put("/boletim", (req, res) => {
    createBoletim(req, res)
} )

BoletimRoutes.get("/boletim/v2", (req, res) => {
   
    selectBoletinsv2(req, res)
})

BoletimRoutes.get("/boletim", (req, res) => {
    selectBoletins(req, res)
})

BoletimRoutes.patch("/boletim/:id", (req, res) => {
    updateBoletim(req, res)
})

BoletimRoutes.delete("/boletim/:id", (req, res) => {
    deleteBoletim(req, res)
});

module.exports = BoletimRoutes;