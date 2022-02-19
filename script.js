// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function getrandom(max) {
  return Math.floor(Math.random() * max)
}
function generatePassword() {
  var userpasswordlength = prompt("Type a number between 8-128")
  console.log(userpasswordlength);

  if (userpasswordlength < 8 || userpasswordlength > 128) {
    alert("Only enter numbers between 8-128");
    userpasswordlength = prompt("Type a number between 8-128");
  }

  var specialchacters = confirm("special characters?")
  console.log(specialchacters)
  var numbers = confirm("numbers?")
  console.log(numbers)
  var lowercaseletters = confirm("lowercase letters?");
  console.log(lowercaseletters)
  var uppercaseletters = confirm("uppercase letters?");
  console.log(uppercaseletters)

  var sc = "`~!@#$%^&*()-_=+[]{}|;:'.,".split("");
  console.log(sc)
  var nu = "0123456789".split("");
  console.log(nu)
  var lcl = "abcdefghijklmnopqrstuvwxyz".split("");
  console.log(lcl)
  var ucl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  console.log(ucl)

  var newpassword = "";

  while (newpassword.length <= userpasswordlength)
    if (numbers) {
      i = getrandom(nu.length);
      newpassword = newpassword = nu[i];
    }
  if (specialcharacters) {
    i = getrandom(sc.length);
    newpassword = newpassword + sc[i];
  }
  {
    if (uppercaseletters) {
      i = getrandom(ucl.length);
      newpassword = newpassword + ucl[i]
    }
  }
  if (lowercaseletters) {
    i = getrandom(lcl.length);
    newpassword = newpassword + lcl[i]
  }

  console.log(newpassword)
  return newpassword

}//closed generate password funcation

generateBtn.addEventListener("click", writePassword);


