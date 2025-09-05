// primitive vs NonPrimitive

// call by value
// call by reference

//Primitive 
// 7 types - String , Number , Boolean , null , undefined , Symbol , BigInt

// const score = false
// console.log(typeof score)

// Reference (NoN primitive)
// Array , Objects , Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 
console.log(id === anotherId) // false

const BigNumber = 32346745816n

// Array , Objects , Functions

const iphones = ["Iphone 13" , "Iphone 14" , "Iphone 15"]

let myObj = {
    name : "Himanshu",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof BigNumber) // bigint

console.log(typeof outsideTemp) // Object

console.log(typeof anotherId) // symbol

// stack(Primitive) - value and Heap(Non primitive) - reference
console.log("")
let myYoutubeName = "Himanshu Bagga"

let anotherName = myYoutubeName
anotherName = "ChaiAurCode"
console.log(myYoutubeName)
console.log(anotherName)
// primitive datatype goes in stack
// non primitive datatypes goes in heap
let userone = {
    email: "Himanshu@gmail.com",
    upi: "abc@ybl",
}
let usertwo = userone
usertwo.email = "himanshu@google.com"
console.log(userone.email) // himanshu@google.com
console.log(usertwo.email) // himanshu@google.com
// Both got same value as it is stored in the heap since it is a Non primitive