const { DataTypes } = require("sequelize");

const db = require("../../dbconfig");

db.sync().then(console.log("Base de dados sincronizada..."));
const Boletim = db.define(
  "boletim",
  {
    aluno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "alunos",
        key: "id",
      },
    },
    turma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "turmas",
        key: "id",
      },
    },
    nota: {
      type: DataTypes.DOUBLE,
    }, 
    aprovado : { 
        type: DataTypes.BOOLEAN
    }
  },
  { timestamps: false }
);

module.exports = Boletim;
