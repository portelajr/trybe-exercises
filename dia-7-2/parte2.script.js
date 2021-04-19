const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const addTurn = (objeto, key, value) => {
  objeto[key]= value;
  console.log(objeto);
}

console.log('EXERCICIO 1');
addTurn(lesson2, 'turno', 'manha');

//  2 

const showKeys = (objeto) => console.log(Object.keys(objeto));
console.log('Exercicio 2!');
showKeys(lesson3);

// 3

const showLength = (objeto) => console.log(Object.keys(objeto).length);
console.log('Exercicio 3!');
showLength(lesson1);

// 4 

const showValues = (objeto) => console.log(Object.values(objeto));
console.log('Exercicio 4!');
showValues(lesson3);

// 5 

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

//6

const allStudents = (object) => {
  const { lesson1: {numeroEstudantes: estudantes1} } = allLessons;
  const { lesson2: {numeroEstudantes: estudantes2} } = allLessons;
  const { lesson3: {numeroEstudantes: estudantes3} } = allLessons;
  console.log(`O número total de estudante é: ${ estudantes1 + estudantes2 + estudantes3}!`);    
}
console.log('Exercicio número 6!');
allStudents(allLessons);

// 7

const getValues = (objectTarget, infos) => Object.keys(objectTarget)[infos];

console.log('Exercício 7!');
console.log(getValues(lesson1, 2));

// 8

const verifyData = (objectTarget, key, value) => {
  const entries = Object.entries(objectTarget);
  
  const findKey = entries.some((pair) => pair[0] === key);
  const findValue = entries.some((pair) => pair[1] === value);

  if (findKey && findValue) {
    return true;
  }
};


console.log('Exercício 8!');
console.log(verifyData(lesson1, 'turno', 'manhã'));

//  BÔNUS 

const studentsMath = (objectTarget) => {
 return `${objectTarget.lesson1.numeroEstudantes}`;
}

console.log('Bônus 1!');
console.log(studentsMath(allLessons));

// BÔNUS 2: 

const createRort = (dataTarget, professor) => {
  const data = Object.entries(dataTarget);
  const classes = 0;
  for (let i in data) {
    for
  }
}