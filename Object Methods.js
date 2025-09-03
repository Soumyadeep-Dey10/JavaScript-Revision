let obj = {
    id : 18, 
    name : "Virat"
}
console.log(obj);
Object.freeze(obj)
console.log(Object.isFrozen(obj));

//Check CRUD operation after freeze()
obj.age = 25
console.log(obj); //create is not allowed

console.log(obj.name); //read operation is allowed

obj.name = "Rup"
console.log(obj); //update opearation is not allowed

delete obj.name
console.log(obj); //delete is not allowed


//seal() method
let ob1 = {
    id : 100,
    name : "Rup"
}
console.log(ob1);
Object.seal(ob1)
console.log(Object.isSealed(ob1));

//CRUD operation after seal() method

//create
ob1.age = 23
console.log(ob1); //create is not allowed

//read
console.log(ob1.name); //read is allowed

//update 
ob1.name = "King"
console.log(ob1); //update is allowed, but not allowed in freeze, that is the difference

//delete
delete ob1.name
console.log(ob1); //delete is not allowed

//Objectr.keys : print all the keys of an object
console.log(Object.keys(ob1));

//Object.values() : print all the values of an object
console.log(Object.values(ob1));

//Object.entries() : return the object in array format

console.log(Object.entries(ob1));

//for in : used for Object

for(let val in ob1){
    console.log(val); //return the keys
}

//problem with for in() in array
// for(let val in arr){
//     console.log(val); //it will give index values not correct values
// }

//for of : used for array not object 
let arr = [1,2,3,4]

for(let val of arr){
    console.log("For of in array",val); //it will give correct values
}

// for(let val of ob1){
//     console.log("For of in object", val); //TypeError : ob1 is not iterable
// }


//assign() : used to update multiple data together in a object or used to merge multiple objects
let a = {
    id : 60,
    name :  "ABD "
}
let b = {
    id : 17,
    team : "RCB"
}

Object.assign(a, b)
Object.assign({}, a, b) //{} is optional, {} means {} is the target and merge a, b into {}
console.log("After assign a", a);
console.log("After assign b", b);
let mergedNewOnject = Object.assign(a, b)
console.log(a == mergedNewOnject); //true

//alternate to assign method....spread method
let spreadedOb = {...a, ...b}
console.log("Spreaded object is", spreadedOb);


//hasOwnProperty() : check if a key exists or not
console.log(a.hasOwnProperty('id'));


//group by function : Used to group related data together
let fruits = [
    {name : "apple", price : 300},
    {name : "banana", price : 100},
    {name : "mamgo", price : 200},
]

// function callback({price}){
//     return price > 200 ? "High" : "Okay"
// }
// let data = Object.groupBy(fruits, callback)
// console.log(data);

let data = Object.groupBy(fruits, ({price}) => {
    return price > 200 ? "High" : "Low"
})

console.log(data);



