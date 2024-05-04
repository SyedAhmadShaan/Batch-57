"use strict";
// 1. Write a script to log "Hello, World!" to the console.
console.log("Hello, World!");
//2.  Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
let temperature = 25;
console.log(temperature);
if (temperature < 20) {
    console.log("It's cold!");
}
//3. Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.
let apple = 10;
console.log("Giveaway 3 apples", 10 - 3);
//4. Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
let firstName = "Ahmad";
let lastName = "Shan";
let fullName = firstName + " " + lastName;
console.log(fullName);
//5. Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
const number1 = 5;
const number2 = 3;
if (number1 > number2) {
    console.log("Yes");
}
else {
    console.log("No");
}
//6. Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(radius) {
    return 3.14 * radius * radius;
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
let temperatures = [20, 25, 30, 35, 50];
let highestTemperature = temperatures[0];
for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > highestTemperature) {
        highestTemperature = temperatures[i];
    }
}
console.log(highestTemperature);
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
            count++; //count + 1;
        }
    }
    return count;
}
console.log(countPositiveNumbers([1, -2, 3, -4, 5]));
// 11. Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
function WordsStartWithA(words) {
    let WordsStartWithA = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase().startsWith("a")) {
            WordsStartWithA.push(words[i]);
        }
    }
    return WordsStartWithA;
}
console.log(WordsStartWithA(["apple", "banana", "grapes", "apricot", "guava", "avocado"]));
// 12. Create a script that logs the second to last element of an array named fruits.
let fruits = [
    "Banana",
    "Apple",
    "Orange",
    "Avacado",
    "Grapes",
    "Water Melon",
];
if (fruits.length >= 2) {
    const secondToLastElement = fruits[fruits.length - 2];
    console.log(`Second to last element is ${secondToLastElement}`);
}
else {
    console.log(" Array has not enough elements");
}
// 13. Develop a function that takes an array of numbers and returns a new array with each number squared.
function ArrayOfSquaredNumbers(arrayofnumbers) {
    let newArray = [];
    for (let i = 0; i < arrayofnumbers.length; i++) {
        newArray.push(arrayofnumbers[i] * arrayofnumbers[i]);
    }
    return newArray;
}
console.log(ArrayOfSquaredNumbers([2, 3, 5, 8, 11]));
// 14. Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function ReverseArray(array) {
    let Reverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        Reverse.push(array[i]);
    }
    return Reverse;
}
console.log(ReverseArray([1, 2, 3, 4, 5]));
/* 15. Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1],
write a function that logs the number of times the score exceeded the maximum score and the number of times it fell
below the minimum score */
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let maxScore = scores[0]; // initializes a variable maxScore to the first element of the scores array
let minScore = scores[0]; // initializes a variable minScore to the first element of the scores array
let maxCount = 0; // initializes a counter maxCount to keep track of how many times a score exceeds the current maximum.
let minCount = 0; // initializes a counter maxCount to keep track of how many times a score exceeds the current maximum.
for (let i = 0; i < scores.length; i++) {
    //for loop
    if (scores[i] > maxScore) {
        maxScore = scores[i];
    }
    else if (scores[i] < minScore) {
        minScore = scores[i];
    }
}
// Count how many times a score exceeds the maximum or falls below the minimum
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maxScore) {
        maxCount++;
    }
    else if (scores[i] < minScore) {
        minCount++;
    }
}
console.log(`Max score: ${maxScore}`);
console.log(`Min score: ${minScore}`);
console.log(`Number of times score exceeded maximum: ${maxCount}`);
console.log(`Number of times score fell below minimum: ${minCount}`);
// 16. Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
// declare a function
function RemoveFalseyValues(array) {
    let TruthyValues = []; // create a variable to store the array
    // loop through the array and check if each element is truthy or not
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            TruthyValues.push(array[i]); // if truthy, push the element to the new array
        }
    }
    return TruthyValues; // return the new array
}
console.log(RemoveFalseyValues([1, 0, null, undefined, "", NaN, false]));
//17. Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenatedArray = array1.concat(array2);
console.log(concatenatedArray);
// 18. Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
function sumOfElements(array, isEven) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if ((isEven && array[i] % 2 === 0) || (!isEven && array[i] % 2 !== 0)) {
            sum += array[i];
        }
    }
    return sum;
}
console.log(sumOfElements([1, 2, 3, 4, 5], true));
console.log(sumOfElements([1, 2, 3, 4, 5], false));
//19. Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function checkElementExists(array, element) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}
console.log(checkElementExists([1, 2, 3, 4, 5], 3)); // shows element that is 3 exsist at index 2
console.log(checkElementExists([1, 2, 3, 4, 5], 6)); // shows element that is 6 not exsist and returns -1
//20. Write a function to find and return the smallest number in an array of integers.
function findSmallestNumber(array) {
    let smallestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }
    return smallestNumber;
}
console.log(findSmallestNumber([1, 2, 3, 4, 5]));
//21. Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
function calculateProduct(array) {
    let product = 1; // initialize product to 1
    for (let i = 0; i < array.length; i++) {
        // loop through the array
        product *= array[i]; // multiply product by each element
    }
    return product; // return the product
}
console.log(calculateProduct([1, 2, 3, 4, 5]));
//22. Develop a function filterByLength that takes an array of strings and a number n.
//The function should return an array containing only the strings that are longer than n characters.
function filterByLength(array, n) {
    let stringsLongerThanN = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > n) {
            // check if the string is longer than n
            stringsLongerThanN.push(array[i]); // push the string to the new array if it is longer than n
        }
    }
    return stringsLongerThanN;
}
console.log(filterByLength(["apple", "banana", "grapes", "apricot", "guava", "avocado"], 5));
//23. Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(array) {
    let duplicates = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            // loop through the array starting from the next element
            if (array[i] === array[j] && !duplicates.includes(array[i])) {
                // check if the duplicate is not already in the duplicates array
                duplicates.push(array[i]); // push the duplicate to the duplicates array
            }
        }
    }
    return duplicates;
}
console.log(findDuplicates([1, 2, 3, 3, 5, 2, 2, 3, 4, 5]));
//24. Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] + 1); //Increment each element by one and push to newArray
    }
    return newArray;
}
console.log(incrementAll([2, 3, 4, 5, 6, 7]));
//25. Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurrences(array, element) {
    let count = 0; // initialize count to 0
    // loop through the array
    for (let i = 0; i < array.length; i++) {
        // check if the current element is equal to the element to count
        if (array[i] === element) {
            count++; // increment count if the element is found
        }
    }
    return count;
}
console.log(countOccurrences([1, 2, 3, 3, 5, 2, 2, 3, 4, 5], 3));
//26. Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false; // return false if the array is not sorted
        }
    }
    return true; // return true if the array is sorted
}
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([5, 4, 3, 2, 1]));
//27. Write a function that receives an array of names and formats them into a string separated by commas,
// except for the last two names, which should be separated by "and".
function formatNames(names) {
    let formattedNames = "";
    // loop through the array except for the last two names
    for (let i = 0; i < names.length - 2; i++) {
        formattedNames += names[i] + ", "; // add the name to the formattedNames string with a comma and space
    }
    formattedNames += names[names.length - 2] + " and " + names[names.length - 1]; // add the last two names with "and"
    return formattedNames;
}
console.log(formatNames(["John", "Rock", "Brock", "Undertaker"]));
// 28. Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
function convertFahrenheitToCelsius(fahrenheitTemperatures) {
    let celsiusTemperatures = [];
    for (let i = 0; i < fahrenheitTemperatures.length; i++) {
        let celsiusTemperature = (fahrenheitTemperatures[i] - 32) * (5 / 9);
        celsiusTemperatures.push(celsiusTemperature);
    }
    return celsiusTemperatures;
}
console.log(convertFahrenheitToCelsius([32, 68, 86, 104]));
// 29. Write a function minMaxAverage that takes an array of numbers
//and returns an object with properties for the minimum, maximum, and average of those numbers.
function minMAxAverage(array) {
    let min = array[0];
    let max = array[0];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
        sum += array[i];
    }
    let average = sum / array.length;
    return { min, max, average };
}
console.log(minMAxAverage([1, 2, 3, 4, 5]));
//30. Create a function swapElements that swaps two specified indices in an array.
function swapElements(array, index1, index2) {
    // swap two specified indices in an array
    let temp = array[index1]; // swap two specified indices in an array
    array[index1] = array[index2]; // swap two specified indices in an array
    array[index2] = temp; // swap two specified indices in an array
    return array; // swap two specified indices in an array
}
console.log(swapElements([1, 2, 3, 4, 5], 0, 4));
/*31. Develop a function that takes two inputs, a string and a character, and returns the number of times
the character appears in the string. */
function countCharacter(string, character) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            count++; // increment count if the character is found
        }
    }
    return count;
}
console.log(countCharacter("Hello", "l"));
/* 32. Create a 'to-do list' array of objects where each object has properties task and completed (a boolean).
Write a function to log only the tasks that are not yet completed.*/
// create a 'to-do list' array of objects
let toDoList = [
    { task: "Do the assignment", completed: true },
    { task: "Walk the dog", completed: false },
    { task: "Feed the cat", completed: true },
    { task: "Water the plants", completed: false },
];
// write a function to log only the tasks that are not yet completed
function logNotCompletedTasks(toDoList) {
    for (let i = 0; i < toDoList.length; i++) {
        if (!toDoList[i].completed) {
            console.log(toDoList[i].task);
        }
    }
}
// 33. Write a function that takes an array of integers and sorts them from smallest to largest.
function sortArray(array) {
    array.sort((a, b) => a - b); // sort the array in ascending order
    return array; // return the sorted array
}
console.log(sortArray([5, 2, 8, 3, 1]));
// 34. Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
function logArrayInReverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]); // log each element in reverse order
    }
}
logArrayInReverse([1, 2, 3, 4, 5]);
//35. Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user,
//perform the operation, and log the result.
function calculate(operand1, operand2, operator) {
    let result = 0; // initialize result to 0
    switch (operator // switch case to perform the operation based on the operator
    ) {
        case "+":
            result = operand1 + operand2; // add the two operands
            break;
        case "-":
            result = operand1 - operand2; // subtract the two operands
            break;
        case "*":
            result = operand1 * operand2; // multiply the two operands
            break;
        case "/":
            result = operand1 / operand2; // Divide the two operands
            break;
        default:
            console.log("Invalid operator"); // log error message if the operator is invalid
    }
    console.log(result);
}
calculate(10, 5, "+");
calculate(10, 5, "-");
calculate(10, 5, "*");
calculate(10, 5, "/");
