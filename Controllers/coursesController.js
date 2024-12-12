const db = require("../lib/dbConnect");
const coursesModel = require("../models/coursesModel");

const getAllCourses = async (req, res) => {
  try {
    const [courses] = await coursesModel.getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const [course] = await coursesModel.getCourseById(req.params.id);
    if (course.length === 0)
      return res.status(404).json({ message: "Course not found" });
    res.json(course[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCourse = async (req, res) => {
  const { course_name, course_code, credits } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO courses (course_name, course_code, credits) VALUES (?, ?, ?)",
      [course_name, course_code, credits]
    );
    res.status(201).json({
      id: result.insertId,
      course_name,
      course_code,
      credits,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateCourse = async (req, res) => {
  try {
    const [result] = await coursesModel.updateCourse(req.params.id, req.body);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Course not found" });
    res.json({ message: "Course updated succesfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const [result] = await coursesModel.deleteCourse(req.params.id);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Course not found" });
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
