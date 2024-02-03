const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<h1>Welcome to the home server.</h1>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="message" placeholder="username"><button type="submit">Send</button></form>'
    );
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
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      console.log(message);
      res.statusCode = 200;
      res.setHeader("Location", "/create-user");
      return res.end();
    });
  }
});

server.listen(3000);
