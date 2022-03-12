// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var passwordLength = prompt('How many characters do you want your password to be?');
  var includeLowercase = confirm('Do you want to include lowercase letters?');
  var includeUppercase = confirm('Do you want to include uppercase letters?');
  var includeNumbers = confirm('Do you want to include numbers?');
  var includeSpecialChars = confirm('Do you want to include special characters?');

  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChars = ['!', '@', '#', '$', '%', '^', '&', '&', '*', '(', ')'];

  var allowedCharacters = [];

  if (includeLowercase === true) {
    for (var i = 0; i < lowerCase.length; i++) {
      allowedCharacters.push(lowerCase[i]);
    }
  }

  if (includeUppercase === true) {
    for (var i = 0; i < upperCase.length; i++) {
      allowedCharacters.push(upperCase[i]);
    }
  }

  if (includeNumbers === true) {
    for (var i = 0; i < numbers.length; i++) {
      allowedCharacters.push(numbers[i]);
    }
  }

  if (includeSpecialChars === true) {
    for (var i = 0; i < specialChars.length; i++) {
      allowedCharacters.push(specialChars[i]);
    }
  }

  console.log(allowedCharacters)

  var password = '';



  for (i = 0; i < passwordLength; i++) {

    var randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    var randomChar = allowedCharacters[randomIndex];

    password = password + randomChar;
  }




  console.log(password)

  return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






