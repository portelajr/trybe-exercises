//1
let a = 5;
let b = 8;

let soma = (a +b);

let subtracao = (b -a);

let multiplicacao = (a * b);

let divisao = (b / a);

let modulo = (b % a);

// 2

let x = 5;
let y = 12;

if ( x > y) {
    console.log(x);
} else {
    console.log(y);
}

// 3 

let num1 = 5
let num2 = 7
let num3 = 10

if ( num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else (num3 > num1 && num3 > num2); {
    console.log(num3);
}

// 4

let i = 0

if (i > 0) {
    console.log('positive');
} else if (i < 0) {
    console.log('negative');
} else{
    console.log('zero');
}

// 5

let s = 45;
let t = 60;
let u = 90;
let triangulo = (s+t+u) == 180;

if (triangulo == true) {
    console.log('triangulo formado!');
} else {
    console.log('angulos nao formam um triangulo');
}