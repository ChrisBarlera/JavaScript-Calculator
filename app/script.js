const visor = document.getElementById('div-visor')
const characters = document.getElementsByClassName('char')
const simbolos = document.getElementsByClassName('all-simb')
const numbs = document.getElementsByClassName('all-num')
const equalBt = document.getElementById('equal-simb')
const clearBt = document.getElementById('clear-simb')
const undoBt = document.getElementById("undo-simb")

// onclick para todos os NUMEROS
for (let index = 0; index < numbs.length; index++) {
    const element = numbs[index];
    const charAtual = element.innerHTML
    element.onclick = function () {
        if (charAtual == '.') {
            if (visor.innerHTML.charAt(visor.innerHTML.length-1) != charAtual) {
                visor.innerHTML = visor.innerHTML + charAtual
            }
        } else {
            visor.innerHTML = visor.innerHTML + charAtual
        }
    }
}

// onlcick para todos os SIMBOLOS
for (let index = 0; index < simbolos.length; index++) {
    const element = simbolos[index];
    const simbAtual = element.innerHTML
    let podeInserir = true
    element.onclick = function () {
        // INSERINDO SIMBOLOS NA TELA //
        {
            podeInserir = true
            if (visor.innerHTML == '') {
                podeInserir = false
            }
            for (let index = 0; index < simbolos.length; index++) {
                const elementAtual = simbolos[index];
                if (simbAtual == '-') {
                    if (visor.innerHTML.charAt(visor.innerHTML.length-1) == '-' || visor.innerHTML.charAt(visor.innerHTML.length-1) == '+') {
                        podeInserir = false
                    } else {
                        podeInserir = true
                    }
                }
                if (visor.innerHTML.charAt(visor.innerHTML.length-1) == elementAtual.innerHTML) {
                    podeInserir = false
                }
            }
            if (podeInserir) {
                visor.innerHTML = visor.innerHTML + simbAtual
            }
        }
        // ///////////////////////// //
        // CASO JA TENHA UMA OPERAÇAO NO VISOR //
        {
            // conta quantos simbolos tem no visor e grava a posicao deles
            let simbCount = 0
            let pos_A = 0
            let pos_B = 0
            let pos_C = 0
            for (let i = 0; i < visor.innerHTML.length; i++) {
                const charAtual = visor.innerHTML.charAt(i);
                for (let j = 0; j < simbolos.length; j++) {
                    const elementAgora = simbolos[j];
                    if (charAtual == elementAgora.innerHTML) {
                        switch (simbCount) {
                            case 0:
                                pos_A = i
                                break;
                            case 1:
                                pos_B = i
                                break;
                            case 2:
                                pos_C = i
                                break;
                        }
                        simbCount++
                    }
                }
            }

            switch (simbCount) {
                case 2:
                    if (visor.innerHTML.charAt(0) != '-') {
                        let valorA = visor.innerHTML.substring(0,pos_A);
                        let valorB = visor.innerHTML.substring(pos_A+1,visor.innerHTML.length-1);
                        let operacao = visor.innerHTML.charAt(pos_A);
                        visor.innerHTML = conta(valorA,valorB,operacao) + simbAtual;
                    }
                    break;
                case 3:
                    let valorA = visor.innerHTML.substring(0,pos_B);
                    let valorB = visor.innerHTML.substring(pos_B+1,visor.innerHTML.length-1);
                    let operacao = visor.innerHTML.charAt(pos_B);
                    visor.innerHTML = conta(valorA,valorB,operacao) + simbAtual;
            }
        }
        // ////////////////////////////////// //
    }
}

// onclick para apagar tudo do visor
clearBt.onclick = function () {
    visor.innerHTML = ''
}

// onclick para apagar ultimo char do visor
undoBt.onclick = function (){
    visor.innerHTML = visor.innerHTML.slice(0,visor.innerHTML.length-1)
}

// onclick para botao = (igual)
equalBt.onclick = function () {
    let valor1;
    let operacao;
    let valor2;
    let pos;
    let text = visor.innerHTML
    // salva a posicao do char de operacao e salva ele tbm
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
function conta(valor1, valor2, operacao) {
    let a = parseFloat(valor1);
    let b = parseFloat(valor2);
    let resultado;
    switch (operacao) {
        case '-':
            resultado = a - b
            break;
        case '+':
            resultado = a + b
            break;
        case 'x':
            resultado = a * b
            break
        case '/':
            resultado = a / b
    }

    return resultado;
}