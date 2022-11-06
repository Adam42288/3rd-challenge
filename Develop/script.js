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

const charsets = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~", "abcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~", "0123456789", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~", "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789", 
"!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~", "abcdefghijklmnopqrstuvwxyz0123456789", "abcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~", "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" ];


var passwordfinal = [];

  while (lowercase === false && uppercase == false && numeric == false && special == false) {
    window.alert("Please select at least one character type to be included in the password");
    lowercase = getlowercase();
    uppercase = getuppercase();
    numeric = getnumeric();
    special = getSpecialcharacters();
  }

  // All permutations of possible passcode options. 
if(lowercase === true && uppercase == true && numeric == true && special == true) {
  var n = charsets[13].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[13][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
else if(lowercase === false && uppercase == true && numeric == true && special == true) {
  var n = charsets[7].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[7][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}

else if(lowercase === false && uppercase == false && numeric == true && special == true) {
  var n = charsets[8].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[8][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}


else if(lowercase === false && uppercase == false && numeric == false && special == true) {
  var n = charsets[3].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[3][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}

else if(lowercase === false && uppercase == true && numeric == false && special == false) {
  var n = charsets[1].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[1][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}


else if(lowercase === false && uppercase == false && numeric == true && special == false) {
  var n = charsets[5].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[5][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// Uppercase + Special 
else if(lowercase === false && uppercase == true && numeric == false && special == true) {
  var n = charsets[9].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[9][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// Upppercase + numeric
else if(lowercase === false && uppercase == true && numeric == true && special == false) {
  var n = charsets[14].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[14][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// Lowercase only
else if(lowercase === true && uppercase == false && numeric == false && special == false) {
  var n = charsets[0].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[0][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// lowercase + special
else if(lowercase === true && uppercase == false && numeric == false && special == true) {
  var n = charsets[4].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[4][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// lowercase + numeric
else if(lowercase === true && uppercase == false && numeric == true && special == false) {
  var n = charsets[10].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[10][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// lowercase + numeric + special 
else if(lowercase === true && uppercase == false && numeric == true && special == true) {
  var n = charsets[11].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[11][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// lowercase + uppercase
else if(lowercase === true && uppercase == true && numeric == false && special == false) {
  var n = charsets[2].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[2][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// lowercase + uppercase + special
else if(lowercase === true && uppercase == true && numeric == false && special == true) {
  var n = charsets[6].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[6][Math.floor(Math.random()*n)])
    }  
      return passwordfinal.join('');  
}
// lowercase +uppercase + numeric
else if(lowercase === true && uppercase == true && numeric == true && special == false) {
  var n = charsets[12].length;
  for (var i = 0; i < length; i++) {
    passwordfinal.push(charsets[12][Math.floor(Math.random()*n)])
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
