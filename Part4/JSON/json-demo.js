/* const course = require("./course.json");
console.log(course.topics); */

let infoCurso = {
  title: "Learn Node.js",
  numViews: 45642,
  numLikes: 21123,
  topics: ["JavaScript", "Node.js"],
  public: true,
};

// Object -> String characters
// String characters in JSON format
let infoCourseJSON = JSON.stringify(infoCurso);

console.log(infoCourseJSON);
console.log(typeof infoCourseJSON);

// String characters -> Object
let infoCourseObject = JSON.parse(infoCourseJSON);

console.log(infoCourseObject);
console.log(typeof infoCourseObject);

console.log(infoCourseObject.title);
