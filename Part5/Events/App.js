const EventEmitter = require("events");

const productsEmitter = new EventEmitter();

productsEmitter.on("buy", (total, numProducts) => {
  console.log(`Total of the purchase: $${total}.`);
  console.log(`Number of products: ${numProducts}.`);
});

productsEmitter.emit("buy", 500, 5);
