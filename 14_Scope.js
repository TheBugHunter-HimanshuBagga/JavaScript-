// Every variable works diffrently

// var c = 200 // Global Scope
let a = 400
// Scope (Block scope)
if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ",a) // block scope(10)
}

console.log(a) // global scope (400)
// console.log(b)
console.log(c) //30