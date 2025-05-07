const loginForm = document.getElementById('loginForm');
const firstNameInput = document.getElementById('firstName');
const passwordInput = document.getElementById('password');
const firstNameError = document.getElementById('firstNameError');
const passwordError = document.getElementById('passwordError');






function shakeInput(inputElement) {
  inputElement.classList.add('shake');
  setTimeout(() => inputElement.classList.remove('shake'), 300);
}

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  firstNameError.textContent = '';
  passwordError.textContent = '';

  const firstName = firstNameInput.value.trim();
  const password = passwordInput.value;
  const storedUser = JSON.parse(localStorage.getItem('examUser'));

  if (!storedUser) {
    firstNameError.textContent = 'No registered user found.';
    firstNameInput.value = '';
    shakeInput(firstNameInput);
    return;
  }

  let hasError = false;

  if (firstName !== storedUser.firstName) {
    firstNameError.textContent = 'Incorrect First Name.';
    firstNameInput.value = ''; // <-- يمسح الاسم
    shakeInput(firstNameInput);
    hasError = true;
  }

  if (password !== storedUser.password) {
    passwordError.textContent = 'Incorrect Password.';
    passwordInput.value = ''; // <-- يمسح الباسورد
    shakeInput(passwordInput);
    hasError = true;
  }

  if (!hasError) {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'exam.html';
  }
});


firstNameInput.addEventListener('input', () => {
  firstNameError.textContent = '';
});

passwordInput.addEventListener('input', () => {
  passwordError.textContent = '';
});


