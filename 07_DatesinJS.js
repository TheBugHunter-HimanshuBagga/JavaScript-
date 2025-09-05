// can caluculate dates from jan1,1970
let myDate = new Date()
console.log(myDate) //2025-09-05T12:57:46.629Z
console.log(myDate.toString())//Fri Sep 05 2025 18:27:46 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString())//5/9/2025, 6:28:25 pm
console.log(typeof myDate) //object

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate) //2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toString())//Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
console.log(myCreatedDate.toLocaleString())//23/1/2023, 12:00:00 am

let myCreatedDate2 = new Date("2025-01-23")
console.log(myCreatedDate2.toLocaleString()) //23/1/2025, 5:30:00 am

let myCreatedDate3 = new Date("01-23-2025")
console.log(myCreatedDate3.toLocaleString()) //23/1/2025, 12:00:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp)//1757077586307
console.log(myCreatedDate.getTime())//1674412200000
console.log(Math.floor(Date.now()/1000))//1757077783

let newdate = new Date()
console.log(newdate)//2025-09-05T13:11:43.115Z
console.log(newdate.getMonth() + 1)//9
console.log(newdate.getDay())//5