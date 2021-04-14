const getRandoms = ((units) => {
    let numbersPack = [];
  
    while(numbersPack.length < units) {
      let number = (Math.floor(Math.random() * 50));
      number *= number;
      numbersPack.push(number);
    };
    return numbersPack;
});

const divideSum = (number) => {
  const dividers = [2, 3, 5, 10];
  return dividers.map((divider) => number / divider);
}

const promise = () => {
    return new Promise((resolve, reject) => {
      const sum = getRandoms(10).reduce((acumulator, currentValue) =>  acumulator + currentValue, 0);
  
      if (sum < 8000) {
        resolve(sum)
      } else {
        reject(`É mais de oito mil! Essa promisse deve ser quebrada!`) // exercicio 4
      }
    })
      .then((resolve) => divideSum(resolve)) // exercicio 3
      .then((newArray) => console.log(newArray))  
      .catch((reject) => console.log(reject));
};

const finalSum = async () => {
  const package = await promise()
}
promise();