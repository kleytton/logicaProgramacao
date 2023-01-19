const robot = {
    moedel: '1E78V2',
    energyLevel: 100,
    provideInfo(){
        return `I am ${this.moedel} and my current energy level is ${this.energyLevel }.`  
    }   
};

console.log(robot.provideInfo())