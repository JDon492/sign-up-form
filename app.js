let password = document.querySelector("#password-box");
let confirmPass = document.querySelector("#confirm-pass");
let form = document.querySelector("#form");
let errorMessage = document.querySelector("#error-message");

form.addEventListener("submit", e => {
    if (password.value.length < 6) {
        e.preventDefault()
        errorMessage.innerText = ('Password must be atleast 6 characters long')
        password.classList.add("errorFound")

    } 
    if (password.value !== confirmPass.value ) {
        e.preventDefault()
        errorMessage.innerText = ('Passwords do not match')
        password.classList.add("errorFound")
        confirmPass.classList.add("errorFound")
    }
})

password.addEventListener("keyup", e => {
    password.classList.remove("errorFound")
    confirmPass.classList.remove("errorFound")
    errorMessage.innerText = ("")
})