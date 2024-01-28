console.log("formValidation.js loaded");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
function validateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
function validateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression

    // email regex (From https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //return true if the email address is valid - how to use regex
	//return !!emailString && typeof emailString === 'string'
		//&& emailString.match(emailRegex);
    return emailString.toLowerCase().match(emailRegex);
}

function validatePhoneRegex(phoneString) {
    // phone regex (From https://ihateregex.io/expr/phone/)
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    // return
    return phoneString.toLowerCase().match(phoneRegex);
}

function validateSpecialPassword(password) {
    // password regex for at least one special char and one number (From https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters)
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    // return
    return password.toLowerCase().match(passwordRegex);
}

function validateUsername(username) {
    // password regex for at least one special char and one number (From https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters)
    const usernameRegex = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    // return
    return username.toLowerCase().match(usernameRegex);
}


//TODO:
// Make all fields required (HTML)
// Add a pattern attribute in the telephone element (HTML)
// Ensure the password is redacted into dots on screen when typed in (HTML)
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!)
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)
// Validate the username when the form is submitted
// Clear any additional error message and highlighting when the form is reset
// COMMENT EVERYTHING :D

//form consts
const form = document.getElementById("registration-form");
const submit = document.getElementById("submit-reg-form");
const emailText = document.getElementById("inputEmail4");

//error consts
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");


form.onsubmit = function submitForm() {
    // get form data
    const formData = new FormData(form, submit);

    // get data from formData
    const username = formData.get("usernameInput").trim();
    const email = formData.get("inputEmail4").trim();
    const password = formData.get("inputPassword4").trim();
    const phone = formData.get("inputPhone5").trim();

    // check if username is between 6 and 20 characters, display red error message if it's more or less'
    if (username.length < 6 || username.length > 20) {
        usernameError.innerHTML = "Invalid Username: Must be between 6 and 20 characters.";
        usernameError.style = "border-style: solid; border-radius: 5px; border-color: red; background-color: #ff2b2b; color: white;";
        return false;
    } else if (validateUsername(username) == null) {    // check if username matches username regex, display red error message if it doesn't match
        usernameError.innerHTML = "Invalid Username: Cannot contain special characters.";
        usernameError.style = "border-style: solid; border-radius: 5px; border-color: red; background-color: #ff2b2b; color: white;";
        return false;
    }
    // display valid username and make style green
    usernameError.innerHTML = "Valid Username";
    usernameError.style = "border-style: solid; border-radius: 5px; border-color: green; background-color: #04d404; color: white;";

    // check if password is between 8 and 35 characters
    if (password.length < 8 || password.length > 35) {
        passwordError.innerHTML = "Invalid Password: Must be between 8 and 35 characters.";
        passwordError.style = "border-style: solid; border-radius: 5px; border-color: red; background-color: #ff2b2b; color: white;";
        return false;
    } else if (validateSpecialPassword(password) == null) { // check if password matches password regex, display red error message if it doesn't match
        passwordError.innerHTML = "Invalid Password: Must contain one number and one special character.";
        passwordError.style = "border-style: solid; border-radius: 5px; border-color: red; background-color: #ff2b2b; color: white;";
        return false;
    }
    // display valid password and make style green
    passwordError.innerHTML = "Valid Password";
    passwordError.style = "border-style: solid; border-radius: 5px; border-color: green; background-color: #04d404; color: white;";

    // check if email passes simple validation
    if (validateEmailAddressSimple(email)) {
        //alert(validateEmailAddressRegex(email));
        if (validateEmailAddressRegex(email) == null) { // check if email matches email regex then display error if doesn't match
            emailError.innerHTML = "Invalid Email: Must Only contain 1 at symmbol (@).";
            emailError.style = "border-style: solid; border-radius: 5px; border-color: red; background-color: #ff2b2b; color: white;";
            return false;
        }
    } else { // display error if simple validation doesn't pass
        emailError.innerHTML = "Invalid Email: Must have an at symbol (@) and a period (.).";
        emailError.style = "border-style: solid; border-radius: 5px; border-color: red; background-color: #ff2b2b; color: white;";
        return false;
    }
    // display valid email and make style green
    emailError.innerHTML = "Valid Email";
    emailError.style = "border-style: solid; border-radius: 5px; border-color: green; background-color: #04d404; color: white;";

    // check if phone matches phone regex, display red error message if it doesn't match
    if (validatePhoneRegex(phone) == null) {
        phoneError.innerHTML = "Invalid Phone Number: Use regular phone number format (999) 999-9999";
        phoneError.style = "border-style: solid; border-radius: 5px; border-color: red; background-color: #ff2b2b; color: white;";
        return false;
    }
    // display valid phone if regex matches
    phoneError.innerHTML = "Valid Phone";
    phoneError.style = "border-style: solid; border-radius: 5px; border-color: green; background-color: #04d404; color: white;";

    // alert user that registration is successful
    alert("Registration Successfull!");
}
