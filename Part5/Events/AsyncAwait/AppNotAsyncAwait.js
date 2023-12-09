function productOrder(product) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering: ${product} de RobertShop`);
    setTimeout(() => {
      if (product === "cup") {
        resolve(`Ordering a cup with the brand of RobertShop...`);
      } else {
        reject("This product is not available right now");
      }
    }, 2000);
  });
}

function orderProcess(response) {
  return new Promise((resolve) => {
    console.log("Processing response...");
    console.log(`The response was: "${response}"`);
    setTimeout(() => {
      resolve("Thanks for your purchase. Enjoy your product from RobertShop.");
    }, 4000);
  });
}

productOrder("pencil")
  .then((response) => {
    console.log("Response received");
    console.log(response);
    return orderProcess(response);
  })
  .then((processedResponse) => {
    //Chaining Promises, the response of processedResponse is from orderProcess
    console.log(processedResponse);
  })
  .catch((error) => {
    console.log(error);
  });
