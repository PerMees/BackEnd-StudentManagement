const StudentServices = require("../services/student.services");

const getAllStudents = async (req, res) => {
  try {
    const students = await StudentServices.findAll();
    res.status(200).send(students);
  } catch (error) {
    throw error;
  }
};
const getStudentById = async (req, res) => {
  try {
    const student = await StudentServices.findOne(req.params.id);
    if (student) {
      res.status(200).send(student);
    } else {
      res.status(404).send(`Student ${req.params.id} not found`);
    }
  } catch (error) {
    throw error;
  }
};

const createStudent = async (req, res) => {
  try {
    let student = req.body;
    const newStudent = await StudentServices.create(student);
    res.status(201).send(newStudent);
  } catch (error) {
    throw error;
  }
};
const updateStudent = async (req, res) => {
  try {
    const student = req.body;
    const { id } = req.params;
    const updatedStudent = await StudentServices.update(id, student);
    if (updatedStudent) res.status(200).send(updatedStudent);
    else res.status(404).send(`Student ${id} not found`);
  } catch (error) {
    throw error;
  }
};
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const studentDeleted = await StudentServices.destroy(id);
    if (studentDeleted)
      res.status(200).send(`Student ${req.params.id} deleted`);
    else res.status(404).send(`Student ${req.params.id} not found`);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
