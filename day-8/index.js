const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailLabel = document.getElementById('emailLabel');
const passwordLabel = document.getElementById('passwordLabel');

emailInput.addEventListener('click', function() {
    console.log('emailInput clicked');
    emailLabel.classList.toggle('checked');
});

passwordInput.addEventListener('click', function() {
    console.log('emailInput clicked');
    passwordLabel.classList.toggle('checked');
});