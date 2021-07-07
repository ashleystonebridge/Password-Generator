//Declaring variable for length of password required by the user
var passwordLength = 0;

//Function to store the input entered by the user for the length of the password
//Function also ensures that the minimum length of password is greater than or equal to 8
//NOT WORKING - Function also checks to make sure that the user is only allowed to input a number
function askLength() {
  passwordLength = prompt("Please input a number for the length of your password.");
  // if (passwordLength = isNaN()){
  //   alert("Please input a number.");
  //   askLength();
  // }
  if (passwordLength < 8) {
    alert("Please choose a number greater than or equal to 8.");
    askLength();
  }
}

//Calls the function for length of password
askLength();
console.log(passwordLength);

//Declares variable for letters avaialbe to use in the password
var letters = ("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz");
//Declares variable for the count of the letters that will be used in the password
var lettersCount = 0;

//Function to ask user if they want to include letters in their password
//NOT WORKING - In the prompt window when the user presses OK, then letters will be included in the password. Otherwise, if pressed Cancel, then letters will not be included
function askLetters() {
  includeLetters = prompt("Press OK if you would like to include letters in your password. Otherwise, press Cancel.");
  if (includeLetters !== null) {
    lettersCount = Math.floor(Math.random(0, passwordLength - 1))
  }
}

//Calls the function to know if letters will be included in the password or not
askLetters();
console.log(includeLetters);
console.log(lettersCount);


//Below is the starter code included in the homework assignment

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

