let spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        },
        chef: {
            name: 'Luiz',
            degree: 'Chefe de cozinha'
        }

    }
};

for (let crewMember in spaceship.crew) {
    if (crewMember === 'captain' || crewMember === 'medic') {
        console.log(`${crewMember}: ${spaceship.crew[crewMember].name}
         e seu posto é: ${spaceship.crew[crewMember].degree}`)
    }
}

const goat = {
    dietType: 'herbivore',
    name: 'beebora',
    makeSound() {
        console.log('baaa');
    },
    diet(){
        console.log(this.dietType)
    }
}
console.log(goat.name);
console.log(goat.dietType);
goat.makeSound();
goat.diet()
