const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<h1>Welcome to the home server.</h1>");
    return res.end();
  }
  if (url === "/users") {
    // res.writeHead("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write(
      "<body><ul><li>Michael</li><li>Robert</li><li>Peter</li><li>Frank</li><li>Joe</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
  // res.setHeader("Content-type", "text/html");
  // res.write("<h1>Hello World</h1>");
  // console.log("listening");
});

server.listen(3000);
