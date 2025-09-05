//Arrays
const myArr = [20 , 1 , 2 , 3 , 4 , 5]
// arrays are resizeable
console.log(myArr[0]); //20
// shallow copy(Same Reference) and deep copy(Don't share same reference)
const Iphones = ["Iphone13" , "Iphone14" , "Iphone15"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]) // 2

// Arrays Methods

myArr.push(6); 
myArr.push(7); 
console.log(myArr)//[20 , 1 , 2 , 3 , 4 , 5 , 6 , 7]
myArr.pop(); 
console.log(myArr)//[20 , 1 , 2 , 3 , 4 , 5 , 6 ]

myArr.unshift(18) // push in front
console.log(myArr)//[ 18 , 20 , 1 , 2 , 3 , 4 , 5 , 6 ]

myArr.shift() // pop from front
console.log(myArr)//[ 20 , 1 , 2 , 3 , 4 , 5 , 6 ]

console.log(myArr.includes(8))//false
console.log(myArr.indexOf(8))// -1

console.log("")
const newArr = myArr.join()
console.log(myArr)//[20 , 1 , 2 , 3 , 4 , 5 , 6 ]
console.log(newArr) //20,1,2,3,4,5,6
console.log(typeof newArr) //string
// join converts the array to string and binds it


console.log("Slice && Splice")

console.log("A " , myArr)
const myN1 = myArr.slice(1,3)
console.log(myN1) // [1,2]

console.log(myArr)
const myN2 = myArr.splice(1,3)
console.log("B ", myArr)
console.log(myN2)
// In slice array remains the same and last value is not added
// In splice our original array is also changed and the last value is also considered 
