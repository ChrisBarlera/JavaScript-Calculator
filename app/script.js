const visor = document.getElementById('div-visor')
const characters = document.getElementsByClassName('char')
const simbolos = document.getElementsByClassName('all-simb')

//Pega innerHTML de objeto da classe char e adiciona no texto do visor
for (let index = 0; index < characters.length; index++) {
    const charzinho = characters[index];
    charzinho.onclick = function () {
        visor.innerHTML = visor.innerHTML + this.innerHTML
    }
}


function conta(valor1, valor2, operacao) {
    let a = parseFloat(valor1);
    let b = parseFloat(valor2);
    let resultado;
    if (operacao === '-') {
        resultado = a - b
        return resultado
    }
    if (operacao === '+') {
        resultado = a + b
        return resultado
    }
    if (operacao === 'X') {
        resultado = a * b
        return resultado
    }
    if (operacao === '/') {
        resultado = a / b
        return resultado
    }
}
const equalBt = document.getElementById('equal-simb')
equalBt.onclick = function () {
    let valor1;
    let operacao;
    let valor2;
    let pos;
    let text = visor.innerHTML
    //em cada um de text, vou ter que verificar se é igual a qualquer um de simbolos
    for (let index = 0; index < text.length; index++) {
        const char = text[index];
        for (let index = 0; index < simbolos.length; index++) {
            const simb = simbolos[index];
            if (char === simb.innerHTML) {
                operacao === char
                pos = text.indexOf(char)
            }
        }
    }
    valor1 = text.slice(0, pos)
    operacao = text.charAt(pos)
    valor2 = text.slice(pos+1, text.length)
    let resultado = conta(valor1,valor2,operacao)
    visor.innerHTML = resultado
}

const clearBt = document.getElementById('clear-simb')
clearBt.onclick = function () {
    visor.innerHTML = ''
}