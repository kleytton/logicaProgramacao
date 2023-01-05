// Altere plantaPrecisaDeAgua para usar a sintaxe de arrow function


//Arrow Function 
const plantaPrecisaDeAgua = (dia) => {
    if (dia === 'Quarta-feira') {
      return true;
    } else {
      return false;
    }
  };

  console.log(plantaPrecisaDeAgua('Terça-Feira'));



//Function Declartion
  //function plantaPrecisaDeAgua (dia)  {
   // if (dia === 'Quarta-feira') {
   //   return true;
    //} else {
    //  return false;
    //}
 // };

  //Function Expression
  //const plantaPrecisaDeAgua = function (dia)  {
   // if (dia === 'Quarta-feira') {
   //   return true;
    //} else {
    //  return false;
    //}
  //};

  