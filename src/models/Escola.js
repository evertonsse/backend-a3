const { DataTypes } = require("sequelize");
const db = require("../../dbconfig");



db.sync().then(console.log("Base de dados sincronizada..."))
const Escola = db.define(
  "escola",
  {
   
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    logoMarca: {
      type: DataTypes.STRING,
    },
    endereco: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

module.exports = Escola;
