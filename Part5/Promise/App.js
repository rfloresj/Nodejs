const promiseAccomplish = false;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promiseAccomplish) {
      resolve("¡Promise Accomplish!");
    } else {
      reject("Promise Rejected...");
    }
  }, 3000);
});

const handleAccomplishedPromise = (value) => {
  console.log(value);
};

const handleRejectedPromise = (rejectReason) => {
  console.log(rejectReason);
};

myPromise.then(handleAccomplishedPromise, handleRejectedPromise);

/* myPromise.then((value) => {
  console.log(value); // Only takes resolve responses.
}); */
