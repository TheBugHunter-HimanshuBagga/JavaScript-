let score1 = 18
console.log(typeof score1)

let score2 = "18"
console.log(typeof score2)

let score3 = "18"
console.log(typeof Number(score3)) 

let score4 = "25"
let valueInNumber = Number(score4)
console.log(typeof valueInNumber)

let score5 = null
console.log(typeof score5)

let score6 = undefined
console.log(typeof score6)

let score7 = true // 1
console.log(typeof score7)

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1 , false => 0

let isLoggedIn = 0 // false , 1=> true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let isLoggedIn1 = "" // false

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)

let isLoggedIn2 = "Himanshu" // true

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)

// 1 => true and 0 => false
// "" => false
// "Himanshu" => true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber)

console.log(" ")

let number = 3
let negativeValue = -number
console.log(negativeValue)

let str1 = "Hello" 
let str2 = " Bro"
let str3 = str1 + str2 
console.log(str3)

console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32