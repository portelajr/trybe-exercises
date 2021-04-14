const getRandoms = ((units) => {
  let numbersPack = [];

  while(numbersPack.length < units) {
    let number = (Math.floor(Math.random() * 50));
    number *= number;
    numbersPack.push(number);
  };
  return numbersPack;
});

const promise = () => {
  return new Promise((resolve, reject) => {
    const sum = getRandoms(10).reduce((acumulator, currentValue) =>  acumulator + currentValue, 0);

    if (sum < 8000) {
      resolve(`Promise resolvida`)
    } else {
      reject('Promise rejeitada')
    }
  })
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));
  
};

promise();
  




