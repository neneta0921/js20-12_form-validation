const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;


function changeMessageTextAndStyle(text, color) {
  message.textContent = text;
  message.style.color = color;
  messageContainer.style.borderColor = color;
}

function changePasswordBorderColor(color) {
  password1El.style.borderColor = color;
  password2El.style.borderColor = color;
}

function validateForm() {
  // Using Contraint API
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    changeMessageTextAndStyle('Please fill out all fields.', 'red');
    return;
  }
  // Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordMatch = true;
    changePasswordBorderColor('green');
  } else {
    passwordMatch = false;
    changeMessageTextAndStyle('Make sure passwords match.', 'red');
    changePasswordBorderColor('red');
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordMatch) {
    changeMessageTextAndStyle('Successfully Registered!', 'green');
    changePasswordBorderColor('green');
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  // Submit Data if Valid
  if (isValid && passwordMatch) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener('submit', processFormData);