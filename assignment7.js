
/*1. Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec...*/

function truncateString(s) {
    if (s.length > 4) {
      return s.slice(0, 4) + "...";
    } else {
      return s;
    }
  }
  
  console.log(truncateString("Ice"));
  console.log(truncateString("Icecream"));

  /*2. Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy” Output: “HiiBoy”*/

function removeWhitespaces(s) {
  return s.replace(/\s+/g, '');
}
console.log(removeWhitespaces("Hii Boy"));

/*3. Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii”*/

function replaceWords(s) {
  var words = s.split(" ");
  return words[1] + " " + words[0];
}
console.log(replaceWords("Hii Boy"));

/*4. Input a String S with a word, and replace character “a” with “x” and
display the result -
Input: “apple” Output: “xpple”*/

function replaceChar(s) {
  return s.replace(/a/g, "x");
}
console.log(replaceChar("apple"));

 
  /*8. Write a Javascript function to test whether the first character of a string
is lowercase.*/

function isFirstCharacterLowercase(s) {
  let firstChar = s.charAt(0);
  return firstChar === firstChar.toLowerCase();
}
console.log(isFirstCharacterLowercase("hello"));  
console.log(isFirstCharacterLowercase("Hello"));

/*9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that ?*/

function checkInput(input) {
  let lowerCaseInput = input.toLowerCase();
  if (lowerCaseInput === "yes") {
    return "Correct input";
  } else {
    return "Incorrect input";
  }
}
console.log(checkInput("yes"));  
console.log(checkInput("no"));   
console.log(checkInput("YES"));  
console.log(checkInput("Yes"));


  