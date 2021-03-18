// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(PassLen, Espec, Numeri, LowC, UppC);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


var PassLen;
// Ask foe 8 to 128 lenght if not continue until valur are met
do {
  alert("The password range must be between 8 and 128")
  PassLen = Number(prompt("How long s the password?"))
} while (PassLen < 8 || PassLen > 128);

// create variable for user input and preferences

var Espec = confirm("Does the password include special characters?");
var Numeri = confirm("Does the password include numpers?");
var LowC = confirm("Does the password include upper cases?");
var UppC = confirm("Does the password includes lower cases?");


// display in log
console.log(PassLen);
console.log(Espec);
console.log(Numeri);
console.log(LowC);
console.log(UppC);

// Create arrays for password construction
var ArrayNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var ArrayEspec = ["/", "*", "$", "&", "/", "@", "?", "!", "%", "¡"]
var ArrayLowC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var ArrayUppC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var CharCd = []


// function to generate password
function generatePassword(PassLen, Espec, Numeri, LowC, UppC) {


// condition to create array for password characters with user prederences
  if (Espec)
    CharCd = CharCd.concat(ArrayEspec);
  if (Numeri)
    CharCd = CharCd.concat(ArrayNum);
  if (LowC)
    CharCd = CharCd.concat(ArrayLowC);
  if (UppC)
    CharCd = CharCd.concat(ArrayUppC);

  console.log(CharCd)
  

  var passwordch = [];
  var CharCDL = CharCd.length

  // Create loop for password construction

  for (let i = 0; i < PassLen; i++) {

    var charCode = CharCd[Math.floor(Math.random() * CharCDL)];
    passwordch.push(charCode);
  }
  var password = passwordch.join("");
  return password;
}

// invoke functions

generatePassword()
writePassword()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
