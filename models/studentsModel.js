const db = require("../lib/dbConnect");

const getAllStudents = () => db.query("SELECT * FROM students");
const getStudentById = (id) =>
  db.query("SELECT * FROM students WHERE id = ?", [id]);
const createStudent = (data) => db.query("INSERT INTO students SET ?", data);
const updateStudent = (id, data) =>
  db.query("UPDATE students SET ? WHERE id = ?", [data, id]);
const deleteStudent = (id) => db.query("DELETE FROM students WHERE id = ?"[id]);

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
