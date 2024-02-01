//Callbacks and Functions

/* const doAsyncStuff = (numero1, numero2, callback) => {
  const resultado = numero1 + numero2;
  return setTimeout(() => {
    callback(resultado);
  }, 500);
};

doAsyncStuff(1, 3, (result) => console.log(result)); */

/* [1, 2, 3, 4].map((number) => {
  console.log(number < 4);
});

const doAsyncStuffWithPromises = (numero1, numero2) => {
  const resultado = numero1 + numero2;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resultado);
    }, 500);
  });
};

doAsyncStuffWithPromises(1, 3).then((result) => console.log(result)); */

Promise.all([Promise.resolve(13)]);
