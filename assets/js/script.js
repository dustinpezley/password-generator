// Character sets
var number = '0123456789';
var specialCharacter = "!#$%'()*+,-./:;<?@[\\]^_`{|}~";
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// USER INPUT
var confirmLength = "";
var confirmSpecialChar;
var confirmNum;
var confirmAlphaLow;
var confirmAlphaUpp;

// DERIVED LATER
var usedChar = "";


function generatePassword() {
  // Ask how many characters user would like to use. Defaults to 12.
  // Cannot make this a dropdown without jQuery.
  var confirmLength = prompt("Your password must be between 8-128 characters. How many characters would you like to use?", "12");

  // If password falls outside of length requirements, keep asking.
  while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Please select a number between 8-128 characters.");
    var confirmLength = prompt("Your password must be between 8-128 characters. How many characters would you like to use?", "12");
  }

  // If no characters sets have been selected, remind user that a strong password uses multiple character sets.
  while(!confirmSpecialChar && !confirmNum && !confirmAlphaLow && !confirmAlphaUpp) {
    alert("The more varied your password is, the stronger it will be. On the next few screens, please select what characters you would like to use in your password.");
    var confirmSpecialChar = confirm("Would you like to use special characters: !#$%'()*+,-./:;<?@[\\]^_`{|}~? Please use OK to confirm or cancel to decline.");

    var confirmNum = confirm("Would you like to use numbers: 0123456789? Please use OK to confirm or cancel to decline.");

    var confirmAlphaLow = confirm("Would you like to use lowercase letters: abcdefghijklmnopqrstuvwxyz? Please use OK to confirm or cancel to decline.");

    var confirmAlphaUpp = confirm("Would you like to use uppercase letters: ABCDEFGHIJKLMNOPQRSTUVWXYZ? Please use OK to confirm or cancel to decline.");

  }

  // If special characters were selected, add them to the usedChar variable.
  if (confirmSpecialChar) {
    usedChar = usedChar.concat(specialCharacter);
  }

  // If numbers were selected, add them to the usedChar variable.
  if (confirmNum) {
    usedChar = usedChar.concat(number);
  }

  // If lowercase letters were selected, add them to the usedChar variable.
  if (confirmAlphaLow) {
    usedChar = usedChar.concat(alphaLower);
  }

  // If uppercase letters were selected, add them to the usedChar variable.
  if (confirmAlphaUpp) {
    usedChar = usedChar.concat(alphaUpper);
  }

  // Establish an array for the password characters to be used.
  var passwordChar = [];

  // Add random characters based on usedChar string to characters variable. Push characters variable into passwordChar array.
  for(var i=0; i<confirmLength; i++) {
    var characters = usedChar[Math.floor(Math.random()*usedChar.length)];
    passwordChar.push(characters);
  }

  // Join the array into a string again. Return the value to be put in the textarea.
  return passwordChar.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Copy password to clipboard
var copyArea = document.querySelector("#password");

function copyPassword(text) {
  var text = document.querySelector("textarea");
  navigator.clipboard.writeText(copyArea.value);

  alert("Copied to clipboard!");
}

copyArea.addEventListener("click", copyPassword);
