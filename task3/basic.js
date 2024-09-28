"use strict"
// Select form elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const registerBtn = document.getElementById('registerBtn');
const successMessage = document.getElementById('successMessage');

// Select error elements
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Exercise 02: Validation function to check if the field is empty
function validateInput(input, errorField, message) {
    if (input.value.trim() === '') {
        errorField.textContent = message;
        return false;
    } else {
        errorField.textContent = '';
        return true;
    }
}

// Exercise 03: Function to check if password and confirmPassword match
function validatePasswordMatch() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match!";
        return false;
    } else {
        confirmPasswordError.textContent = '';
        return true;
    }
}

// Exercise 04: Function to check if all fields are valid and enable/disable the button
function validateForm() {
    const isUsernameValid = validateInput(usernameInput, usernameError, 'Username is required.');
    const isPasswordValid = validateInput(passwordInput, passwordError, 'Password is required.');
    const isConfirmPasswordValid = validateInput(confirmPasswordInput, confirmPasswordError, 'Confirm password is required.');
    const isPasswordMatching = validatePasswordMatch();

    registerBtn.disabled = !(isUsernameValid && isPasswordValid && isConfirmPasswordValid && isPasswordMatching);
}

// Event listeners for input fields
usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
confirmPasswordInput.addEventListener('input', validateForm);

// Exercise 05: Show success message upon successful registration
registerBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form from submitting
    successMessage.textContent = 'User registration successful!';
    successMessage.style.color = 'green';
});
