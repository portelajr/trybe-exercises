//1 
const returnFatorial = (inteiro) => {
  let somaAcumulada = 1;
  for (let index = inteiro; index === 0; index -= 1 ) {
    let somaAcumulada = somaAcumulada *= index; 
  }
  
  return console.log(somaAcumulada);
}

returnFatorial(5);

// 2
const longestWord = (sentence) => {
  let arrayWords = sentence.split(' ');
  for (let index = 0; index < arrayWords.length; index += 1) {
    arrayWords[index].length
  }
}

longestWord('Passeando pelo bosque encontrei uma flor');

// 3

// 4 


const insertWord = (word) => {
  let sentence = 'Ola, x. Seja bem-vindo';
  let newSentence = sentence.replace('x', word);
  return newSentence
}
insertWord('Junior');

// 5

const  skills = ['html', 'css', 'javascript', 'github', 'dom'];

const  concatAll = () => {
  let sortedSkills =  skills.sort();
  console.log(sortedSkills)
}

concatAll();

  


