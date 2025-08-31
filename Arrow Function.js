//example of arrow function
let a = () => {
    console.log("HI");
}
a()


//with single statement {} bracket is not mandatory, it is optional 
let b = () => console.log("Hello");

//with multiple statement {} bracket is must 
let bb = ()=> {
    console.log("Hello");
    console.log("hi");
}
bb()

//with single parameter parantheses is not mandatory, it is optinal
let c = a => {
    console.log(a);
}
c(10)

//with multiple parameter parantheses is mandatory
let d = (a, b) => {
    console.log(a, b);
}
d(50, 7)

//if no parameter then with _ we can run it
let e = _ => {
    console.log("It is ok");
}
e()

//arrow function with return type, return in a single line without bracket is not possible
let cc = (a, b) => {
    return a + b
}
console.log(cc(69, 69));

//this keyword in arrow function
let ff = () => {
    console.log(this);
}
ff() //this will give the window object
 


//arrow function hoisting

ab() //uncaught refernece error
let ab = () => {
    console.log("Hoisting not possible in arrow function");
}