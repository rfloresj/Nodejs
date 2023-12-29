const express = require("express");
const { programming } = require("../data/courses").infoCourses;

const routerProgramming = express.Router();

// Process the request body
// Middleware
routerProgramming.use(express.json());

routerProgramming.get("/", (req, res) => {
  res.send(JSON.stringify(programming));
});

routerProgramming.get("/:language", (req, res) => {
  const language = req.params.language;
  const results = programming.filter((course) => course.language === language);

  if (results.length === 0) {
    return res.status(404).send(`No courses found from ${language}`);
  }

  if (req.query.order === "views") {
    return res.send(JSON.stringify(results.sort((a, b) => b.views - a.views)));
  }
  res.send(JSON.stringify(results));
});

routerProgramming.get("/:language/:level", (req, res) => {
  const language = req.params.language;
  const level = req.params.level;

  const results = programming.filter(
    (course) => course.language === language && course.level === level
  );

  if (results.length === 0) {
    return res
      .status(404)
      .send(`No courses found from ${language} of level ${level}`);
  }

  res.send(JSON.stringify(results));
});

routerProgramming.post("/", (req, res) => {
  let newCourse = req.body;
  programming.push(newCourse);
  res.send(JSON.stringify(programming));
});

routerProgramming.put("/:id", (req, res) => {
  updatedCourse = req.body;
  const id = req.params.id;

  const index = programming.findIndex((course) => course.id == id);

  if (index >= 0) {
    programming[index] = updatedCourse;
  }

  res.send(JSON.stringify(programming));
});

routerProgramming.patch("/:id", (req, res) => {
  const updatedInfo = req.body;
  const id = req.params.id;

  const index = programming.findIndex((course) => course.id == id);

  if (index >= 0) {
    const courseToModify = programming[index];
    Object.assign(courseToModify, updatedInfo);
  }
  res.send(JSON.stringify(programming));
});

routerProgramming.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = programming.findIndex((course) => course.id == id);

  if (index >= 0) {
    programming.splice(index, 1);
  }
  res.send(JSON.stringify(programming));
});

module.exports = routerProgramming;
