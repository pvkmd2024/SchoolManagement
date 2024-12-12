const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/coursesController");

router.get("/", coursesController.getAllCourses);
router.get("/:id", coursesController.getCourseById);
router.post("/create", coursesController.createCourse);
router.put(":/id", coursesController.updateCourse);
router.delete(":/id", coursesController.deleteCourse);

module.exports = router;
