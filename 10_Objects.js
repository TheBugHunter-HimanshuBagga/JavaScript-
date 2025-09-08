// const tinderUser = new Object() // Singelton // {}
const tinderUser = {} // Non singelton // {}
tinderUser.Id = "123qwe"
tinderUser.name = "Himanshu"
tinderUser.isLoggedIn = false
// console.log(tinderUser) //{ Id: '123qwe', name: 'Himanshu', isLoggedIn: false }

// const regularUser = {
//     email: "himanshu@gmail.com",
//     fullName: {                  //object
//         userFullName: {          //object
//             firstName: "Himanshu",
//             lastName: "Bagga"
//         }
//     }
// }
// To access the value use dot function
// console.log(regularUser.fullName)//{ userFullName: { firstName: 'Himanshu', lastName: 'Bagga' } }
// console.log(regularUser.fullName.userFullName)//{ firstName: 'Himanshu', lastName: 'Bagga' }
// console.log(regularUser.fullName.userFullName.lastName)//Bagga

// Combine Objects
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

//const obj3 = {obj1 ,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3 = Object.assign(obj1 , obj2)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
 // const obj3 = Object.assign({} , obj1 , obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// use {} it returns a modified target objects , as all values goes inside it


// Same arrays spreading concept
const obj3 = {...obj1 , ...obj2}//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(obj3)

const user = [
    {
        id: 1,
        email: "himanshu311@gmail.com"
    },
    {
        id: 1,
        email: "himanshu311@gmail.com"
    },
    {
        id: 1,
        email: "himanshu311@gmail.com"
    }
]
// console.log(user[1].email)//himanshu311@gmail.com
// console.log(tinderUser) //{ Id: '123qwe', name: 'Himanshu', isLoggedIn: false }


// Uses in DataBase
console.log(Object.keys(tinderUser)) //[ 'Id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser))//[ '123qwe', 'Himanshu', false ]
console.log(Object.entries(tinderUser))//[ [ 'Id', '123qwe' ], [ 'name', 'Himanshu' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true