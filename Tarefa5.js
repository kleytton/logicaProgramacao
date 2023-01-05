
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'pedra' || userInput === 'papel' || userInput === 'tesoura' || userInput === 'bomba') {

        return userInput;
    }

    else return console.log('erro')
};

//   console.log(getUserChoice())

function getComputerChoice() {
    const numberChoice = Math.floor(Math.random() * 3)
    //pedra papel tesoura
    let option;
    switch (numberChoice) {
        case 0:
            option = 'pedra'
            break;
        case 1:
            option = 'papel'
            break
        case 2:
            option = 'tesoura'
            break
        case 3:
            option = 'erro'
    }


    return option;

}

//console.log(getComputerChoice())

function determineWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return 'Empatou'
    }

    if (userChoice === 'pedra') {
        if (computerChoice === 'papel') {
            return 'Computador ganhou'
        } else return 'Humano Ganhou'
    }

    if (userChoice === 'papel') {
        if (computerChoice === 'tesoura') {
            return 'Computador ganhou'
        } else return ' Humano ganhou'
    }

    if (userChoice === 'tesoura') {
        if (computerChoice === 'pedra') {
            return 'Computador ganhou'
        } else return 'Humano Ganhou'
    }
    if (userChoice === 'bomba')
    return 'Humano ganho'



}

//console.log(determineWinner('papel', 'pedra'));

const playGamer = () => {
    let userChoice = getUserChoice('bomba');
    let computerChoice = getComputerChoice()
    let result = determineWinner(userChoice, computerChoice);
    console.log(`Escolha do usuario foi: ${userChoice}`);
    console.log(`Escolha do computador foi: ${computerChoice}`);
    console.log(`Oresultado foi: ${result}`)
}

playGamer();





















