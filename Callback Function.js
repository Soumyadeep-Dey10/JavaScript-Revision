//check a number is strong number or not using higher order funtion and callback function
function checkStrong(number){
    let sum = 0
    let no = 145
    let copy = no
    while(no != 0){
        let rem = parseInt(no % 10)
        sum += calculateFactorial(rem)
        no = parseInt(no / 10)
    }
    (sum == copy) ? console.log("Strong number") : console.log("Not strong number");
    
}
checkStrong(calculateFactorial)

function calculateFactorial(num){
    let fact = 1
    for(let i = 1; i <= num; i++){
        fact = fact * i
    }
    return fact
}