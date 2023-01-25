1- Make a regex to find time in the string: Lunch at 10:10 in the room
123:456. In this task there’s no need to check time correctness yet,
so 25:99 can also be a valid result. The regex should not match
333:333.

// 1) - Regex Expression = \d\d:\d\d

//2
2.) Create a function that finds the word "happiness" in the given
string (not case sensitive). If found, return "Hurray!", otherwise
return "There is no happiness.".

function findHappiness(sentence) {
    if(sentence.toLowerCase().includes("happiness")) return "Hurray!";
else return "There is no happiness.";

  }
  console.log(findHappiness("I find happiness in helping others."));
  
//4
4). Create a function that will return an integer number
corresponding to the amount of digits in the given integer num

  function numOfDigits(num) {
    return num.toString().length;
}
console.log(numOfDigits(1000));
console.log(numOfDigits(122));

//7

7). ATM machines allow 4 or 6 digit PIN codes and PIN codes
cannot contain anything but exactly 4 digits or exactly 6 digits. Your
task is to create a function that takes a string and returns true if the
PIN is valid and false if it's not.

function validatePIN(pin) {
    var pattern = /^\d{4}(\d{2})?$/;
    return pattern.test(pin);
  }
  
  console.log(validatePIN("1234")); 
  console.log(validatePIN("12345")); 
    
  //8
8). Create a function that determines whether a string is a valid hex
code. A hex code must begin with a pound key # and is exactly 6
characters in length. Each character must be a digit from 0-9 or an
alphabetic character from A-F. All alphabetic characters may be
uppercase or lowercase.

  function isValidHexCode(code) {
    
    var pattern = /^#[0-9A-Fa-f]{6}$/;
    return pattern.test(code);
  }
  console.log(isValidHexCode("#CD5C5C")); 
  console.log(isValidHexCode("#EAECEE")); 
  console.log(isValidHexCode("#CD5C&C")); 
    
//9
9). Create a function that takes an array of numbers and returns
"Boom!" if the digit 7 appears in the array. Otherwise, return "there is
no 7 in the array".

function checkSeven(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].toString().includes("7")) {
        return "Boom!";
      }
    }
    return "there is no 7 in the array";
  }
  
  console.log(checkSeven([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
console.log(checkSeven([1, 2, 3, 4, 5, 6, 8, 9])); 

//10
10). Create a function that takes a string, checks if it has the same
number of x's and o's and returns either true or false.

● Return a boolean value (true or false).
● Return true if the amount of x's and o's are the same.
● Return false if they aren't the same amount.
● The string can contain any character.
● When "x" and "o" are not in the string, return true.

function checkXO(str) {
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === "x") {
        xCount++;
      } else if (str[i].toLowerCase() === "o") {
        oCount++;
      }
    }
    return xCount === oCount;
  }
  console.log(checkXO("xooxo")); 
  console.log(checkXO("xxoo")); 
  console.log(checkXO("xxooXo")); 
  console.log(checkXO("")); 
    
