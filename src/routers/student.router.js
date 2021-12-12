const express = require("express");
const studentRouter = express.Router();
const StudentController = require("../controllers/student.controller");

studentRouter.get("/", StudentController.getAllStudents);
studentRouter.get("/:id", StudentController.getStudentById);
studentRouter.post("/", StudentController.createStudent);
studentRouter.put("/:id", StudentController.updateStudent);
studentRouter.delete("/:id", StudentController.deleteStudent);

module.exports = studentRouter;
