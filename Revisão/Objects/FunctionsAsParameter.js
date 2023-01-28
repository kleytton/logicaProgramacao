/**
 * 1 - Aqui temos uma função, addTwo(), que adiciona 2 a tudo o que é passado para ela.
 * Abaixo disso, criamos o que será uma função de ordem superior, checkConsistentOutput().
 * O objetivo da função de ordem superior será verificar o trabalho de addTwo(). Vamos começar!
Para começar, dentro do corpo de checkConsistentOutput(), declare duas variáveis: checkA e checkB:
    checkA armazena a soma val mais 2.
    checkB armazena a invocação do retorno de chamada da função, com val como argumento.
2 - Em seguida, abaixo das variáveis, escreva uma instrução condicional que verifique se o valor
de checkA é igual ao valor checkB. Se verdadeiro, retorna o resultado da função de retorno de chamada. Se falso, retorne a string 'resultados inconsistentes'.
3 - Por fim, usando console.log(), registre a invocação de checkConsistentOutput() com dois argumentos:
a função addTwo() e qualquer número.
 */
const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
   const checkA = val + 2;
   const checkB = func(val);
   return checkA === checkB ? func(val) : 'resultados inconsistentes'
//    if (checkA === checkB){
//     return func(val)
//    }  
//     return 'resultados inconsistentes'
   
   }
  
  console.log(checkConsistentOutput(addTwo, 5));
