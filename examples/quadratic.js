/**
 * Research Info
 * 
 * Finding the roots of a quadratic equation of known coefficients
 * 
 * Standard form of quadratic equation is
 * ax^2 + bx + c, where a, b and c are real numbers and a is not equal to 0
 * 
 * To find the roots of a quadratic equation we use the formula
 * (root1, root2) = (-b ± √(b^2-4ac)/2
 * 
 * The expression b^2-4ac is known as the discriminant of a quadratic equation
 * 
 * 1) if the discriminant > 0 the roots are real and different
 * root1 = -b + √ discriminant / 2a
 * root2 = -b - √ discriminant / 2a
 * 
 * 2) if the discriminant = 0 the roots are real and equal
 * root1, root2 = -b / 2a
 * 
 * 3) if the discriminant < 0 the roots are complex and different
 * complex stuff that i can't document here (see readme file)
 */


let root1, root2;

// Values of equation (ax^2 + bx + c)
let a = 2;
let b = 3;
let c = 5;

// Calculate discriminant

let discriminant = square(b) - 4 * a * c;

// Check for the root conditions

// Real and different roots
if(discriminant > 0){

    root1 = (-b + Math.sqrt(discriminant) / (2 * a));
    root2 = (-b - Math.sqrt(discriminant) / (2 * a));

    console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);
}

// Real and equal roots
else if(discriminant == 0){

    root1 = root2 = -b / (2 * a);
    console.log(`The roots of the quadratic equation are ${root1}, ${root2}`);
}

// Complex roots
else{

    let realPart = (-b / (2 * a)).toFixed(2);
    let complexPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    console.log(`The roots of the quadratic equation are ${realPart} + ${complexPart}i and ${realPart} - ${complexPart}i`);

}


/**
 * Square any given number
 */
function square(number){
    return number*number;
}