// Asynchronous by defect
// fs.rename() Asynchronous
// fs.renameSync() Synchronous
const fs = require("fs");

// Read a file

// fs.readFile("index.html", "utf-8", (err, content) => {
//   if (err) {
//     throw err; // throw error and stop the program.
//   }
//   console.log(content);
// });

// Change the name of a file

// fs.rename("index.html", "main.html", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Name changed successfully");
// });

// Add content at the end of the file.

/* fs.appendFile("index.html", "<p>Hola</p>", (err) => {
  if (err) {
    throw err;
  }
  console.log("File updated.");
}); */

// Replace all the content of the file

/* fs.writeFile("index.html", "New Content", (err) => {
  if (err) {
    throw err;
  }
  console.log("Replaced content successfully");
}); */

// Delete files

fs.unlink("main.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("File deleted");
});
