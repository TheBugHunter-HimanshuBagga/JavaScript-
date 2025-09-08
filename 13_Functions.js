// when we don't know how many arguments

// function calculateCartPrice(...num1){ // ...num1(rest Operator) we get an array
// // rest operator used to handel multiple values
//     return num1
// }
// console.log(calculateCartPrice(2)) //2

// console.log(calculateCartPrice(200,300,400))// [ 200, 300, 400 ]

function calculateCartPrice(val1 , val2 ,...num1){ // ...num1(rest Operator) we get an array
// rest operator used to handel multiple values
    return num1
}
console.log(calculateCartPrice(2)) //[]

console.log(calculateCartPrice(200,300,400 , 500 , 600))// [ 400, 500, 600 ]


const user = {
    username: "Himanshu",
    price: 199
}
function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handelObject(user)//Username is Himanshu and price is 199

handelObject({ // Username is Sam and price is 399
    username: "Sam",
    price: 399
})


const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[2];
}
console.log(returnSecondValue(myNewArray))// 400