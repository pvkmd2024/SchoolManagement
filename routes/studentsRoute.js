const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/studentsController");
const enrolmentsController = require("../controllers/enrolmentsController");
// GET /:

// Fetches a paginated list of students.
// Controller: studentsController.getAllStudents.
router.get("/", studentsController.getAllStudents);
// GET /:id:

// Fetches details of a specific student by ID.
// Controller: studentsController.getStudentById.
router.get("/:id", studentsController.getStudentById);
// GET /:id/enrolments:

// Fetches a list of enrollments for a specific student.
// Controller: enrolmentsController.getEnrolmentsByCourse.
router.get("/:id/enrolments", enrolmentsController.getEnrolmentsByCourse);
// POST /:

// Creates a new student.
// Controller: studentsController.createStudent.
router.post("/", studentsController.createStudent);
// PUT /:id:

// Updates a student's details.
// Controller: studentsController.updateStudent.
router.put("/:id", studentsController.updateStudent);
// DELETE /:id:

// Deletes a student by ID.
// Controller: studentsController.deleteStudent.
router.delete("/:id", studentsController.deleteStudent);

module.exports = router;
