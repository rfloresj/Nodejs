const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello Robert!");
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
