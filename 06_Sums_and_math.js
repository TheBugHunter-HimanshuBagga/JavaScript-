console.log("**********Sums*************")
const score = 400
console.log(score)//400

const balance = new Number(100) // creating object
console.log(balance)//[Number: 100]
console.log(balance.length) // undefined
console.log(balance.toString().length) //3 as its converted to String
console.log(balance.toFixed(2)) //100.00

const otherNumber = 123.897
console.log(otherNumber.toPrecision(3)) //124

const hundreds = 100000
console.log(hundreds.toLocaleString()) //1,00,000
const thousands = 1000000
console.log(thousands.toLocaleString()) //10,00,000 [can also use-> ('en-IN')]

console.log("**********Maths*************")

console.log(Math)//Object [Math] {}
console.log(Math.abs(-18)) //18
console.log(Math.round(4.3))//4
console.log(Math.round(4.6))//5
console.log(Math.round(4.5))//5
// ceil - greater value
// floor - lower value
console.log(Math.ceil(4.3)) //5
console.log(Math.floor(4.9))//4

console.log(Math.min(4,3,9,12)) //3
console.log(Math.max(4,3,9,12)) //12

console.log(Math.random()) // any value b/w 0-1
console.log(Math.ceil(Math.random()*10) + 1) 
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.random() * ( max - min + 1) + min)