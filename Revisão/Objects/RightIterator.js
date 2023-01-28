/**
 * 1 - Substitua a palavra method na primeira chamada de método por um método
 * que fará algo para cada um dos valores no array e retornará indefinido.
 * 
 * 2 - Na segunda chamada de método, substitua a palavra method por um método que retornará
 * um novo array com apenas os elementos com mais de 7 caracteres.
 * 
 * 3 - Na terceira chamada de método, substitua a palavra method por um método que aceite
 * um array contendo vários valores e retorne um único valor.
 * 
 * 4 - Na quarta chamada de método, substitua a palavra method por um método que retornará um 
 * novo array de números retornados da função.
 * 
 * 5 - Na quinta chamada de método, substitua a palavra method por
 * um método que retornará um valor booleano.
 */

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];



//  Escolha um método que retornará indefinido
cities.forEach(city => console.log('Have you visited ' + city + '?'));
console.log(cities)

// Escolha um método que retornará um novo array
const longCities = cities.filter(city => city.length > 7);
console.log(longCities)

// Escolha um método que retornará um único valor
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Escolha um método que retornará um novo array
const smallerNums = nums.map(num => num - 5);
console.log(smallerNums)

// Escolha um método que retornará um valor booleano
const result = nums.some(num => num < 5)
console.log(result)