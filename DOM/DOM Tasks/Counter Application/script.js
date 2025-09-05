let inc = document.querySelector("#inc")
let res = document.querySelector("#res")
let dec = document.querySelector("#dec11")
let h1 = document.querySelector("h1")

let counter = 0
function increment(){
    counter++
    h1.innerText = counter
}
function decrement(){
    counter -= 1
    h1.innerText = counter
}

inc.addEventListener("click", increment)
dec.addEventListener("click", decrement)
res.addEventListener("click", () => {
    counter = 0
    h1.innerText = counter
})