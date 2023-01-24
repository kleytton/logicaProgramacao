/**
 * 1 - No código abaixo existe um objeto, robot. Gostaríamos de pegar os nomes das propriedades,
 * também conhecidas como chaves, e salvá-las em um array atribuído a robotKeys. No entanto, há
 * algo faltando na chamada do método.
Descubra o que temos que incluir lendo a documentação Object.keys() do MDN.
// Acesse https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
2 - Object.entries() também retornará um array, mas o array conterá mais arrays que possuem a chave e o valor das propriedades em um objeto.
Declare uma variável const chamada robotEntries e atribua a ela as entradas do robô chamando Object.entries().
Para descobrir como usar Object.entries(), leia a documentação em MDN.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
3 - Agora, e se quisermos outro objeto que tenha as propriedades do robô, mas com algumas propriedades adicionais.
Object.assign() parece um ótimo método para usar, mas, como nos exemplos anteriores, devemos verificar a documentação
de Object.assign() no MDN.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
Declare uma variável const chamada newRobot. newRobot será um novo objeto que possui todas as propriedades do robô e
as propriedades do seguinte objeto: {laserBlaster: true, voiceRecognition: true}. Certifique-se de que você não está
alterando o objeto do robô!
 */
const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// O que está faltando na seguinte chamada de método?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries abaixo desta linha:

const robotEntries = Object.entries(robot) 




console.log(robotEntries);

// Declare newRobot abaixo desta linha:

let newRobot = Object.assign({laserBlaster: true,
     voiceRecognition: true})
console.log(newRobot);
console.log(robot);