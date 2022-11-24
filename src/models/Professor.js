const { DataTypes } = require("sequelize");
const db = require("../../dbconfig");


db.sync().then(console.log("Base de dados sincronizada..."))
const Professor = db.define(
  "professor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cpf: {
      type: DataTypes.STRING,
      unique: true,
    }, 
    nome : { 
      type: DataTypes.STRING, 
      allowNull: false, 

    }, 
    titulosAcademicos : { 
      type: DataTypes.STRING
    }, 
    disciplina : { 
    type: DataTypes.STRING, 
    allowNull: false 
    }
  },
  { timestamps: false }
);

module.exports = Professor;
