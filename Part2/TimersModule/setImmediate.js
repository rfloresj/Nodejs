// Asynchronous Function

function showSubject(subject) {
  console.log(`I'm learning ${subject}`);
}

console.log("Before setImmediate()"); // Synchronous

setImmediate(showSubject, "Node.js"); // Asynchronous

console.log("After setImmediate()"); // Synchronous
