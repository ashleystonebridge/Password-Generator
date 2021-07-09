//Asks user to input desired length of password, user must input a number between 8 and , converts the number string into a number value
function askLength() {
  var passwordLength = parseInt(prompt("Please input a number for the length of your password."));
  if (passwordLength !== null) {
    if (isNaN(passwordLength) === true) {
      alert("Please input a number.")
      askLength();
    } 
    if (passwordLength < 8 || passwordLength > 128) {
          alert("Please choose a number greater than or equal to 8 and less than or equal to 128.");
          askLength();
    }
  }
  console.log(passwordLength);
  return passwordLength;
}

//Assigns arrays to variables for the different types of characters the user can choose to include in their password
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numbers = ["0123456789"]
var symbols = ["!@#$%^&*()"]

//OPEN TO DO - ADD COMMENTS HERE TO EXPLAIN THIS FUNCTION
function generatePassword() {
  var length = askLength();
  var includeLower = confirm("Use lowercase?");
  var includeUpper = confirm("Use uppercase?");
  var includeNumbers = confirm("Use numbers?");
  var includeSymbols = confirm("Use symbols?");
  if (includeLower === false &&
    includeUpper === false &&
    includeNumbers === false &&
    includeSymbols === false) {
      alert("Please select OK for at least one type of character to include in your password.")
      return generatePassword();
  }
  var pot = "";
  var finalPassword = "";
  
  if (includeLower) {
    pot = pot + lowerCase;
  }

  if (includeUpper) {
    pot = pot + upperCase;
  }

  if (includeNumbers) {
    pot = pot + numbers;
  }

  if (includeSymbols) {
    pot = pot + symbols;
  }
  
  console.log(`pot: ${pot}`);

  for (let i=0; i<length; i++) {
    var index = Math.floor(Math.random() * pot.length);
    finalPassword += pot[index];
  }
  
  console.log(finalPassword);

  return finalPassword;
}

//Calls the generatePassword function, which returns the finalPassword value, which is written into the empty dotted box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Selects the Generate Password button, adds a click event listener, so when the button is clicked, the writePassword function is called
var generateButton = document.querySelector("#generate");

generateButton.addEventListener("click", writePassword);