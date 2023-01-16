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