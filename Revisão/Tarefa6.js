let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the',
 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 
 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage)
 //1
 secretMessage.pop()
 console.log(secretMessage)
console.log(secretMessage)

//2
console.log(secretMessage.length)

//3
secretMessage.push('To', 'Program')
console.log(secretMessage)

//4
const idx = secretMessage.indexOf('easily')
if(idx !== -1){
 // secretMessage.splice(idx, 1, 'right')
 secretMessage[idx] = 'right'
}
//secretMessage.splice(7, 1, 'right')
console.log(secretMessage)

//5
secretMessage.shift()
console.log(secretMessage)

//6
secretMessage.unshift('Programming')
console.log(secretMessage)

//7
secretMessage.splice(secretMessage.indexOf('get'), 5, 'know')
console.log(secretMessage)

//8
console.log(secretMessage)
console.log(secretMessage.join(' '));
