const statusOrder = () => {
  return Math.random() < 0.8;
};

const myPizzaOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (statusOrder()) {
      resolve("¡Order successful, your pizza is on the way.");
    } else {
      reject("An error ocurred. Please try again.");
    }
  }, 3000);
});

myPizzaOrder //First approach, this approach it's called Method Chaining
  .then((confirmationMessage) => {
    //Promise resolve
    console.log(confirmationMessage);
  })
  .catch((errorMessage) => {
    //Promise reject
    console.log(errorMessage);
  });

/* myPizzaOrder //Third approach
  .then((confirmationMessage) => {
    console.log(confirmationMessage);
  })
  .then(null, (errorMessage) => {
    console.log(errorMessage);
  }); */

/* const handleOrder = (confirmationMessage) => {  //First approach
  console.log(confirmationMessage);
};

const rejectOrder = (errorMessage) => {
  console.log(errorMessage);
};

myPizzaOrder.then(handleOrder).catch(rejectOrder)

myPizzaOrder.then(handleOrder, rejectOrder); */
