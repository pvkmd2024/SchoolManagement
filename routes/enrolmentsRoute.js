const express = require("express");
const router = express.Router();
const enrolmentsController = require("../controllers/enrolmentsController");

router.get("/", enrolmentsController.getAllEnrolments);

router.get("/:id/enrolments", enrolmentsController.getEnrolmentsByCourse);
router.post("/", enrolmentsController.createEnrolment);
router.delete("/:id", enrolmentsController.deleteEnrolment);

module.exports = router;
