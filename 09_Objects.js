// objects can be formed by => literal(non singelton) and constructors(singelton is formed)

// Objects Literals
//name,age,.... is stored as a string inside the object

const mySym = Symbol("Key1")

const jsUser = {
    name: "Himanshu",
    //symbol declaration
    [mySym] : "myKey1",
    "fullname": "Himanshu Bagga", // can;t be access by dot
    age: 18,
    location: "Chennai",
    email: "Himansu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Tuesday"]
}
console.log(jsUser.name)//Himanshu
console.log(jsUser["name"]) //Himanshu  
console.log(jsUser["fullname"])//Himanshu Bagga
console.log(typeof jsUser[mySym])


// jsUser.email = "himanshu@google.com"
// Object.freeze(jsUser);
// jsUser.email = "himanshu@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js User")
}
jsUser.greetingtwo = function(){
    console.log(`Hello js User ${this.name}`)
}
console.log(jsUser.greeting()) //Hello js User 
console.log(jsUser.greetingtwo())//Hello js User Himanshu