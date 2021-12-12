const { Sequelize } = require("sequelize");
const {
  DATABASE,
  USER,
  PASSWORD,
  HOST,
  PORT,
  dialect,
} = require("../configs/db.configs");
const studentModel = require("./student.model");
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect,
});

const Student = studentModel.createStudentModel(sequelize);

module.exports = { sequelize, Student };
