/**
 * 1 - No editor de código, existe um array chamado words. Queremos criar um novo array
 * de palavras interessantes. A primeira coisa que queremos fazer é verificar se há palavras
 * com menos de 6 caracteres. Há algo faltando na chamada do método words.some(). Corrija esse
 * método para que true seja impresso no console.
Para obter mais informações, consulte a documentação do MDN em .some()
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some

2 - O método .some() retornou true, o que significa que há algumas palavras no array com menos de
seis caracteres. Use o método .filter() para salvar qualquer palavra com mais de 5 caracteres em uma
nova variável chamada interestWords, declarada com const.
Usamos .filter() em um exercício anterior, mas, para obter mais informações, consulte a documentação
do MDN sobre .filter().
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

3 - Na última linha, existe este código:
// console.log(interestingWords.every(word => ));
Complete o código entre parênteses para verificar se cada elemento possui mais de 5 caracteres.
Certifique-se de descomentar (excluir o // antes) a última linha do programa antes de executar o código.
Para obter mais informações, consulte a documentação do MDN em .every() .
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 */

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array

const interestWords = words.filter (word => {
    return word.length > 5
})




// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestWords.every((word) => { 
    return word.length > 5;
} ));