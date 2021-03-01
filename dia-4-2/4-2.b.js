// parte II
// 1

function verificaPalindrome(string) {
    let espelho = []

    for (let index = string.lenght; index = 0; index -= 1) {
        espelho.push = string[index]
    }

    if (espelho == string) {
        console.log('É um palíndrome')
    } else {
        console.log('Não é um palíndrome')
    }  
}

verificaPalindrome('arara')

