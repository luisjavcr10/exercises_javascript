const numbers = [1,2,3,4,5,6]
let sum= 0
for(number of numbers){
    sum = sum + number
}

console.log(sum)

//numbers.push(7)
//numbers.pop()

const first = numbers.shift()

console.log(first)
console.log(numbers)

const repetidos = [1,1,1,1,3,3,3,4,4,4,5,5,5,6,6]
const sinRepetidos = [... new Set(repetidos)]

console.log(sinRepetidos)