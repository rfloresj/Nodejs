const express = require("express");
const { programming } = require("../data/courses").infoCourses;

const routerProgramming = express.Router();

// Process the request body
// Middleware
routerProgramming.use(express.json());

routerProgramming.get("/", (req, res) => {
  res.json(programming);
});

routerProgramming.get("/:language", (req, res) => {
  const language = req.params.language;
  const results = programming.filter((course) => course.language === language);

  if (results.length === 0) {
    return res.status(404).send(`No courses found from ${language}`);
  }

  if (req.query.order === "views") {
    return res.send(results.sort((a, b) => b.views - a.views));
  }
  res.json(results);
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

  res.json(results);
});

routerProgramming.post("/", (req, res) => {
  let newCourse = req.body;
  programming.push(newCourse);
  res.json(programming);
});

routerProgramming.put("/:id", (req, res) => {
  updatedCourse = req.body;
  const id = req.params.id;

  const index = programming.findIndex((course) => course.id == id);

  if (index >= 0) {
    programming[index] = updatedCourse;
  } else {
    res.status(404).send(`Index not found ${index}`);
  }

  res.json(programming);
});

routerProgramming.patch("/:id", (req, res) => {
  const updatedInfo = req.body;
  const id = req.params.id;

  const index = programming.findIndex((course) => course.id == id);

  if (index >= 0) {
    const courseToModify = programming[index];
    Object.assign(courseToModify, updatedInfo);
  }
  res.json(programming);
});

routerProgramming.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = programming.findIndex((course) => course.id == id);

  if (index >= 0) {
    programming.splice(index, 1);
  }
  res.json(programming);
});

module.exports = routerProgramming;
