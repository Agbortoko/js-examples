# JavaScript Examples and Solutions

Create a HTML file and link the js file you want to test you your html

## Table of Content

- [Print Hello World](#example-1)
- [Add Two Numbers](#example-2)

## Example 1
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

## Example 2
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
