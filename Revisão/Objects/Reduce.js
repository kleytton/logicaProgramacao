/**
 * 1 - Vamos praticar chamando .reduce() e usando console.log()
 * para verificar os valores enquanto .reduce() itera através da
 * array.
 * 
 * Para começar, declare uma nova variável chamada newSum usando
 * a palavra-chave const. Atribua a newSum o valor de chamar .reduce()
 * em newNumbers. Você não precisa fornecer nenhum argumento
 * para .reduce() ainda.
 * 
 * Você também verá um TypeError: undefined não é uma função,
 * mas corrigiremos isso depois de adicionar nossa função de retorno
 * de chamada na próxima etapa!
 * 
 * 2 - Forneça .reduce com um argumento de uma função de retorno de chamada.
 * A função callback tem dois parâmetros. O primeiro parâmetro é acumulador e
 * o segundo parâmetro é currentValue. Use uma expressão de função ou uma função de seta.
 * 
 * 3 - Para verificar o valor que está sendo usado enquanto iteramos pelo array, adicione
 * três instruções ao corpo da função do retorno de chamada:
 * 
 *  -> console.log('O valor do acumulador: ', acumulador);
    -> console.log('O valor de currentValue: ', currentValue);
    -> uma instrução de retorno que adiciona acumulador a currentValue.
 * 4 - Registre o valor de newSum no console para ver o valor de retorno da chamada de .reduce() em newNumbers.
 *   
 * 5 - Enquanto temos esse código configurado, vamos também verificar o que acontece se
 * você adicionar um segundo argumento a .reduce(). O segundo argumento atua como um valor
 * inicial para o acumulador.
 * Adicione um segundo argumento de 10 a .reduce().
 * 
 * 
    
 */

    const newNumbers = [1, 3, 5, 7];

    const newSum = newNumbers.reduce((acumulador, currentValue) => {
        console.log('O valor do acumulador: ', acumulador)
        console.log('O valor de currentValue: ', currentValue);
        return acumulador + currentValue 
    }, 10)

    console.log(newSum)
    