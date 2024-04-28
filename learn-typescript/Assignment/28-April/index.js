"use strict";
//Write a script to log "Hello, World!" to the console.
console.log("Hello, World!");
// Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
let temperature = 25;
console.log(temperature);
if (temperature < 20) {
    console.log("It's cold!");
}
// Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.
let apple = 10;
console.log("Giveaway 3 apples", 10 - 3);
//Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
let firstName = "Ahmad";
let lastName = "Shan";
let fullName = firstName + " " + lastName;
console.log(fullName);
//Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
let number = 5;
console.log(number > 3 ? "Yes" : "No");
//Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
console.log(calculateArea(5));
// 7. Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
//8. Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
let temprature = [23, 44, 54, 21, 18];
console.log(Math.max(temperature));
//9. Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
let age = 32;
if (age < 18) {
    console.log("Minor");
}
else {
    console.log("Adult");
}
// 10. Write a function that takes an array of numbers and returns the count of positive numbers in the array.
function countPositiveNumbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }
    return count;
}
console.log(countPositiveNumbers([1, -2, 3, -4, 5]));
