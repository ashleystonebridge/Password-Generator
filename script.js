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
//OPEN TO RESEARCH/UPDATE - CAN I INPUT AS ONE LONG STRING WITHOUT THE QUOTES? IF NOT, UPDATE TO INCLUDE ALL LETTERS, ALL NUMBERS, ETC...
var lowerCase = ["a","b","c"]
var upperCase = ["A","B","C"]
var numbers = ["1", "2", "3"]
var symbols = ["!","@","#"]

//OPEN TO DO - ADD COMMENTS HERE TO EXPLAIN THIS FUNCTION
function generatePassword () {
  var length = askLength();
  var includeLower = confirm("Use lowercase?");
  var includeUpper = confirm("Use uppercase?");
  var includeNumbers = confirm("Use numbers?");
  var includeSymbols = confirm("Use symbols?");
  if (includeLower === false &&
    includeUpper === false &&
    includeNumbers === false &&
    includeSymbols === false){
      alert ("Please select OK for at least one type of character to include in your password.")
      //OPEN TO DEBUG - INSTEAD OF RECALLING GENERATEPASSWORD FUNCTION IT GOES BACK TO ASKLENGTH, AND THEN IT KINDA BREAKS BECAUSE WON'T WRITE THE PASSWORD
      generatePassword();
    }
  var pot = [];
  var finalPassword = "";
  
  if (includeLower) {
    pot = pot.concat(lowerCase);
  }

  if (includeUpper) {
    pot = pot.concat(upperCase);
  }

  if (includeNumbers) {
    pot = pot.concat(numbers);
  }

  if (includeSymbols) {
    pot = pot.concat(symbols);
  }
  
  console.log(`pot: ${pot}`);

  for (let i=0; i<length; i++) {
    var index = Math.floor(Math.random()*pot.length);
    var temp = pot[index];
    finalPassword += temp;
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
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);