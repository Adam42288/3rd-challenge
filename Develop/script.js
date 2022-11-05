// Assignment code here


function getLength() {
var numbers;
numbers = prompt("How long would you like your password to be? enter a number between 8 and 128 please.");
while (numbers <8 || numbers > 128) {
  numbers = prompt("Try again. How many characters would you like your password to be? enter a number between 8 and 128 please.");
}
return numbers;
}

function getlowercase() {
var lowercase;

lowercase = prompt("Want to include lowercase characters? Y/N ");
while (lowercase !== "Y" && lowercase !== "N" && lowercase !== "y" && lowercase !== "n") {
  lowercase = prompt("Try again: Want to include lowercase characters? Please answer with Y/N");
}

if (lowercase === 'Y' || lowercase === 'y') {
  lowercase = true;
  return lowercase;
}
else {
  lowercase = false;
  return lowercase;
}

}

function getuppercase() {
  var uppercase;

  uppercase = prompt("Want to include uppercase characters? Y/N ");
  while (uppercase !== "Y" && uppercase !== "N" && uppercase !== "y" && uppercase !== "n") {
    uppercase = prompt("Try again: Want to include uppercase characters? Please answer with Y/N");
  }
  
  if (uppercase === 'Y' || uppercase === 'y') {
    uppercase = true;
    return uppercase;
  }
  else {
    uppercase = false;
    return uppercase;
  }
}

function getnumeric() {
  var numeric;

  numeric = prompt("Want to include numbers in your password? Y/N ");
  while (numeric !== "Y" && numeric !== "N" && numeric !== "y" && numeric !== "n") {
    numeric = prompt("Try again: Want to include numbers in your password? Please answer with Y/N");
  }
  
  if (numeric === 'Y' || numeric === 'y') {
    numeric = true;
    return numeric;
  }
  else {
    numeric = false;
    return numeric;
  }
}

function getSpecialcharacters() {
  var special;

  special = prompt("Want to include special characters in your password? Y/N ");
  while (special !== "Y" && special !== "N" && special !== "y" && special !== "n") {
    special = prompt("Try again: Want to include special characters in your password? Please answer with Y/N");
  }
  
  if (special === 'Y' || special === 'y') {
    special = true;
    return special;
  }
  else {
    special = false;
    return special;
  }
}

// Function that returns the password
function generatePassword() {
var lowercase = false;
var uppercase =  false;
var numeric = false;
var length = getLength();
var special = false;

// Special Charset only
var charset4 =  "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// Numeric Charset only
var charset6 = "0123456789";
// Numeric + special charset
var charset9 = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";
// Uppercase only
var charset2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Uppercase + Special charset
var charset10 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// Uppercase + Numeric
var charset15 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
// Uppercase + Numeric + Special
var charset8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";
// Lowercase only
var charset1 = "abcdefghijklmnopqrstuvwxyz";
// Lowercase + Special
var charset5 = "abcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// Lowercase + Numeric
var charset11 = "abcdefghijklmnopqrstuvwxyz0123456789";
// Lowercase + Numeric + Special
var charset12 = "abcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// Lowercase + uppercase
var charset3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Lowercase + uppercase + special
var charset7 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Lowercase + uppercase + numeric
var charset13 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
// Lowercase + uppercase +numeric + special
var charset14 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var passwordfinal = [];

  while (lowercase === false && uppercase == false && numeric == false && special == false) {
    window.alert("Please select at least one character type to be included in the password");
    lowercase = getlowercase();
    uppercase = getuppercase();
    numeric = getnumeric();
    special = getSpecialcharacters();
  }
// All options selected
if(lowercase === true && uppercase == true && numeric == true && special == true) {
  var n = charset14.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset14[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
else if(lowercase === false && uppercase == true && numeric == true && special == true) {
  var n = charset8.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset8[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}

else if(lowercase === false && uppercase == false && numeric == true && special == true) {
  var n = charset9.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset9[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}


else if(lowercase === false && uppercase == false && numeric == false && special == true) {
  var n = charset4.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset4[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}

else if(lowercase === false && uppercase == true && numeric == false && special == false) {
  var n = charset2.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset2[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}


else if(lowercase === false && uppercase == false && numeric == true && special == false) {
  var n = charset6.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset6[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// Uppercase + Special 
else if(lowercase === false && uppercase == true && numeric == false && special == true) {
  var n = charset10.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset10[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// Upppercase + numeric
else if(lowercase === false && uppercase == true && numeric == true && special == false) {
  var n = charset15.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset15[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// Lowercase only
else if(lowercase === true && uppercase == false && numeric == false && special == false) {
  var n = charset1.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset1[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// lowercase + special
else if(lowercase === true && uppercase == false && numeric == false && special == true) {
  var n = charset5.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset5[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// lowercase + numeric
else if(lowercase === true && uppercase == false && numeric == true && special == false) {
  var n = charset11.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset11[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// lowercase + numeric + special 
else if(lowercase === true && uppercase == false && numeric == true && special == true) {
  var n = charset12.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset12[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// lowercase + uppercase
else if(lowercase === true && uppercase == true && numeric == false && special == false) {
  var n = charset3.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset3[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// lowercase + uppercase + special
else if(lowercase === true && uppercase == true && numeric == false && special == true) {
  var n = charset7.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset7[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// lowercase +uppercase + numeric
else if(lowercase === true && uppercase == true && numeric == true && special == false) {
  var n = charset13.length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charset13[Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}

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
