const { DataTypes } = require("sequelize");
const db = require("../../dbconfig");


db.sync().then(console.log("Base de dados sincronizada..."))
const Aluno = db.define(
  "aluno",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    matricula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sala : {
        type: DataTypes.INTEGER 

    } 
  },
  { timestamps: false }
);

module.exports = Aluno;
