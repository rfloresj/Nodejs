const express = require("express"); // Core module
const app = express();

const { infoCourses } = require("./courses.js");

// Routing

app.get("/", (req, res) => {
  res.send("My first server with Express. Courses 👨🏻‍💻");
});

app.get("/api/courses", (req, res) => {
  res.send(JSON.stringify(infoCourses));
});

app.get("/api/courses/programming", (req, res) => {
  res.send(JSON.stringify(infoCourses.programming));
});

app.get("/api/courses/mathematics", (req, res) => {
  res.send(JSON.stringify(infoCourses.mathematics));
});

// Programming
// :language, URL parameter
app.get("/api/courses/programming/:language", (req, res) => {
  const language = req.params.language;
  const results = infoCourses.programming.filter(
    (course) => course.language === language
  );

  if (results.length === 0) {
    return res.status(404).send(`No courses found from ${language}`);
  }

  res.send(JSON.stringify(results));
});

// Mathematics

app.get("/api/courses/mathematics/:subject", (req, res) => {
  const subject = req.params.subject;
  const results = infoCourses.mathematics.filter(
    (course) => course.subject === subject
  );

  if (results.length === 0) {
    return res.status(404).send(`No courses found from ${subject}`);
  }

  res.send(JSON.stringify(results));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}...`);
});
