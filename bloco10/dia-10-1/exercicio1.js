const sum = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameter must be a numeber');
  }

  return a + b;
}

const funcao2 = () => {};

const funcao3 = () => {};

module.exports = [
  sum,
  funcao2,
  funcao3
] 
