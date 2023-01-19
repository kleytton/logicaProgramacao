//1
const input = 'Procurando Nemo ';

//2
const vogais = ['a', 'e', 'i', 'o', 'u']

//3
let resultArray = [];

//4
for (let percorrer = 0; percorrer < input.length; percorrer++) [
    //console.log(percorrer)
]

//5
// for(let percorrer = 0; percorrer < input.length; percorrer++)[
//     console.log(percorrer)


// 6 /7 /8 /9
for (let percorrer = 0; percorrer < input.length; percorrer++) {
    for (let correr = 0; correr < vogais.length; correr++) {
        if (input[percorrer] === vogais[correr]) {
            resultArray.push(input[percorrer])
            if (input[percorrer] === vogais[1] || input[percorrer] === vogais['u'] ) {
                resultArray.push(input[percorrer])
            }
            

        }


    }
}
//console.log(resultArray);
const result = resultArray.join(' ')
console.log(result.toUpperCase())

