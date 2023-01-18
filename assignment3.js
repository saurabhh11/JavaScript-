//1. Using for loops, write a Javascript program to output the following pattern

//1
//2 3
//4 5 6
//7 8 9 10

let count = 1;
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(count);
    count++;
  }
  console.log("\n");
}

//2. Write a program to find whether a given number is armstrong number or not

function isArmstrongNumber(num) {
  var originalNum = num;
  var numOfDigits = num.toString().length;
  var sum = 0;

  while (num > 0) {
      var digit = num % 10;
      sum += digit ** numOfDigits;
      num = Math.floor(num / 10);
  }

  return originalNum === sum;
}

console.log(isArmstrongNumber(153)); 
console.log(isArmstrongNumber(9475)); 
console.log(isArmstrongNumber(370)); 
console.log(isArmstrongNumber(1634));

//3. Write a program to find whether a given number is special number or not

function isSpecialNumber(num) {
  var originalNum = num;
  var sum = 0;

  while (num > 0) {
      var digit = num % 10;
      var factorial = 1;
      for (var i = 1; i <= digit; i++) {
          factorial *= i;
      }
      sum += factorial;
      num = Math.floor(num / 10);
  }

  return originalNum === sum;
}

console.log(isSpecialNumber(145)); 
console.log(isSpecialNumber(12)); 