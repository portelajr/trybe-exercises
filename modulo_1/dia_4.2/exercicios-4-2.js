// 1  Imprimir valores do array 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
}

// 2 

for (let index = 0; index < numbers.length; index++) {
    let somaAcumulada = armazena + numbers[index];
    let armazena = numbers[index]
    
    console.log(somaAcumulada);
}

