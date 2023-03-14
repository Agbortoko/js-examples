# JavaScript Examples and Solutions

Create a HTML file and link the js file you want to test you your html

## Table of Content

- [Print Hello World](#example-1)
- [Add Two Numbers](#example-2)
- [Square root of a Number](#example-3)
- [Calculate the Area of a Traingle](#example-4)


### Example 1
Print Hello World

[helloworld.js](examples/helloworld.js)

```js

// Print Hello World on Console
console.log("Hello World");

// Alert Hello World on browser
alert("Hello World");

// Print Hello World on browser
document.write("Hello World");

// Print Hello World in a html section with id "content"
document.getElementById("#content").innerHTML = "Hello World";

```


### Example 2
Add Two Numbers

[add2numbers.js](examples/add2numbers.js)

``` js
// Add two numbers
const firsNumber = 20;
const secondNumber = 45;

console.log(firsNumber +  secondNumber);

// Using template literals to log on console.

const sum = firsNumber + secondNumber;
console.log(`The sum of ${firsNumber} and ${secondNumber} is ${sum}`);


// Add two numbers entered by the user
const thirdNumber = parseInt(prompt("Enter the first number"));
const fourthNumber = parseInt(prompt("Enter the second Number"));

console.log(thirdNumber + fourthNumber);
```


### Example 3
Find the square root of a number

[sqrtofnumber.js](examples/sqrtofnumber.js)

```js

const number = prompt("Type the number");

// Using the built in Math.sqrt() method
const squareRoot = Math.sqrt(number);

console.log(`The square root of ${number} is ${squareRoot}`);

```


### Example 4
Calculate the area of a traingle

[areaoftraingle.js](examples/areaoftraingle.js)

```js

/**
 * Formula for area of traingle where base and height is known
 * area = (base * height) / 2
 */

const base = 5;
const height = 15;

const area = (base * height) / 2;

console.log(`The area of a traingle with base ${base} and height ${height} is ${area}`);


/**
 * Formula for area of traingle where all sides are known using Heron's method
 * semi-perimeter = (side1 + side2 + side3) / 2
 * area = √(s(s-a)*(s-b)*(s-c))
 */

const sideOne = 10;
const sideTwo = 13;
const sideThree = 15;

// Value of the Semi Perimeter
const s = (sideOne + sideTwo + sideThree) / 2;

const innerCalculation = s * (s - sideOne) * (s - sideTwo) * (s - sideThree);

const areaOfTraingle = Math.sqrt(innerCalculation);

console.log(`The area of traingle with sides ${sideOne}, ${sideTwo}, ${sideThree} is ${areaOfTraingle}`);

```