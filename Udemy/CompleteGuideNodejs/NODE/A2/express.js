const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  res.send("<h1>User Data</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Hello there!");
  res.send("<h1>Home</h1>");
});

/* app.use((req, res, next) => {
  console.log("Hi there!");
  next();
});

app.use((req, res, next) => {
  console.log("Message");
  res.send("<h1>My express Server</h1>");
}); */

app.listen(3001);
