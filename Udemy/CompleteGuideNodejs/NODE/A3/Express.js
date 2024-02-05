const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const userRoutes = require("./routes/users");
const homeRoutes = require("./routes/home");
const rootDir = require("./util/path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(userRoutes);
app.use(homeRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3002);
