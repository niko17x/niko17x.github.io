// const firstName = document.getElementById('first-name');
// const lastName = document.getElementById('last-name');
// const email = document.getElementById('email');
// const phoneNum = document.getElementById('phone-num');
const form = document.querySelector('form');
const password = document.getElementById('password'); //input
const confPassword = document.getElementById('confirm-password'); //input
const passwordError = document.getElementById('password-error'); //div
const confirmPasswordError = document.getElementById('confirm-password-error'); //div

form.addEventListener('submit', e => {
    e.preventDefault();

    
    confirmPassword();
});




const confirmPassword = () => {
    if (password.value === '' || password.value == null) {
        passwordError.textContent = "Password can't be empty"
        password.classList.add('error');
    } else {
        password.classList.add('success');
    }

    if (password.value !== '' && confPassword.value == null) {
        if (confPassword.value === '' || confPassword.value == null) {
            confirmPasswordError.textContent = "Please confirm your password"
            confPassword.classList.add('error');
        };
     };
    if (password.value !== confPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match"
        password.classList.add('error');
        confPassword.classList.add('error');
    };

    if (password.value !== '' && confPassword.value !== '' && password.value != null && confPassword.value != null) {
        if (password.value === confPassword.value) {
            password.classList.remove('error');
            confPassword.classList.remove('error');
            password.classList.add('success');
            confPassword.classList.add('success');
            passwordError.innerText = '✅';
            confirmPasswordError.innerText = '✅';
        };
    };

    if (password.value == null && confPassword.value == null) {
        password.classList.add('error');
        confPassword.classList.add('error');
    };
};