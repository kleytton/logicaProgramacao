/**
 * 1 - No robot, crie um método getter chamado energyLevel usando
 * a palavra-chave get. Deixe o corpo da função em branco por enquanto.
 * 2 - Dentro do método getter, adicione uma instrução if para verificar
 * se this._energyLevel é um número usando o operador typeof. Se essa condição
 * for verdadeira, retorne 'Meu nível de energia atual é ENERGYLEVEL'. Substitua
 * ENERGYLEVEL pelo valor de this._energyLevel.
 * 3 - Se this._energyLevel não for um número, pode ser que a propriedade _energyLevel
 * tenha sido alterada. Vamos adicionar uma declaração de retorno padrão para quando tal cenário surgir.
Adicione uma instrução else que retorne 'Avaria no sistema: não é possível recuperar o nível de energia'.
Certifique-se de retornar a string e não registrá-la no console.
 * 4 - Registre o resultado da chamada do método getter energyLevel no robô para o console.
Observe que o método retornará uma resposta formatada em vez de apenas acessar uma propriedade!
 */

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
        if (typeof this._energyLevel === 'number'){
            return `Meu nível de energia atual é ${this._energyLevel}%`
        } else return `Avaria no sistema: não é possível recuperar o nível de energia`
            
        
    }
    
  };  
  console.log(robot.energyLevel)