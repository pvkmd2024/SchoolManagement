const studentsModel = require("../models/studentsModel");
// getAllStudents:

// Handles GET requests to retrieve a paginated list of students.
// Parameters:
// page: Current page number (from the query string).
// limit: Number of records per page (default: 5).
// Calculates the offset ((page - 1) * limit) for pagination.
// Queries for student data (getAllStudents) and total student count (getTotalStudents) concurrently using Promise.all.
const getAllStudents = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;

    const [[students], [[{ total }]]] = await Promise.all([
      studentsModel.getAllStudents(limit, offset),
      studentsModel.getTotalStudents(),
    ]);

    const totalPages = Math.ceil(total / limit);

    res.json({
      page,
      limit,
      total,
      totalPages,
      data: students,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// getStudentById:

// Handles GET requests to retrieve a specific student by their ID.
// Uses getStudentById to query the database.
// Returns 404 if the student isn't found.
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
// createStudent:

// Handles POST requests to create a new student.
// Expects the request body to contain:
// first_name, last_name, email, phone_number, date_of_birth.
// Inserts the new student using createStudent.
// Responds with the newly created student's ID and details.
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
    res.status(201).json({
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
// updateStudent:

// Handles PUT requests to update a student's details by ID.
// Expects an updated student object in the request body.
// Updates the student record using updateStudent.
// Returns 404 if the student ID doesn't exist.
const updateStudent = async (req, res) => {
  try {
    const [result] = await studentsModel.updateStudent(req.params.id, req.body);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// deleteStudent:

// Handles DELETE requests to delete a student by ID.
// Uses deleteStudent to remove the record.
// Returns 404 if the student ID isn't found.
const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    console.log("Attempting to delete student with ID:", studentId); // Log the ID to debug

    const [result] = await studentsModel.deleteStudent(studentId);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

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
