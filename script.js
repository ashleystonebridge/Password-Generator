//Declaring variable for length of password required by the user
var passwordLength = 0;

//Function to store the input entered by the user for the length of the password
//Function also ensures that the minimum length of password is greater than or equal to 8 and that the input cannot be anything but a number
//User can press Cancel to skip this step
function askLength() {
  passwordLength = parseInt(prompt("Please input a number for the length of your password."));
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
  return passwordLength;
}

//Calls the function for length of password
console.log(passwordLength);

//Declares variable for letters avaialbe to use in the password
var lowerCase = ["a","b","c"]
var upperCase = ["A","B","C"]
var numbers = ["1", "2", "3"]
var symbols = ["!","@","#"]
//Declares variable for the count of the letters that will be used in the password
var lettersCount = 0;

//Function to ask user if they want to include letters in their password
//If user wants to include letters, then a random number is chosen from 1 to the paswordLength
function askLetters() {
  includeLetters = prompt("Press OK if you would like to include letters in your password. Otherwise, press Cancel.");
  if (includeLetters !== null) {
    lettersCount = Math.floor(Math.random()*passwordLength)+1
  }
}

//Calls the function to know if letters will be included in the password, and if so the count is stored in a variable
// console.log(includeLetters);
console.log(lettersCount);

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
      alert ("Press OK")
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

//   askLetters();
//   for (var i=0; i<lettersCount; i++) {
//     console.log(letters[Math.floor(Math.random()*letters.length)]);
//   }  
return finalPassword;

}

//STARTER CODE - Below is the starter code included in the homework assignment

//Assignment Code

var generateBtn = document.querySelector("#generate");

//Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button

generateBtn.addEventListener("click", writePassword);