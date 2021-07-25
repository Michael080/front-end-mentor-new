const emailForm = document.querySelector('.email-input');
const emailSubmit = document.querySelector('.btn-submit');
const containerSubmit = document.querySelector('.btn-container');
const emailValid = document.querySelector("input[type='email']");
const errorIcon = document.querySelector('.email-error-icon');
const errorMessage = document.querySelector('.email-invalid-msg');

function isValidEmail() {
  return emailValid.validity.valid && emailForm.value.length > 0;
}

// Display/hide error icon & message
function displayError(action) {
  const displaySwitch = {
    show: () => {
      errorIcon.classList.remove('hidden');
      errorMessage.classList.remove('hidden');
    },
    hide: () => {
      errorIcon.classList.add('hidden');
      errorMessage.classList.add('hidden');
    }
  }

  return displaySwitch[action]();
}

function clearErrors() {

}

  // ! https://css-tricks.com/form-validation-part-2-constraint-validation-api-javascript/
// Check email on-click of submit and show error icon/message if invalid 
const validate = () => !isValidEmail() ? displayError('show') : false;
// check email on entry of key 'enter'
const validateFormEnter = () => {
  event.keyCode === 13 ? validate() : displayError('hide');
}

// Validate user email
emailSubmit.addEventListener("click", validate);
emailForm.addEventListener('keyup', validateFormEnter);