// Dada uma matriz de matrizes, tranforme em uma unica matriz
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  const singleOne = arrays.reduce((acumulator, currentValue) => {
    for (let i in currentValue) {
      acumulator.push(currentValue[i]);        
    }
    return acumulator;
  },[]); 

  return singleOne;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
