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
