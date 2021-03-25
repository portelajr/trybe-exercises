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

addTurn(lesson2, 'turno', 'manha');

//  2 

const showKeys = (objeto) => console.log(Object.keys(objeto));
showKeys(lesson3);

// 3

const showLength = (objeto) => console.log(Object.keys(objeto).length);
showLength(lesson1);

// 4 

const showValues = (objeto) => console.log(Object.values(objeto));
showValues(lesson3);

// 5 

const gradeSchool = (object1, object2,  object3)  => { object}        

gradeSchool() 

