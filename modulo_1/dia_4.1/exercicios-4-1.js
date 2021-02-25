//1 Atribuir variaveis e operacoes

let a = 5;
let b = 8;

let soma = (a +b);

let subtracao = (b -a);

let multiplicacao = (a * b);

let divisao = (b / a);

let modulo = (b % a);

// 2 Retoranr maior valor

let x = 5;
let y = 12;

if ( x > y) {
    console.log(x);
} else {
    console.log(y);
}

// 3  Retornar o maior valor entre variaveis

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

// 4 Verificar numeros 

let i = 0

if (i > 0) {
    console.log('positive');
} else if (i < 0) {
    console.log('negative');
} else{
    console.log('zero');
}

// 5 Verificar angulos de triangulo

let s = 45;
let t = 60;
let u = 90;
let triangulo = (s+t+u) == 180;

if (triangulo == true) {
    console.log('triangulo formado!');
} else {
    console.log('angulos nao formam um triangulo');
}

// 6 Movimentos do xadrez

let pecasXadrez = 'Torre';

switch (pecasXadrez.toLowerCase()) {
    case 'rei':
        console.log('uma casa, direção livre');
        break;
    case 'rainha':
        console.log('percorre diagonais,linhas e colunas');
        break;
    case 'torre':
        console.log('percorre linhas e colunas');
        break;
    case 'cavalo':
        console.log('duas casas no mesmo sentido, uma perpendicular');
        break;
    case 'bispo':
        console.log('percorre diagonais')
        break;
    case 'peao':
        console.log('uma casa. movimento em coluna, ataque diagonal')
        break;
    default:
        console.log('peça inválida')
        break;
}

// 7 Conversao notas em conceito

let nota = 65

if (nota >= 90) {
    console.log('conceito A');
} else if (nota >=80) {
    console.log('conceito B');
} else if (nota >= 70) {
    console.log('conceito C');
} else if (nota >= 60) {
    console.log('conceito D');
} else if (nota >= 50) {
    console.log('conceito E');
} else {
    console.log('conceito F');
}

// 8 Verificar um numero par

let alfa = 7;
let beta = 2;
let gama = 9;

if (alfa % 2 == 0 || beta % 2 == 0 || gama % 2 == 0) {
    console.log('true');
} else {
    console.log('false')
}

// 9 Verificar numero impar 

let omega = 12;
let lambida= 8;
let mi = 6;

let imparTrio = (omega % 2 !== 0 || lambida % 2 !== 0 || mi % 2 !== 0 );

// 10

let valorEntrada = 30;
let imposto = 1.2;
let preco = 100;
let lucro = (preco - (valorEntrada * imposto ));
let lucroMilhar = (lucro * 1000);
console.log(lucroMilhar);

// 11

let salarioBruto;
let aliquotaInss;
let aliquotaIr;

switch (salarioBruto) {
    case (salarioBruto >= 0  && salarioBruto <= 1556.94 ):
        aliquotaInss = 0.92;
        break;
    case (salarioBruto >= 1556.95 && salarioBruto<= 2594.92):
        aliquotaInss = 0.91;
        break;
    case (salarioBruto >= 2594.93 && salarioBruto <= 5189.82 ):
        aliquotaInss = 0.89;
        break;
    case (salarioBruto > 5189.82):
        aliquotaInss = 0.89;
    default:
        console.log('insira um valor válido');
        break;
}

if (aliquotaInss = 0.89) {
    descontoInss = 570.88;
} else {
    descontoInss = (aliquotaInss * salarioBruto)
}


let descontoInss = (aliquotaInss * salarioBruto)
