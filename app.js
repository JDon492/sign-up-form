let firstName = document.querySelector("#first-name");
let password = document.querySelector("#password-box");
let confirmPass = document.querySelector("#confirm-pass");
let form = document.querySelector("#form");
let errorMessage = document.querySelector("#error-message");

form.addEventListener("submit", (e) => {
    if (password.value.length < 6) {
        e.preventDefault()
        errorMessage.innerText = ('Password must be atleast 6 characters long')
    }
    if (password.value !== confirmPass.value ) {
        e.preventDefault()
        errorMessage.innerText = ('Passwords do not match')
    }
})