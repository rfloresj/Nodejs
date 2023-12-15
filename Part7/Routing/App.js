const http = require("http");
const courses = require("./courses");

const server = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return handleRequestGET(req, res);
    case "POST":
      return handleRequestPOST(req, res);
    default:
      console.log(`This method cannot be handled by the server: ${method}`);
  }
});

const handleRequestGET = (req, res) => {
  const path = req.url;
  if (path === "/") {
    res.statusCode = 200;
    res.end("Welcome to my first server and API created with Node.js");
  } else if (path === "/courses") {
    res.statusCode = 200;
    res.end(JSON.stringify(courses.infoCourses));
  } else if (path === "/courses/programming") {
    res.statusCode = 200;
    res.end(JSON.stringify(courses.infoCourses.programming));
  }

  res.statusCode = 404;
  res.end("The requested resource is not found...");
};

const handleRequestPOST = (req, res) => {
  const path = req.url;
  if(){

  }
}

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
