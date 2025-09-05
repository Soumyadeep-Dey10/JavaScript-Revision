let buttons = document.querySelectorAll(".button")
let body = document.querySelector('body')

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.id == 'grey'){
          body.style.backgroundColor = 'grey'
        }
        else if(e.target.id == 'white'){
          body.style.backgroundColor = 'white'
        }
        else if(e.target.id == 'blue'){
          body.style.backgroundColor = e.target.id
        }
        else if(e.target.id == 'yellow'){
          body.style.backgroundColor = e.target.id
        }
    })
})