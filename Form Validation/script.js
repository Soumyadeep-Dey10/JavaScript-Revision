let fname = document.querySelector("#fname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let cpassword = document.querySelector("#cpassword")

let fnameError = document.querySelector("#fnameError")
let emailError = document.querySelector("#emailError")
let passwordError = document.querySelector("#passwordError")
let cpasswordError = document.querySelector("#cpasswordError")
let btn = document.querySelector("#btn")

let form = document.querySelector("#signup")

btn.addEventListener("click", (e) => {
    e.preventDefault()


    let isValid = true

    if (fname.value.trim().length <= 3) {
        fnameError.innerText = "Name should be at least 4 characters"
        isValid = false
    }

    if (email.value.trim().length == 0 || !email.value.includes("@")) {
        emailError.innerText = "Email format not correct"
        isValid = false
    }

    if (password.value.trim().length < 8) {
        passwordError.innerText = "Password should be at least 8 characters"
        isValid = false
    } else {
        let isNumber = false, isUppercase = false, isLowercase = false, isSpecialChar = false
        let password1 = password.value
        for (let i = 0; i < password1.length; i++) {
            let char = password1[i]
            if (char >= 'A' && char <= 'Z') isUppercase = true
            else if (char >= 'a' && char <= 'z') isLowercase = true
            else if (char >= '0' && char <= '9') isNumber = true
            else isSpecialChar = true
        }

        if (!isNumber || !isUppercase || !isLowercase || !isSpecialChar) {
            passwordError.innerText = "Password must include uppercase, lowercase, number, and special character"
            isValid = false
        }
    }

    if (cpassword.value !== password.value) {
        cpasswordError.innerText = "Passwords do not match"
        isValid = false
    }

    if (isValid) {
        alert("Form validation successful")
        document.getElementById("signup").reset()
    }
})
