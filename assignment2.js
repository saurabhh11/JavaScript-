1. Write a Javascript function to check whether a triangle is equilateral,
isosceles or scalene

function classifyTriangle(a, b, c) {
    if (a === b && b === c) {
      return "equilateral";
    } else if (a === b || b === c || a === c) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
  console.log(classifyTriangle(3, 3, 3)); 
  console.log(classifyTriangle(3, 4, 4)); 
  console.log(classifyTriangle(3, 4, 5)); 


2. Write a function using switch case to find the grade of a student based
on marks obtained

function getGrade(marks) {
    switch (true) {
      case marks >= 90 && marks <= 100:
        return "S grade";
      case marks >= 80 && marks < 90:
        return "A grade";
      case marks >= 70 && marks < 80:
        return "B grade";
      case marks >= 60 && marks < 70:
        return "C grade";
      case marks >= 50 && marks < 60:
        return "D grade";
      case marks >= 40 && marks < 50:
        return "E grade";
      case marks >= 0 && marks < 40:
        return "Student has failed";
      default:
        return "Invalid marks";
    }
  }
  console.log(getGrade(86)); 
  console.log(getGrade(62));
  console.log(getGrade(-2)); 
  
        
 3. Write a JavaScript program to find the sum of the multiples of 3 and 5
under 1000       
  
  let sum = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum); 
        
4. Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).


function primeFactorial(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i + '! = ' + factorial(i));
    }
  }
}

function isPrime(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n-1);
}

console.log(primeFactorial(1,100));

