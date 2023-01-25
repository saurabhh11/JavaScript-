// 1) - Regex Expression = \d\d:\d\d

//2
function findHappiness(sentence) {
    if(sentence.toLowerCase().includes("happiness")) return "Hurray!";
else return "There is no happiness.";

  }
  console.log(findHappiness("I find happiness in helping others."));
  
//4

  function numOfDigits(num) {
    return num.toString().length;
}
console.log(numOfDigits(1000));
console.log(numOfDigits(122));

//7

function validatePIN(pin) {
    var pattern = /^\d{4}(\d{2})?$/;
    return pattern.test(pin);
  }
  
  console.log(validatePIN("1234")); 
  console.log(validatePIN("12345")); 
    
  //8

  function isValidHexCode(code) {
    
    var pattern = /^#[0-9A-Fa-f]{6}$/;
    return pattern.test(code);
  }
  console.log(isValidHexCode("#CD5C5C")); 
  console.log(isValidHexCode("#EAECEE")); 
  console.log(isValidHexCode("#CD5C&C")); 
    
//9

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
    