// 1  Imprimir valores do array 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
}

// 2 Soma valores array

let somaArray = 0

for (let index = 0;index < numbers.length; index++) { 
    somaArray += numbers[index]; 
}

console.log(somaArray)

// 3  Média valores do array

let mediaArray = (somaArray / numbers.length)
console.log(mediaArray);  

// 4  Verificar media maior que 20

if (mediaArray > 20) {
    console.log("Média maior que 20")
} else {
    console.log("Média menor ou igual a 20")
}

// 5  Maior número do array 

let maiorNumero = 0

for (let indice = 0; indice < numbers.length; indice++) {
    if (numbers[indice] >= maiorNumero) {
        maiorNumero = numbers[indice];   
    } else {
        numbers[indice] = numbers[indice];
    }
}

console.log("Maior número do Array é: " + maiorNumero);

// 6