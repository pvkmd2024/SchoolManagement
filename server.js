const express = require("express");
const app = express();

const studentsRoute = require("./routes/studentsRoute");
const coursesRoute = require("./routes/coursesRoute");
const enrolmentsRoute = require("./routes/enrolmentsRoute");

const PORT = 3000;

app.use(express.json());

app.use("/students", studentsRoute);
app.use("/courses", coursesRoute);
app.use("/enrolments", enrolmentsRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
