const db = require("../lib/dbConnect");

const getAllEnrolments = () =>
  db.query(
    `SELECT e.enrolment_id AS id, s.first_name, s.last_name, c.course_name AS course_name, e.enrolment_date
FROM enrolments e
JOIN students s ON e.student_id = s.student_id
JOIN courses c ON e.course_id = c.course_id`
  );

const getEnrolmentsByCourse = (courseId) =>
  db.query(
    `SELECT s.first_name, s.last_name, e.enrolment_date
     FROM enrolments e
     JOIN students s ON e.student_id = s.student_id
     WHERE e.course_id = ?`,
    [courseId]
  );
const createEnrolment = (data) =>
  db.query("INSERT INTO enrolments SET ?", data);

const deleteEnrolment = (id) =>
  db.query("DELETE FROM enrolments WHERE id = ?"[id]);

module.exports = {
  getAllEnrolments,

  getEnrolmentsByCourse,
  createEnrolment,
  deleteEnrolment,
};
