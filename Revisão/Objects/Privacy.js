/**
 * 1 - Abaixo do objeto robô, reatribua a propriedade _energyLevel para 'alto'.
 * 2 - Agora dê uma olhada no novo método de recarga no robot. .recharge() adicionará 30 a _energyLevel.
O que vai acontecer agora que _energyLevel não é um número?
Chame .recharge() no robô para descobrir.
Observe que uma string estranha é impressa no console! Isso é conhecido como efeito colateral da
coerção de tipo. Não precisa se preocupar com o que isso significa por enquanto, mas é importante
entender que você pode causar efeitos colaterais indesejados ao modificar objetos e suas propriedades.
 */

const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };

  robot._energyLevel ='Alto'
  robot.recharge()