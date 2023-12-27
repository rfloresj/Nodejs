const express = require("express"); // Core module
const app = express();

const { infoCourses } = require("./data/courses.js");

//  Routers

const routerProgramming = require("./routers/programming.js");
app.use("/api/courses/programming", routerProgramming);

const routerMathematics = require("./routers/mathematics.js");
app.use("/api/courses/mathematics", routerMathematics);

// Routing

app.get("/", (req, res) => {
  res.send("My first server with Express. Courses 👨🏻‍💻");
});

app.get("/api/courses", (req, res) => {
  res.send(JSON.stringify(infoCourses));
});

// Programming

// Mathematics

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}...`);
});
