const { test } = require('@jest/globals');
const { describe } = require('yargs');
const sum = require('./exercicio1');

describe('Testando limites da funcao', () => {
  test('Testando o caso de soma numérica', () => {
    expect(sum(2, 3)).toBe(5);
  });
    
  expect(sum(0, 0)).toBe(0);
  expect(() => { sum(4, '5') }).toThrow();
  expect(()=> { sum(4, '5') }).toThrowError(new Error('parameter must be a numeber'));

});

test(  , () => {

});
