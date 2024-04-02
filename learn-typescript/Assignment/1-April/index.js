"use strict";
//Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting = "Hello World";
console.log(greeting);
//Define two variables with integer values and calculate their sum, difference, product, and quotient.
//Sum
let x = 8;
let y = 9;
console.log(x + y); //
//Difference
let x1 = 7;
let x2 = 4;
console.log(x1 - x2);
//Product
let x3 = 23;
let x4 = 4;
console.log(x3 * x4);
//Quotient
let num1 = 60;
let num2 = 12;
console.log(num1 / num2);
//Swap the values of two variables without using a third variable.
let a = 1;
let b = 2; // Swap these values without using a new variable.
[a, b] = [b, a];
console.log("a =", a);
console.log("b =", b);
//This applies to TypeScript. Create a string variable and try changing its type.
// assigning a number to it and see what happens.
let message;
//message = 7;  (gives an error: type number is not assignable to type string.)
//Use the modulus operator to find the remainder of two numbers.
let firstNum = 65;
let secondNum = 15;
console.log(firstNum % secondNum);
//Increment a variable's value by 1 using two different methods.
let counter = 0;
counter++;
console.log(counter); //Method 1
let counter2 = 0;
counter2 += 1;
console.log(counter2); //Method 2
//Given three boolean variables, write expressions for AND, OR, and NOT gates.
/*let a = true,
  b = false,
  c = true; // Write expressions using these. */
// For AND gate
let a1 = true;
let b1 = false;
let c1 = true;
let andGate = a1 && c1; // Both must be true
// For OR gate
let a2 = true;
let b2 = false;
let c2 = true;
let orGate = a2 || c2; //either one must be true
// For NOT gate
let notGateA = !true;
let notGateB = !false;
let notGateC = !true; //(it inverts the values, true becomes false and false becomes true)
//Show examples of using compound assignment operators.
let num = 10; // Use +=, -=, *=, and /= on this variable.
num += 5;
console.log(num);
num -= 5;
console.log(num);
num *= 4;
console.log(num);
num /= 4;
console.log(num);
//Write a program to check if a number is even or odd.
let number = 47;
let result = number % 2;
if (result == 0) {
    console.log("even");
}
else {
    console.log("odd");
}
//Check if a person is eligible to vote.
let age = 25; // Check if age is 18 or older to determine voting eligibility.
if (age >= 18) {
    console.log("Eligibe to vote");
}
else if (age < 18) {
    console.log("Not eligible to vote");
}
//Assign a grade based on a numerical score.
let score = 80; // Use conditionals to assign and print grades A, B, C, D, or F.
if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 80) {
    console.log("Grade B");
}
else if (score >= 70) {
    console.log("Grade C");
}
else if (score >= 50) {
    console.log("Grade D");
}
else {
    console.log("Grade F");
}
//12. Find the maximum of three numbers.
//let x, y, z;  Determine the largest among these.
let $x, $y, $z;
function findMaximum($x = 23, $y = 34, $z = 78) {
    let max;
    if ($x >= $y && $x >= $z) {
        max = $x;
    }
    else if ($y >= $x && $y >= $z) {
        max = $y;
    }
    else {
        max = $z;
    }
    return max;
}
const maximum = findMaximum();
console.log(`${maximum}`);