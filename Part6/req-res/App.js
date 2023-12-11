const http = require("http");

const server = http.createServer((req, res) => {
  console.log("New request");
  res.end("Hello, world!");
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}...`);
});
