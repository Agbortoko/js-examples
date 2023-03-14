/** Using a Temporal variable */
let a = 5;
let b = 6;

// create a temporary variable
let temp;

// Swap
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping is ${a}`);
console.log(`The value of b after swapping is ${b}`);


/** Using Arithmetic operators */

let x = 4;
let y = 10;

x = x + y; // (4 + 10) = 14
y = x - y; // (14 - 10) = 4
x = x - y; // (14 - 4) = 10

console.log(`The value of x after swapping is ${x}`);
console.log(`The value of y after swapping is ${y}`);