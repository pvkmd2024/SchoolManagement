const studentsModel = require("../models/studentsModel");

const getAllStudents = async (req, res) => {
  try {
    const [students] = await studentsModel.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const [student] = await studentsModel.getStudentById(req.params.id);
    if (student.length === 0)
      return res.status(404).json({ message: "Student not found" });
    res.json(student[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const { first_name, last_name, email, phone_number, date_of_birth } =
      req.body;
    const [result] = await studentsModel.createStudent({
      first_name,
      last_name,
      email,
      phone_number,
      date_of_birth,
    });
    res
      .status(201)
      .json({
        id: result.insertId,
        first_name,
        last_name,
        email,
        phone_number,
        date_of_birth,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateStudent = async (req, res) => {
  try {
    const [result] = await studentsModel.updateStudent(req.params.id, req.body);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "student not found" });
    res.json({ message: "Student updated succesfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const [result] = await studentsModel.deleteStudent(req.params.id);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "student not found" });
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
