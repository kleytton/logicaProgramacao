// 1 - Escreva uma função, digaOi(). Sua função não deve ter parâmetros e retornar a string 'Oi, Mundo'.
// 2 - A idade mínima mais comum para votar é 18 anos.
// * Escreva uma função possoVotar() que receba um número, representando a
// * idade da pessoa, e retorne o booleano true se ela tiver 18 anos ou 
// * mais e o booleano false se não tiver. 
// * 
// * 3 - Escreva uma função, concordoDiscordo(), que receba duas strings e
// * retorne 'Vocês concordam!'se as duas strings forem iguais e 'Vocês discordam' se
// * forem diferentes.
// * 
// * 4 - Escreva uma função, faseDaVida(), que receba a idade de uma pessoa como um número,
// * e retorne em qual fase da vida ela está.
//        Aqui estão as classificações:
//        0-3 deve retornar 'bebe'
//        4-12 deve retornar 'criança'
//        13-19 deve retornar 'adolescente'
//        20-64 deve retornar 'adulto'
//        65-140 deve retornar 'idoso'
//        Se o número for menor que 0 ou maior que 140,
//        o programa deve retornar 'Esta não pe uma idade válida'
//    5 - Escreva uma função, notaFinal(). 
//    Deve:
//        -> pegue três argumentos do tipo número
//        -> encontre a média desses três números
//        -> retornar a nota da letra (como uma string) que a média corresponde
//        -> retornar 'Você digitou uma nota inválida.' se qualquer uma das três notas for menor
//        que 0 ou maior que 100
//        0-59 deve retornar: 'F'
//        60-69 deve retornar: 'D'
//        70-79 deve retornar: 'C'
//        80-89 deve retornar: 'B'
//        90-100 deve retornar:'A'
// 6 - Escreva uma função, seApresente(), que tenha dois parâmetros de string, patente e ultimoNome,
// e retorne uma string no seguinte formato: 'patente ultimoNome se apresentando para o serviço!'


//1
function digaOi() {
    console.log('Oi mundo')
}

digaOi()
//const digaOi () => 'Oi mundo

//2
const possoVotar = idade => idade >= 18 ? true : false
// function possoVotar(idade) {
//     if (idade >= 18) {
//         return true
//     } else {
//         return false
//     }
// }

console.log(possoVotar(5))
console.log(possoVotar(19))

//3
const concordoDiscordo = (opiniao1, opiniao2) => {
    return opiniao1 === opiniao2 ? 'Voces concordam' : 'Voces discordam'
}

// function concordoDiscordo(opiniao1, opiniao2) {
//     if (opiniao1 === opiniao2) {
//         return 'Voces concordam'
//     } else {
//         return 'Voces discordam'
//     }

// }

console.log(concordoDiscordo('tenho fome', 'tenho fome'))
console.log(concordoDiscordo('tenho fome', 'não tenho fome'))

//4
const faseDaVida = (idade) => {
    if (idade < 0 || idade > 140) {
        return 'Esta nao e uma idade valida'
    }
    if (idade >= 0 && idade <= 3) {
        return 'Bebe'
    }
    if (idade >= 4 && idade <= 12) {
        return 'crianca'
    }
    if (idade >= 13 && idade <= 19) {
        return 'adolescente'
    }
    if (idade >= 20 && idade <= 64) {
        return 'Adulto'
    }
    if (idade >= 65 && idade <= 140) {
        return 'Idoso'
    }
}

// function faseDaVida(idade) {
//     if (idade >= 0 && idade <= 3) {
//         return 'Bebe'
//     }
//     else if (idade >= 4 && idade <= 12) {
//         return 'crianca'
//     }
//     else if (idade >= 13 && idade <= 19) {
//         return 'adolescente'
//     }
//     else if (idade >= 20 && idade <= 64) {
//         return 'adulto'
//     }
//     else if (idade >= 65 && idade <= 140) {
//         return 'idoso'
//     }
//     else {
//         return 'Esta nao e uma idade valida'
//     }
// }
console.log(faseDaVida(14))

//5
// const checarNota = (nota) => {
//     if (nota < 0 || nota > 100) {
//         return true;
//     }
// }

// const notaFinal = (n1,n2,n3) => {
//     if (checarNota(n1) || checarNota(n2 || checarNota(n3))) {
//         return 'Voce digitou uma nota invalida'
//     }
// }

function notaFinal(n1, n2, n3) {
    const media = (n1 + n2 + n3) / 3
    if (media >= 0 && media <= 59) {
        return 'f '
    }
    else if (media >= 60 && media <= 69) {
        return 'd '
    }
    else if (media >= 70 && media <= 79) {
        return 'c '
    }
    else if (media >= 80 && media <= 89) {
        return 'b '
    }
    else if (media >= 90 && media <= 100) {
        return 'a '
    }
    else {
        return 'Voce digitou uma nota invalida'
    }
}

console.log(notaFinal(100, 100, 258))

//6

function seApresente(patente, ultimoNome) {
    return `${patente} ${ultimoNome} se apresentando para o servico!`
}

console.log(seApresente('patente', 'Kleytton'))














