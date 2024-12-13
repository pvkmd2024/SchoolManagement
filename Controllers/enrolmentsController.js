const enrolmentsModel = require("../models/enrolmentsModel");

const getAllEnrolments = async (req, res) => {
  try {
    const [enrolments] = await enrolmentsModel.getAllEnrolments();
    res.json(enrolments);
  } catch (error) {
    console.error("Error fetching enrolments:", error);
    res.status(500).json({ error: error.message });
  }
};

const getEnrolmentsByCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const [enrolments] = await enrolmentsModel.getEnrolmentsByCourse(courseId);

    if (enrolments.length === 0) {
      return res
        .status(404)
        .json({ message: "No enrolments found for this course" });
    }

    res.json(enrolments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEnrolment = async (req, res) => {
  try {
    const { student_id, course_id, enrolment_date } = req.body;

    if (!student_id || !course_id || !enrolment_date) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const [result] = await enrolmentsModel.createEnrolment({
      student_id,
      course_id,
      enrolment_date,
    });
    res.status(201).json({
      id: result.insertId,
      student_id,
      course_id,
      enrolment_date,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteEnrolment = async (req, res) => {
  try {
    const [result] = await enrolmentsModel.deleteEnrolment(req.params.id);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Enrolment not found" });
    res.json({ message: "Enrolment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEnrolments,

  getEnrolmentsByCourse,
  createEnrolment,
  deleteEnrolment,
};
