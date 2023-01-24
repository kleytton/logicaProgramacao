const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex ( animais => {
    return animais === 'elephant'
});

console.log(foundAnimal)

const startsWithS = animals.findIndex (animais => {
    return animais [0] === 's'
})

console.log(startsWithS)