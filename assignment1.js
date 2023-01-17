1. Write a program to find whether a given year is a leap year or not.

function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isLeapYear(2000)); 
console.log(isLeapYear(1900));
console.log(isLeapYear(2024));

2.Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.


function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  console.log(celsiusToFahrenheit(60) + "°F");
  console.log(fahrenheitToCelsius(45) + "°C"); 
  
3.Write a program to find the factorial of a number.

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n-1);
  }
  console.log(factorial(7)); 
  console.log(factorial(8)); 
  
