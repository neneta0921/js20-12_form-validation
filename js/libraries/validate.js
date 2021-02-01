class Validate {
  constructor() {
    this.form = document.querySelector('#form');
    this.password1El = document.querySelector('#password1');
    this.password2El = document.querySelector('#password2');

    this.isValid = false;
    this.passwordMatch = false;

    this._init();
  }

  _init() {
    this._addEvent();
  }

  _changeMessageTextAndStyle(text, color) {
    const messageContainer = document.querySelector('.message-container');
    const message = document.querySelector('#message');
    message.textContent = text;
    message.style.color = color;
    messageContainer.style.borderColor = color;
  }

  _changePasswordBorderColor(color) {
    this.password1El.style.borderColor = color;
    this.password2El.style.borderColor = color;
  }

  _validateForm() {
    // Using Contraint API
    this.isValid = form.checkValidity();
    // Style main message for an error
    if (!this.isValid) {
      this._changeMessageTextAndStyle('Please fill out all fields.', 'red');
      return;
    }

    // Check to see if passwords match
    if (this.password1El.value === this.password2El.value) {
      this.passwordMatch = true;
      this._changePasswordBorderColor('green');
    } else {
      this.passwordMatch = false;
      this._changeMessageTextAndStyle('Make sure passwords match.', 'red');
      this._changePasswordBorderColor('red');
      return;
    }

    // If form is valid and passwords match
    if (this.isValid && this.passwordMatch) {
      this._changeMessageTextAndStyle('Successfully Registered!', 'green');
      this._changePasswordBorderColor('green');
    }
  }

  _storeFormData() {
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

  _processFormData(event) {
    event.preventDefault();
    // Validate Form
    this._validateForm();
    // Submit Data if Valid
    if (this.isValid && this.passwordMatch) {
      this._storeFormData();
    }
  }

  // Event Listener
  _addEvent() {
    this.form.addEventListener('submit', (event) => this._processFormData(event));
  }
}
