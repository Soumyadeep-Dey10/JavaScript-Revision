// function add(){
//     let a = 100
//     function sub(){
//         let b = 200
//         console.log(b);
//         console.log(a);
//     }
//     return sub
// }
// add()()

function counter(){
    let count = 0
    return function (){
        count++;
        return count
    }
}

let ans = counter()
console.log(ans());
console.log(ans());
console.log(ans());

let ans1 = counter()
console.log(ans1());
console.log(ans1());


