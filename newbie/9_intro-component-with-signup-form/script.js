// @ts-check
//--- DOM elements ---
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const submit = document.querySelector('.submit');
const inputsArray = Array.from(inputs);
const inputContainers = document.querySelectorAll('.input-container');

// Store applicable validity object keys
const messages = {
  valueMissing: 'cannot be left empty',
  tooLong: 'you entered is too long: max. = 25 chars',
  tooShort: 'too short: min. = 8 chars'
}

// Add novalidate attribute on load of JS
inputs.forEach(input => input.setAttribute('novalidate', true)); 

function formatFieldType(fieldType) {
  let formattedArray = [];
  fieldType.forEach(word => {
    formattedArray.push(
      word.replace(word[0], word[0].toUpperCase())
    ); 
  })

    return formattedArray;
}

function createErrorElem(content, ...errorType) {
  const p = document.createElement('p');
  p.classList.add('invalid');
  // add classname to serve as hook for id'ing type of error associated w/ error-elem
  errorType.forEach(error => p.classList.add(error))
  p.textContent = content;
  return p;
}

// * use Constraint Validation API via (https://css-tricks.com/form-validation-part-2-constraint-validation-api-javascript/)
const createErrorMessage = (fieldType, errors, elem) => {
  // create message for incorrect email format
  fieldType.includes('Email') &&  errors.includes('typeMismatch') ?
    messages['typeMismatch'] = 'format ex: john@blammo.com' :
    false;

  let fieldBlankError; // store generate error message

  const errorMessageSwitch = {
    oneWord: () => {
      return `${fieldType[0]} ${messages[errors[0]]}`;
    },
    multiWord: () => {
      return `${fieldType[0]} ${fieldType[1]} ${messages[errors[0]]}`
    }
  }

  fieldType.length > 1 ?
    fieldBlankError = errorMessageSwitch['multiWord']() :
    fieldBlankError = errorMessageSwitch['oneWord']();

  return fieldBlankError;
}

function hideElement(action, elem) {
  const displaySwitch = {
    show: () => {
      elem.classList.remove('hidden');
      elem.classList.remove('hidden');
    },
    hide: () => {
      elem.classList.add('hidden');
      elem.classList.add('hidden');
    }
  }

  displaySwitch[action]();
}

//---------------------  display errors  --------------------- 

// check if applicable error is already displayed to user
const isRedundantError = (errors, elem) => {
  let result = []; // store bools from isRedundant() loop
  
  const isRedundant = err => { 
    return elem.parentElement.nextElementSibling.classList.contains(err);
  }

  errors.forEach(error => {
    if (isRedundant(error)) {
      result.push(true);
    } else if (!isRedundant(error)) {
      result.push(false);
      form.removeChild(elem.parentElement.nextElementSibling);
    }
  })

  return result;
}

function displayError(errors, elem) {
  const nextElem = elem.parentElement.nextElementSibling;
  // check if error msg is already displayed
  const hasError = elem => {
    return nextElem.classList.contains('invalid');
  }
  // create array of strings from placeholder 
  let fieldType = elem.placeholder.split(' ');
  // capitalize text for use in error msg
  fieldType = formatFieldType(fieldType);
  // create <p> and add node after input elem
  const errorMsg = 
    createErrorElem(createErrorMessage(fieldType, errors, elem), errors);

    if (hasError(elem)) {
      if (isRedundantError(errors, elem).includes(false)){
        // append error elem after input-container
        elem.parentNode.after(errorMsg); 
      } else {
        // break flow if returned array doesn't contain any false values
        return;
      }    
    } else {
    // append error elem after input-container
    elem.parentNode.after(errorMsg); 
  }
}

function checkEmailDomain(elem) {
  const domain = elem.value.slice(-4);
}

// get errors via Constraint Validation API and return array of true values
function getErrors(validity, elem) {
  // TODO --- REDUNDANT - These values occur @ top of file - USE  THAT
  const keys = [
    'valueMissing', 'typeMismatch', 'patternMismatch', 'tooLong', 'tooShort', 'rangeUnderflow', 'rangeOverflow', 'stepMismatch', 'badInput', 'customError' 
  ]
  let errors = [];

  keys.forEach(key => {
    validity[key] ? 
      errors.push(key) :
      false;
  })
  
  return errors;
}

function validateField(event) {
  const elem = event.target;
  const validity = elem.validity;
  const errors = getErrors(validity, elem);

    // display error if field left-blank after user 'clicks through' field
    getErrors(validity).length > 0 ?
      displayError(errors, elem) : 
      elem.parentNode.removeChild(elem.nextElementSibling);
}

function submitForm() {
  
}

// validate field when user 'clicks'/'tabs' through
inputsArray.forEach(input => input.addEventListener('focusout', validateField));

submit.addEventListener('click', submitForm)