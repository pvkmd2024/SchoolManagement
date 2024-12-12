const db = require("../lib/dbConnect");

const getAllCourses = () => db.query("SELECT * FROM courses");
const getCourseById = (id) =>
  db.query("SELECT * FROM courses WHERE id = ?", [id]);
const createCourse = (data) => db.query("INSERT INTO courses SET ?", data);
const updateCourse = (id, data) =>
  db.query("UPDATE courses SET ? WHERE id = ?", [data, id]);
const deleteCourse = (id) => db.query("DELETE FROM courses WHERE id = ?"[id]);

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
