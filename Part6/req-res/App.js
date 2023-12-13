const http = require("http");

const server = http.createServer((req, res) => {
  console.log("===> req (response)");
  res.setHeader("conten-type", "application/json");
  console.log(res.getHeaders());

  res.end("Hello world");
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}...`);
});

/* console.log("===> req (request)");
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers); */

/*  const server = http.createServer((req, res) => {
    console.log("===> req (response)");
    console.log(res.statusCode); // 200 OK
  
    res.end("Hello world");
  }); */
