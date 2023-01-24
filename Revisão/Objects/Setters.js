/**
 * 1 - Atualmente, no robô existe um método getter para numOfSensors,
 * mas nenhum método setter! E se precisarmos adicionar ou remover alguns
 * sensores? Vamos corrigir esse problema.
 * Adicione um método setter chamado numOfSensors usando a palavra-chave set.
 * Forneça um parâmetro de num. Deixe o corpo da função vazio por enquanto.
 * 
 * 2 - Há algumas coisas que devemos fazer no método setter:
    -> Adicione uma verificação para ver se num é um número usando o operador typeof.
    -> num também deve ser maior ou igual a 0.
    -> Se ambas as condições forem atendidas, reatribua this._numOfSensors para num.
    3 - Agora adicione um else que registre 'Passe um número maior ou igual a 0' ao console.
    4 - Use o método setter numOfSensors no robô para atribuir _numOfSensors a 100.
    5 - Para verificar se o método setter funcionou, console.log() robot.numOfSensors.
 */
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },

    
    set numOfSensors(num){
        if (typeof  num === 'number' &&  num >= 0) {
           return  this._numOfSensors = num;
        } else console.log('Passe um número maior ou igual a 0') 
    },
};

robot.numOfSensors = 100  
console.log(robot.numOfSensors)
robot.numOfSensors = 0
console.log(robot.numOfSensors)
robot.numOfSensors = -6
console.log(robot.numOfSensors)