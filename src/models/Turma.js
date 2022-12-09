const { DataTypes } = require("sequelize");
const db = require("../../dbconfig");


db.sync().then(console.log("Base de dados sincronizada..."))
const Turma = db.define(
  "turma",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    professor: {
      type: DataTypes.INTEGER,
      references: {
        model: "professors",
        key: 'id'
      },
      onDelete: 'CASCADE', hooks: true
    },
    disciplina: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
);


module.exports = Turma; 