const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// 1
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Erro: retorno de funcao inesperado');
// 2
assert.strictEqual(myFizzBuzz(9), 'fizz', 'Erro: divisiveis apenas por 3 retorna fizz');
// 3
assert.strictEqual(myFizzBuzz(10), 'buzz', 'Erro: divisieis apenas por 5 reotrnam buzz');
// 4
assert.strictEqual(myFizzBuzz(8), 8, 'Erro: indivisivel por 3 e/ou 5 retorna proprio param');
// 5 
assert.strictEqual(myFizzBuzz('s'), false, 'Erro: restrição de parametro nao funcionou');