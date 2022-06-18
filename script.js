const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const phoneNum = document.getElementById('phone-num')
const password = document.getElementById('password')
const confPassword = document.getElementById('c-password')


form.addEventListener('submit', (e) => {
    let messages = [];
    if (firstName.value === '' || firstName.value == null || firstName.value.length < 3) {
        messages.push('First name is not valid')
    };

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters')
    };



})