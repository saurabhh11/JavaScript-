/* 1. What is the difference between a generator and a function? 

A generator is a type of function that can be used to create an iterator, while a regular function is a block of code that performs a specific task and returns a value or a set of values.

A generator uses the "yield" keyword, which allows the function to save its state and return a value, while also being able to resume execution from where it left off the next time it is called. A regular function uses the "return" keyword, which causes the function to exit and return a value. */

/*2 What is syntax od a generator?
function* generatorFunction() {
    let value = yield;
    console.log(value); */

    /*3 Yes, function generators in JavaScript are iterable. They can be used with the for...of loop and the spread operator, among other things. They also have a next() method that can be used to control the flow of the iteration.*/

    /* 4 - let generator = multiplyGenerator(2, 2);
console.log(generator.next().value); // 2 * 2 = 4
 
let generator = addGenerator(3, 3);
console.log(generator.next().value); // 3 + 3 = 6 */

//5

function* naturalNumbers() {
  let n = 1;
  while (true) {
    yield n;
    n++;
  }
}

let generator = naturalNumbers();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // 4

//6

function* myGenerator() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch (e) {
        console.log("Caught exception: " + e);
    }
}

const gen = myGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
gen.throw(new Error("Something went wrong!"));






