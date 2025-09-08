const course = {
    coursename: "bagga@gmail.com",
    price: "999",
    courseInstructor: "Himanshu"
}
//console.log(course.courseInstructor)//Himanshu

const {courseInstructor} = course
console.log(courseInstructor) //Himanshu


const {courseInstructor: instructor} = course
console.log(instructor)

// const navbar = ({company}) => { // destructuring

// }
// navbar(company = "Himanshu")

// API's

// JSON Object
// {
//     "name": "Himanshu",
//     "coursename": "JavaScript51",
//     "price": "free"
// }

// JSON Array 
// [
//     {},
//     {},
//     {}
// ]