// Asynchronous by defect
// fs.rename() Asynchronous
// fs.renameSync() Synchronous
const fs = require("fs");

// Read a file

console.log("Before reading the file...");

const file = fs.readFileSync("index.html", "utf-8");

console.log(file);

console.log("After reading the file...");

// Change the name of a file

fs.renameSync("index.html", "main.html");

console.log("After changing the file name...");

// Add content at the end of the file.

fs.appendFileSync("main.html", "<p>Hola</p>");

console.log("After updating the file...");

// Replace all the content of the file

fs.writeFileSync("main.html", "New Content");

console.log("After replacing file content...");

// Delete files

fs.unlinkSync("main.html");

console.log("After deleting the file...");
