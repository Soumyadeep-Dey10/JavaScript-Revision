// //creating object with 4 ways
// // 1. Object keyword
// let obj = new Object()
// console.log(obj);
// obj.id = 10
// obj.name = "Rup"
// console.log(obj);

// //2. literal way
// let a = {
//     id : 18,
//     name :"Virat"
// }
// console.log(a);

// // 3. Constructor function 
// function add(id, name){
//     this.id = id,
//     this.name = name
// }
// let ob1 = new add(10, "palmer")
// console.log(ob1);

// // 4. class 
// class Sample{
//     constructor(id, name){
//         this.id = id,
//         this.name = name
//     }
// }
// let ob2 = new Sample(24, "Reece")
// console.log(ob2);

// //date , time , math object
let ob = new Date()
// console.log(ob.getDate());
// console.log(ob.getDay());
// console.log(ob.getMonth());
// console.log(ob.getFullYear());

console.log(ob); //current date and time
console.log(ob.toDateString()); //Thu Aug 28 2025
console.log(ob.toLocaleDateString()); //28/8/2025


//to take a particular date
let date = new Date(2023, 10, 15) //new Date(year, monthIndex, date, hour, mintue, second)
console.log(date.toLocaleDateString()); //15/11/2023
console.log(date.toDateString()); //Wed Nov 15 2023

//particular format line mm-dd-yy
let dateOb = new Date("01-21-02") //-1 will be january, here index start from 1 not 0
console.log(dateOb.toDateString());



console.log(ob.getHours());
console.log(ob.getMinutes());
console.log(ob.getSeconds());
console.log(ob.getMilliseconds());


//Math
console.log(Math.PI);
console.log(Math.floor(7.8));
console.log(Math.ceil(7.01));
console.log(Math.round(10.5));
console.log(Math.round(10.2));
console.log(Math.max(10, 2, 3, 69));
console.log(Math.min(10, 2, 3, 69));
console.log(Math.sqrt(4));
console.log(Math.cbrt(27));
console.log(Math.pow(3, 2));


//Math.random()
console.log(Math.random()); //always will be 0.something 
console.log(Math.random() * 10); //always will be 0 - 9
console.log(Math.random() * 10 + 1); //reomve 0 and get only 1- 9
console.log(Math.floor(Math.random() * 10 + 1)); //round off to smaller integer


//differnt syntax to generate number between a specific range
//10-20

let max = 20, min = 10
console.log(Math.floor(Math.random() * (max - min ))); //will include 0 also
console.log(Math.floor(Math.random() * (max - min + 1))); //will generate from 1 not from 10

console.log(Math.floor(Math.random() * (max - min + 1) + min)); //will get 11-20







