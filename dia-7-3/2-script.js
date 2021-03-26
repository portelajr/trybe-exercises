const assert = require('assert');

const { AssertionError } = require('node:assert');



function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// 1
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'O array retornado nao e o esperado');
//2
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'O array retornado é igual');
// 3
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5], 'Erro: os arrays sao iguais'); 
// 4
assert.deepStrictEqual(myRemove([1, 2, 3, 4, 5], 5), [1, 2, 3, 4], 'Erro: arrays nao iguais');



