// /**
//  * 1 - Em vez de fazer robôs individuais como temos feito, vamos fazer uma função de
//  * fábrica para fazer os robôs que quisermos!
// Crie uma função de fábrica chamada robotFactory que tenha dois parâmetros model e mobile.
// Faça a função retornar um objeto. No objeto, adicione uma chave de modelo com o valor do parâmetro
// do modelo. Adicione outra propriedade que tenha uma chave mobile com um valor do parâmetro mobile.
// Em seguida, adicione um método chamado beep sem um parâmetro que registrará 'Beep Boop' no console.
// 2 - Use sua função de fábrica declarando uma variável const chamada tinCan. Atribua a tinCan o valor
// de chamar robotFactory com o primeiro argumento de 'P-500' e o segundo argumento de true.
// 3 - Vamos agora verificar o que o tinCan pode fazer! Chame .beep() no tinCan.
// Você deve ver 'Beep Boop' impresso no console, o que significa que a função de fábrica produziu um
// objeto robô! Brinque com o tinCan para verificar as outras propriedades!
//  */

const robotFactory = ( model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep(){
            console.log('Beep Boop')
        }
    }
}

const tinCan = robotFactory ('P-500', true)
const newRobot = robotFactory ('R2-D2', true)
tinCan.beep()