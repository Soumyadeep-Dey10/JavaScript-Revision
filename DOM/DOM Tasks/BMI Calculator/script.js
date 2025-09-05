let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
      e.preventDefault()
      let height = parseInt(document.querySelector('#height').value)
      let weight = parseInt(document.querySelector('#weight').value)

      let result = document.getElementById('results')

      if(height < 0 || height == '' || isNaN(height)){
        alert("Please enter correct height")
      }
      else if(weight < 0 || weight == '' || isNaN(weight)){
        alert("Please enter correct weight")
      }
      else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerText = `Your BMI is : ${bmi}`
        let h2 = document.querySelector('h3')
        if(bmi < 18.6){
          h2.innerHTML = 'You are underweight'
        }else if(bmi >= 18.6 && bmi < 24.9){
            h2.innerHTML = 'Your weight is normal'
        }
        else{
          h2.innerHTML = 'You are Overweight'
        }
      }

     
})