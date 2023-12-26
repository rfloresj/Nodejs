const express = require("express");
const { mathematics } = require("../data/courses").infoCourses;

const routerMathematics = express.Router();

routerMathematics.get("/", (req, res) => {
  res.send(JSON.stringify(mathematics));
});

routerMathematics.get("/:subject", (req, res) => {
  const subject = req.params.subject;
  const results = mathematics.filter((course) => course.subject === subject);

  if (results.length === 0) {
    return res.status(404).send(`No courses found from ${subject}`);
  }

  res.send(JSON.stringify(results));
});

module.exports = routerMathematics;
