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
} else {
  console.log("No");
}

//6. Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(radius: number) {
  return 3.14 * radius * radius;
}
console.log(calculateArea(5));

// 7. Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
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
} else {
  console.log("Adult");
}

// 10. Write a function that takes an array of numbers and returns the count of positive numbers in the array.
function countPositiveNumbers(numbers: number[]) {
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

function WordsStartWithA(words: string[]) {
  let WordsStartWithA = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase().startsWith("a")) {
      WordsStartWithA.push(words[i]);
    }
  }
  return WordsStartWithA;
}
console.log(
  WordsStartWithA(["apple", "banana", "grapes", "apricot", "guava", "avocado"])
);

// 12. Create a script that logs the second to last element of an array named fruits.

let fruits: string[] = [
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
} else {
  console.log(" Array has not enough elements");
}

// 13. Develop a function that takes an array of numbers and returns a new array with each number squared.
function ArrayOfSquaredNumbers(arrayofnumbers: number[]) {
  let newArray = [];
  for (let i = 0; i < arrayofnumbers.length; i++) {
    newArray.push(arrayofnumbers[i] * arrayofnumbers[i]);
  }
  return newArray;
}
console.log(ArrayOfSquaredNumbers([2, 3, 5, 8, 11]));

// 14. Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function ReverseArray(array: number[]) {
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
  } else if (scores[i] < minScore) {
    minScore = scores[i];
  }
}

// Count how many times a score exceeds the maximum or falls below the minimum
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > maxScore) {
    maxCount++;
  } else if (scores[i] < minScore) {
    minCount++;
  }
}

console.log(`Max score: ${maxScore}`);
console.log(`Min score: ${minScore}`);
console.log(`Number of times score exceeded maximum: ${maxCount}`);
console.log(`Number of times score fell below minimum: ${minCount}`);

// 16. Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
// declare a function
function RemoveFalseyValues(array: any[]) {
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
function sumOfElements(array: number[], isEven: boolean) {
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
function checkElementExists(array: any[], element: any) {
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
function findSmallestNumber(array: number[]) {
  let smallestNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestNumber) {
      smallestNumber = array[i];
    }
  }
  return smallestNumber;
}
console.log(findSmallestNumber([1, 2, 3, 4, 5]));
