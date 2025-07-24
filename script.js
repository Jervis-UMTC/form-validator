const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPassInput = document.getElementById('confirm-password');


form.addEventListener('submit', function (e) {
  e.preventDefault();

  clearAllErrors();

  passwordInput.style.marginBottom = '';
  usernameInput.style.marginBottom = '';

  const isRequiredValid = checkRequired([usernameInput, emailInput, passwordInput, confirmPassInput]);

  if (isRequiredValid) alert("Successfully signed up!");

});

function checkRequired(inputArray) {
  let isValid = true;

  inputArray.forEach(input => {
    if (input.value.trim() === '') {
      if (input.id === 'confirm-password') return;
      showError(input, `${formatFieldName(input)} is required`);
      isValid = false;
    } else {
      if (isValid == false) {
        checkValidity(input);
        isValid = false;
      } else isValid = checkValidity(input);
    }
  });
  return isValid;
}

function formatFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, errorText) {

  const formGroup = input.parentElement;

  formGroup.className = 'form-group error';

  const small = formGroup.querySelector('small')

  small.innerText = errorText;

}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group success';
}

function checkValidity(input) {
  let inputId = input.id;

  if (inputId === 'username') return checkUsername(input);

  if (inputId === 'email') return checkEmail(input);

  if (inputId === 'password') return checkPassword(input);

}

function checkUsername(input) {
  const value = input.value.trim();

  const hasLetters = /[a-zA-Z]/.test(value);
  const hasNumbers = /[0-9]/.test(value);
  const hasSpecialChar = !/^[a-zA-Z0-9_]+$/.test(value);

  if (value.includes(' ')) {
    showError(input, `Username must not contain spaces`);
  } else if (value.length < 3 || value.length > 16) {
    input.classList.add('long-message');
    showError(input, `Username must be a minimum of 3 and maximum of 16 characters`);
  } else if (hasSpecialChar) {
    showError(input, `Username must not contain special characters`);
  } else if (!(hasLetters && hasNumbers)) {
    showError(input, `Username must contain both letters and numbers`);
  } else {
    showSuccess(input);
    return true;
  }
}

function checkEmail(input) {
  const value = input.value.trim();

  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!pattern.test(value)) {
    showError(input, `Email must be valid`);
  } else {
    showSuccess(input);
    return true;
  }
}

function checkPassword(input) {
  const value = input.value.trim();

  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]){8,}$/;
  if (value.includes(' ')) {
    showError(input, `Password must not contain spaces`);
  } else if (!pattern.test(value)) {
    input.classList.add('longer-message');
    showError(input, `Password must be 8 characters long and must have an uppercase and lowercase letter, number, and a special character`)
  } else {
    const confirmPass = confirmPassInput.value.trim();

    if (confirmPass === value) {
      showSuccess(confirmPassInput);
      showSuccess(input);
      return true;
    } else {
      showError(input, `Passwords don't match`);
      showError(confirmPassInput, `Passwords don't match`);
    }
  }
}
