const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

//1
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'Erro: a função não ocorreu como esperada');
// 2
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Erro: retorno inesperado');
// 3
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4, 5, 6], 5), [1, 2, 3, 4, 6], 'Erro: nao retorna esperado');
// 4
console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3));
// 5
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Erro: falha na execução da função');