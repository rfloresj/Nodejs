function productOrder(product) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering: ${product} from RobertShop`);
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

/* productOrder("pencil")
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
  }); */

async function placeOrder(product) {
  // All async functions return a promise
  try {
    const response = await productOrder(product);
    console.log("Response received");
    console.log(response);
    const processedResponse = await orderProcess(response);
    console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
}

placeOrder("cup");
