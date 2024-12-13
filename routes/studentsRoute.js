const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/studentsController");
const enrolmentsController = require("../controllers/enrolmentsController");

router.get("/", studentsController.getAllStudents);
router.get("/:id", studentsController.getStudentById);

router.get("/:id/enrolments", enrolmentsController.getEnrolmentsByCourse);

router.post("/", studentsController.createStudent);
router.put("/:id", studentsController.updateStudent);
router.delete("/:id", studentsController.deleteStudent);

module.exports = router;
