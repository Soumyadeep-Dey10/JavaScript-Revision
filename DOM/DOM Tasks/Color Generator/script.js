let btn = document.querySelector("#btn")
let body = document.querySelector("body")
let a = document.getElementById("a")

function colorGenerator(){
    let color = "#"
    for(let i = 0; i < 6; i++){
        color = color + (Math.floor(Math.random() * 10))
    }
    console.log(color);
    
    body.style.backgroundColor = color    
}

btn.addEventListener("click", colorGenerator)