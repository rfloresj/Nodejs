const express = require("express"); // Core module
const app = express();

const { infoCourses } = require("./courses.js");

//  Routers
const routerProgramming = express.Router();
app.use("/api/courses/programming", routerProgramming);

const routerMathematics = express.Router();
app.use("/api/courses/mathematics", routerMathematics);

// Routing

app.get("/", (req, res) => {
  res.send("My first server with Express. Courses 👨🏻‍💻");
});

app.get("/api/courses", (req, res) => {
  res.send(JSON.stringify(infoCourses));
});

routerProgramming.get("/", (req, res) => {
  res.send(JSON.stringify(infoCourses.programming));
});

routerMathematics.get("/", (req, res) => {
  res.send(JSON.stringify(infoCourses.mathematics));
});

// Programming
// :language, URL parameter
routerProgramming.get("/:language", (req, res) => {
  const language = req.params.language;
  const results = infoCourses.programming.filter(
    (course) => course.language === language
  );

  if (results.length === 0) {
    return res.status(404).send(`No courses found from ${language}`);
  }

  if (req.query.order === "views") {
    return res.send(JSON.stringify(results.sort((a, b) => b.views - a.views)));
  }
  res.send(JSON.stringify(results));
});

// Mathematics

routerMathematics.get("/:subject", (req, res) => {
  const subject = req.params.subject;
  const results = infoCourses.mathematics.filter(
    (course) => course.subject === subject
  );

  if (results.length === 0) {
    return res.status(404).send(`No courses found from ${subject}`);
  }

  res.send(JSON.stringify(results));
});

routerProgramming.get("/:language/:level", (req, res) => {
  const language = req.params.language;
  const level = req.params.level;

  const results = infoCourses.programming.filter(
    (course) => course.language === language && course.level === level
  );

  if (results.length === 0) {
    return res
      .status(404)
      .send(`No courses found from ${language} of level ${level}`);
  }

  res.send(JSON.stringify(results));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}...`);
});
