const http = require("http");
const { infoCourses } = require("./courses");

const server = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return handleRequestGET(req, res);
    case "POST":
      return handleRequestPOST(req, res);
    case "PUT":
      return handleRequestPUT(req, res);
    case "DELETE":
      return handleRequestDELETE(req, res);
    default:
      res.statusCode = 501;
      res.end(`This method cannot be handled by the server: ${method}`);
  }
});

const handleRequestGET = (req, res) => {
  const path = req.url;

  // console.log(res.statusCode); // 200 OK (default)

  if (path === "/") {
    /* res.writeHead(200, { "Content-Type": "application/json" }); */
    // res.statusCode = 200;
    return res.end("Welcome to my first server and API created with Node.js");
  } else if (path === "/courses") {
    // res.statusCode = 200;
    return res.end(JSON.stringify(infoCourses));
  } else if (path === "/courses/programming") {
    // res.statusCode = 200;
    return res.end(JSON.stringify(infoCourses.programming));
  }

  res.statusCode = 404;
  res.end("The requested resource is not found...");
};

const handleRequestPOST = (req, res) => {
  const path = req.url;

  if (path === "/courses/programming") {
    let body = "";

    req.on("data", (content) => {
      body += content.toString();
    });

    req.on("end", () => {
      console.log(body);
      console.log(typeof body);

      //Convert to a JS Object
      body = JSON.parse(body);

      console.log(typeof body);

      console.log(body.title);

      res.end("Server received a POST request for /courses/programming");
    });
    // res.statusCode = 200;
    //return res.end("Server received a POST request for /courses/programming");
  }
};

const handleRequestPUT = (req, res) => {
  const path = req.url;

  if (path === "/courses") {
    // res.statusCode = 200;
    return res.end("Server received a PUT request for /courses");
  }
};

const handleRequestDELETE = (req, res) => {
  const path = req.url;

  if (path === "/courses/programming") {
    // res.statusCode = 200;
    return res.end("Server received a DELETE request for /courses/programming");
  }
};

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
