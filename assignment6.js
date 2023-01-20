1) Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
○ It is a subclass of Rectangle.
○ It contains a constructor and no other methods.
○ It can use the Rectangle class' area method to print the area
of a Square object.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}
let square = new Square(5);
console.log(square.area()); 
let rectangle = new Rectangle(5,10);
console.log(rectangle.area()); 

2) Write a javascript function find_largest to return the nth largest number in an array-


function find_largest(arr, n) {
    // sort the array in descending order
    arr.sort((a, b) => b - a);
    // return the nth element from the sorted array
    return arr[n - 1];
}
let arr = [3,45,8,6,21,54,11,12];
console.log(find_largest(arr, 5)); 

3) Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.

function computeDash(num) {
    // convert the number to a string
    let numStr = num.toString();
    // create an empty result string
    let result = "";
    // loop through each character in the string
    for (let i = 0; i < numStr.length; i++) {
        // add the current character to the result string
        result += numStr[i];
        // check if the current character is even and the next character is also even
        if (numStr[i] % 2 === 0 && numStr[i + 1] % 2 === 0) {
            // insert a dash between the two even numbers
            result += "-";
        }
    }
    return result;
}
console.log(computeDash(2458698)); 
