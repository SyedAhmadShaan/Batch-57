"use strict";
//Reverse an Array Write a function that takes an array as input and returns a new array with the elements in reverse order.
Object.defineProperty(exports, "__esModule", { value: true });
let Sales = [20, 30, 40, 50, 60, 70];
function reverse(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(reverse(Sales));
//Remove Duplicates Write a function that takes an array of numbers as input and returns a new array with all duplicate values removed.
function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++)
        for (let j = i + 1; j < array.length; j++)
            if (array[i] === array[j])
                array.splice(j, 1);
    return array;
}
console.log(removeDuplicates([1, 2, 3, 3, 5, 2, 2, 3, 4, 5]));
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
function findDuplicates(arr) {
    let duplicates = [];
    arr.forEach((item) => {
        if (item in duplicates) {
            duplicates[item]++;
        }
        else {
            duplicates[item] = 1;
        }
    });
    for (const key in duplicates) {
        if (duplicates[key] > 1) {
            console.log(`${key} appears ${duplicates[key]} times.`);
        }
    }
}
const array = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 8];
findDuplicates(array);
//Create a function findDuplicates that finds and logs all duplicates in an array.
let counter;
console.log(counter); //  ->  undefined
{
    counter = 1;
    console.log(counter); //  ->  1
}
counter = counter + 1;
console.log(counter); //  ->  2
var globalGreeting = "Good  ";
function testFunction() {
    var localGreeting = "Morning  ";
    console.log("function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}
testFunction();
console.log("main  program:");
console.log(globalGreeting);
//console.log(localGreeting); //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined
let name1 = "Maxwell Wright";
let phoneNumber1 = "(0191) 719 6495";
let email1 = "Curabitur.egestas.nunc@nonummyac.co.uk";
console.log(name1, phoneNumber1, email1);
let name2 = "Raja Villarreal";
let phoneNumber2 = "0866 398 2895";
let email2 = "posuere.vulputate@sed.com";
console.log(name2, phoneNumber2, email2);
let name3 = "Helen Richards";
let phoneNumber3 = "0800 1111";
let email3 = "libero@convallis.edu";
console.log(name3, phoneNumber3, email3);
//Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.
let name5 = "Ahmad";
let age = 32;
let isJob = true;
let salary = 100000;
let employeeNumber;
console.log(typeof name5);
console.log(typeof age);
console.log(typeof isJob);
console.log(typeof salary);
console.log(typeof employeeNumber);
console.log(`My name is ${name5}, I am ${age} years old and my monthly salary is ${salary}`);
function conveyence(ride) {
    if (ride === "bike") {
        return "true";
    }
    else if (ride === "car") {
        return "false";
    }
    else {
        return "invalid";
    }
}
console.log(conveyence("cycle"));
/*let age3 = 32;
age3 = age3 + 1;
console.log(Age3);*/
let name9;
let age9;
{
    let height;
    // 2
} // 2
{
    let weight; // 1 	// 2
    console.log(weight); // 1 	// 2
    // 2
    console.log(weight); // 2
}
