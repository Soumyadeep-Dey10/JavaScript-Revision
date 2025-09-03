//crud operation with object
//create
//syntax : object_name.property = value
obj = {
    id : 18, 
    name : "Virat"
}
console.log(obj);


//create an attribute
// sytax : object_name.property = value 
obj.age = 35
console.log(obj);

//read
// syntax : console.log(object_name.property);

console.log(obj.name);

//update/modify
// syntax : object_name.property = value 
obj.age = 36
console.log(obj);

//delete
//syntax : delete(object_name.property)
delete obj.age
console.log(obj);
