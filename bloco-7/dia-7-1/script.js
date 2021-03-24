// 1

const testingScope = escopo => {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(`${elseScope} otimo, fui uitilizada no escopo!`);
    }
}

testingScope(false);

// 2

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = (array) => (array.length > 1) ? console.log(array.sort((a, b) => b - a)) : console.log('invalido');

sortArray(oddsAndEvens);



