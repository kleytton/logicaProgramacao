/**
 * 1 - Usando const, declare uma variável de nome mais curto, isTwoPlusTwo,
 * que será mais fácil de trabalhar. Atribua checkThatTwoPlusTwoEqualsFourAMillionTimes
 * como seu valor.
 * 
 * 2 - Invoque sua função isTwoPlusTwo().
 * 
 * 3 - Hmmm, se esquecemos o nome original da nossa função. Existe uma maneira de descobrirmos isso?
Use isTwoPlusTwo para console.log() a propriedade name da função que atribuímos a isTwoPlusTwo.
 */

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };


  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

  isTwoPlusTwo();

  console.log(isTwoPlusTwo.name)
  