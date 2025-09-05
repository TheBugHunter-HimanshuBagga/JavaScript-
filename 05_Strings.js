// operations on strings

// "hello" + "world"
// 'helloworld'

const name = "Himanshu"
const repo = 6
// console.log(name + repo + " Value")
console.log(`Hello my name is ${name.toLowerCase()} and repocount is ${repo}`)

const gameName = new String('HimanshuFC')
// 0 - h , 1 - i , 2 - m , 3 - a , .......
console.log(gameName[0]) // H
console.log(gameName.__proto__) // {}
console.log(gameName.length) // 10
console.log(gameName.toUpperCase())// HIMANSHUFC
console.log(gameName.charAt(5)) // s
console.log(gameName.indexOf('F'))

const newString = gameName.substring(0,4) // can't give -ve values
console.log(newString) // Hima

const anotherString = gameName.slice(-10,8) // can give -ve value
console.log(anotherString)
console.log("TRIM")
const newStringone = "  Himanshu  "
console.log(newStringone) //   Himanshu
console.log(newStringone.trim()) //Himanshu

const url = "https://himanshu.com/himanshu%20FC"
console.log(url.replace('%20','-')) //https://himanshu.com/himanshu-FC
console.log(url.includes('himanshu')) //true

const gameName2 = "Himanshu-FC-coding"
console.log(gameName2.split('-')) //[ 'Himanshu', 'FC', 'coding' ]
