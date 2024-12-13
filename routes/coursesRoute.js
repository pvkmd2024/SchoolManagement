const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/coursesController");
const enrolmentsController = require("../controllers/enrolmentsController");

router.get("/", coursesController.getAllCourses);
router.get("/:id", coursesController.getCourseById);
router.get("/:id/enrolments", enrolmentsController.getEnrolmentsByCourse);

router.post("/", coursesController.createCourse);
router.put("/:id", coursesController.updateCourse);
router.delete("/:id", coursesController.deleteCourse);

module.exports = router;
