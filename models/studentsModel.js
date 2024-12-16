const db = require("../lib/dbConnect");
// getAllStudents(limit, offset):

// Retrieves a subset of students with LIMIT and OFFSET for pagination.
// SQL query: SELECT * FROM students LIMIT ? OFFSET ?.
const getAllStudents = (limit, offset) =>
  db.query("SELECT * FROM students LIMIT ? OFFSET ?", [limit, offset]);
// getTotalStudents():

// Returns the total count of students.
// SQL query: SELECT COUNT(*) AS total FROM students.
const getTotalStudents = () =>
  db.query("SELECT COUNT(*) AS total FROM students");
// getStudentById(id):

// Retrieves a single student by their ID.
// SQL query: SELECT * FROM students WHERE id = ?.

const getStudentById = (id) =>
  db.query("SELECT * FROM students WHERE id = ?", [id]);
// createStudent(data):

// Inserts a new student record.
// SQL query: INSERT INTO students SET ?.
const createStudent = (data) => db.query("INSERT INTO students SET ?", data);
// updateStudent(id, data):

// Updates a student's details by ID.
// SQL query: UPDATE students SET ? WHERE id = ?.
const updateStudent = (id, data) =>
  db.query("UPDATE students SET ? WHERE id = ?", [data, id]);
// deleteStudent(id):

// Deletes a student by ID.
// SQL query: DELETE FROM students WHERE id = ?.
const deleteStudent = (id) => {
  db.query("DELETE FROM students WHERE id = ?", [id]);
};
module.exports = {
  getAllStudents,
  getTotalStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
