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
  var confirmLength = prompt("Your password must be between 8-128 characters. How many characters would you like to use?", "12");

  while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Please select a number between 8-128 characters.");
    var confirmLength = prompt("Your password must be between 8-128 characters. How many characters would you like to use?", "12");
  }

  while(!confirmSpecialChar && !confirmNum && !confirmAlphaLow && !confirmAlphaUpp) {
    alert("The more varied your password is, the stronger it will be. On the next few screens, please select what characters you would like to use in your password.");
    var confirmSpecialChar = confirm("Woudl you like to use special characters: !#$%'()*+,-./:;<?@[\\]^_`{|}~? Please use OK to confirm or cancel to decline.");
      if(confirmSpecialChar) {
        alert("Special characters will be used in criteria for password generation.");
      }
    var confirmNum = confirm("Would you like to use numbers: 0123456789? Please use OK to confirm or cancel to decline.");
      if (confirmNum) {
        alert("Numbers will be used in criteria for password generation.");
      }
    var confirmAlphaLow = confirm("Would you like to use lowercase letters: abcdefghijklmnopqrstuvwxyz? Please use OK to confirm or cancel to decline.");
      if (confirmAlphaLow) {
        alert("Lowercase letters will be used in criteria for password generation.");
      }
    var confirmAlphaUpp = confirm("Would you like to use uppercase letters: ABCDEFGHIJKLMNOPQRSTUVWXYZ? Please use OK to confirm or cancel to decline.");
      if (confirmAlphaUpp) {
        alert("Uppercase letters will be used in criteria for password generation.");
      }
  }

  if (confirmSpecialChar) {
    usedChar = usedChar.concat(specialCharacter);
  }
  if (confirmNum) {
    usedChar = usedChar.concat(number);
  }
  if (confirmAlphaLow) {
    usedChar = usedChar.concat(alphaLower);
  }
  if (confirmAlphaUpp) {
    usedChar = usedChar.concat(alphaUpper);
  }
  console.log(usedChar);

  var passwordChar = [];

  for(var i=0; i<confirmLength; i++) {
    var characters = usedChar[Math.floor(Math.random()*usedChar.length)];
    passwordChar.push(characters);
  }

  var randomPassword = passwordChar.join("");
  console.log(randomPassword);
  return randomPassword;
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
