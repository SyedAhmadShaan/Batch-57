"use strict";
//1.Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting = "Hello World";
console.log(greeting);
//2. Define two variables with integer values and calculate their sum, difference, product, and quotient.
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
//3. Swap the values of two variables without using a third variable.
// Swap these values without using a new variable.
let a = 1;
let b = 2;
[a, b] = [b, a]; //using array destructing assignment
console.log("a =", a);
console.log("b =", b);
//4. This applies to TypeScript. Create a string variable and try changing its type.
// assigning a number to it and see what happens.
let message;
//message = 7;  (gives an error: type number is not assignable to type string.)
//5. Use the modulus operator to find the remainder of two numbers.
let firstNum = 65;
let secondNum = 15;
console.log(firstNum % secondNum);
//6. Increment a variable's value by 1 using two different methods.
let counter = 0;
counter++;
console.log(counter); //Method 1
let counter2 = 0;
counter2 += 1;
console.log(counter2); //Method 2
//7. Given three boolean variables, write expressions for AND, OR, and NOT gates.
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
//8. Show examples of using compound assignment operators.
let num = 10; // Use +=, -=, *=, and /= on this variable.
num += 5;
console.log(`Using addition assignment -= ${num}`);
num -= 5;
console.log(`Using subtraction assignment -= ${num}`);
num *= 4;
console.log(`Using multiplication assignment -= ${num}`);
num /= 4;
console.log(`Using division assignment -= ${num}`);
//9. Write a program to check if a number is even or odd.
let number = 47;
let result = number % 2;
if (result == 0) {
    console.log("even");
}
else {
    console.log("odd");
}
//10. Check if a person is eligible to vote.
let age = 25; // Check if age is 18 or older to determine voting eligibility.
if (age >= 18) {
    console.log("Eligibe to vote");
}
else if (age < 18) {
    console.log("Not eligible to vote");
}
//11. Assign a grade based on a numerical score.
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
console.log(`The largest value is ${maximum}`);
//13. Check if a given year is a leap year.
let year = 2024;
function isLeapYear(year) {
    let has29DaysInFebruary = new Date(year, 1, 29).getDate() === 29;
    return has29DaysInFebruary;
}
let isLeap = isLeapYear(year);
console.log(isLeapYear(year));
//14. Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit = 90;
function FahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
console.log(FahrenheitToCelsius(fahrenheit));
//15. Check if a number is positive, negative, or zero.
let $number = -3;
if ($number > 0) {
    console.log("positive");
}
else if ($number < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}
//16. Write a program that prints the multiplication table of a given number up to 10.
// Print the multiplication table for this number up to 10.
function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(number + " x " + i + " = " + result);
    }
}
printMultiplicationTable(2);
