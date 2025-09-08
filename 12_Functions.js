// Basics

function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("M")
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
    console.log("U")
}
sayMyName()


// function addTwoNumber(num1 , num2){
//     console.log(num1+num2)
// }
// const result = addTwoNumber(5,9) //14
// console.log("Result:" , result) //Result: undefined (WHY?)

function addTwoNumber(num1 , num2){
    // let result = num1 + num2
    // return result

    return num1+num2
}
const result = addTwoNumber(5,9) 
//console.log("Result:" , result)  //Result: 14

function loginUserMessage(username){ //  username = "Sam" then if statement never gonna execute
    if(username === undefined){ // (!username)
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Himanshu") ) //Himanshu just logged in
console.log(loginUserMessage() )// undefined
