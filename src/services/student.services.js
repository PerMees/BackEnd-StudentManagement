const { Student } = require("../models");

const create = async (student) => {
  try {
    const newStudent = await Student.create(student);
    return newStudent;
  } catch (error) {
    throw error;
  }
};

const findAll = async () => {
  try {
    const students = await Student.findAll();
    if (students) return students;
    return null;
  } catch (error) {
    throw error;
  }
};

const findOne = async (id) => {
  try {
    const student = await Student.findOne({ where: { id } });
    if (student) return student;
    return null;
  } catch (error) {
    throw error;
  }
};

const update = async (id, student) => {
  try {
    const studentUpdate = await findOne(id);
    if (studentUpdate) {
      for (let key in student) {
        studentUpdate[key] = student[key];
      }
      const studentUpdated = studentUpdate.save();
      return studentUpdated;
    } else return null;
  } catch (error) {
    throw error;
  }
};

const destroy = async (id) => {
  try {
    const studentDelete = await findOne(id);
    if (studentDelete) {
      await Student.destroy({ where: { id } });
      return studentDelete;
    } else return null;
  } catch (error) {
    throw error;
  }
};

module.exports = { create, findAll, findOne, destroy, update };
