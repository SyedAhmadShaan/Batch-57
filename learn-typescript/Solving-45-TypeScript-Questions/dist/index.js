"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1. Install Node.js, TypeScript and VS Code on your computer.
//2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let name1 = "Eric";
let greet = `Hello ${name1}, would you like to learn some Python today?`;
console.log(greet);
//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Eric";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
//4.Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let Author = "Alber Einstein";
let quote = `${Author} once said, “A person who never made a mistake never tried anything new.”`;
console.log(quote);
//5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Alber Einstein";
let message = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;
console.log(message);
//6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personNameWithWhitespace = " \t Ahmad Shaan \n ";
console.log(personNameWithWhitespace); //print the name with white spaces
console.log(personNameWithWhitespace.trim()); //strip white spaces using trim() method
//7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(16 / 2);
//8. You should create four lines that look like this:console.log(5 + 3) Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 7;
console.log(`My favorite number is ${favoriteNumber}`);
//10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
let personName1 = " \t Ahmad Shaan \n ";
console.log(personName1); //print the name with white spaces
console.log(personName1.trim()); //strip white spaces using trim() method
//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ["Sultan", "Mazhar", "Saqib", "Kamran"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log(`Hello ${names[0]}, lets learn Typescript`);
console.log(`Hello ${names[2]}, lets learn Typescript`);
console.log(`Hello ${names[1]}, lets learn Typescript`);
console.log(`Hello ${names[3]}, lets learn Typescript`);
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transport = ["Honda CG125", "Suzuki GS150", "Yamaha YBR125"];
console.log(`I would like to own ${transport[2]}`);
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guest = ["Ali", "Nauman", "Waqas"];
console.log(`${Guest[0]}, Please join us for dinner this weekend`);
console.log(`${Guest[1]}, Please join us for dinner this weekend`);
console.log(`${Guest[2]}, Please join us for dinner this weekend`);
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`${Guest[2]}, may find difficult to join us for dinner`);
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
Guest.pop();
console.log(Guest);
Guest.push("Imran");
console.log(Guest);
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log(`${Guest[0]}, Please join us for dinner this weekend`);
console.log(`${Guest[1]}, Please join us for dinner this weekend`);
console.log(`${Guest[2]}, Please join us for dinner this weekend`);
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("I found a bigger dinner table so i would like to send dinner invitation to more people");
// • Add one new guest to the beginning of your array.
Guest.shift();
console.log(Guest);
// • Add one new guest to the middle of your array.
Guest.splice(1, 0, "Shahid");
console.log(Guest);
// • Use append() to add one new guest to the end of your list
function append(array, element) {
    return [...array, element];
}
Guest = append(Guest, "Shoaib");
console.log(Guest);
// • Print a new set of invitation messages, one for each person in your list.
console.log(`${Guest[0]}, Please join us for dinner this weekend`);
console.log(`${Guest[1]}, Please join us for dinner this weekend`);
console.log(`${Guest[2]}, Please join us for dinner this weekend`);
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("My new dinner table won’t arrive in time for the dinner, I can invite only two people for dinner");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (Guest.length > 2) {
    console.log(`${Guest.pop()}, Sorry, I can't invite you to dinner`);
    console.log(`${Guest.pop()}, Sorry, I can't invite you to dinner`);
    console.log(Guest);
    // • Print a message to each of the two people still on your list, letting them know they’re still invited.
    console.log(`${Guest[0]}, You are still invited to dinner`);
    console.log(`${Guest[1]}, You are still invited to dinner`);
}
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
Guest.splice(0, 2);
console.log(Guest);
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let Places = [
    "Switzerland",
    "Turkey",
    "Egypt",
    "Australia",
    "Germany",
];
// • Print your array in its original order.
console.log("Original order:", Places);
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", Places.sort());
// • Show that your array is still in its original order by printing it.
console.log("Still original ondragover;", Places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order:", Places.sort().reverse());
//• Show that your array is still in its original order by printing it again.
console.log("Still original order;", Places);
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed order:", Places.reverse());
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reversed again to original order:", Places.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetically sorted:", Places.sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse alphabetically sorted:", Places.sort((a, b) => b.localeCompare(a)));
//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`I am inviting ${Guest.length} people to dinner`);
//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let languages = [
    "Punjabi",
    "Spanish",
    "English",
    "Persian",
    "French",
];
function listOfLanguages(languages) {
    for (let i = 0; i < languages.length; i++) {
        console.log(languages[i]);
    }
}
listOfLanguages(languages);
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let country = {
    name: "Pakistan",
    capital: "Islamabad",
    language: "Urdu",
};
function countryDetails(country) {
    console.log(`${country.name} is my country`);
}
countryDetails(country);
/* 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program. */
let fruit = [
    "apple",
    "banana",
    "graprs",
    "water melon",
    "strawberry",
];
console.log(fruit[6]); // No index 6 in array
// Corrected
if (fruit.length > 4) {
    console.log(fruit[4]);
}
/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let book = "ai essentials";
console.log("Is book == 'ai essentials'? I predict True.");
console.log(book == "ai essentials");
let bike = "suzuki";
console.log("Is bike == suzuki? I predict True.");
console.log(bike == "suzuki");
let age = "18";
console.log("Is age == 18? I predict True.");
console.log(age == "18");
let user = "admin";
console.log("Is user == admin? I predict True");
console.log(user == "admin");
let person = "student";
console.log("Is person == student? I predict True");
console.log(person == "student");
let book1 = "ai essentials";
console.log("Is book1 != 'ai essentials'? I predict False.");
console.log(book1 != "ai essentials");
let bike1 = "suzuki";
console.log("Is bike1 != suzuki? I predict False.");
console.log(bike1 != "suzuki");
let age1 = "18";
console.log("Is age1 != 18? I predict False.");
console.log(age1 != "18");
let user1 = "admin";
console.log("Is user1 != admin? I predict False");
console.log(user1 != "admin");
let person1 = "student";
console.log("Is person1 != student? I predict False");
console.log(person1 != "student");
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = "green";
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color == "green") {
    console.log("The player just earned 5 points");
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color_ = "yellow";
if (alien_color_ == "yellow") {
    console.log("The player just earned 5 points");
}
let alien_color1 = "yellow";
if (alien_color1 == "green") {
    console.log("The player just earned 5 points."); // no output
}
/*26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points. */
let alien_color2 = "green";
if (alien_color2 == "green") {
    console.log("The player just earned 5 points for shooting the alien");
}
else {
    console.log("The player just earned 10 points");
}
//• Write one version of this program that runs the if block and another that runs the else block.
let personAge = "13";
if (personAge >= "13") {
    console.log("The person is allowed to play the aliens shooter game.");
}
else {
    console.log("The person is not allowed to play the aliens shooter game");
}
/*27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
let alien_color3 = "green";
if (alien_color3 == "green") {
    console.log("The player earned 5 points.");
}
else if (alien_color3 == "yellow") {
    console.log("The player earned 10 points.");
}
else if (alien_color3 == "red") {
    console.log("The player earned 15 points.");
}
let alien_color4 = "yellow";
if (alien_color4 == "yellow") {
    console.log("The player earned 10 points.");
}
else if (alien_color4 == "green") {
    console.log("The player earned 5 points.");
}
else if (alien_color4 == "red") {
    console.log("The player earned 15 points.");
}
let alien_color5 = "red";
if (alien_color5 == "red") {
    console.log("The player earned 15 points.");
}
else if (alien_color5 == "green") {
    console.log("The player earned 5 points.");
}
else if (alien_color5 == "yellow") {
    console.log("The player earned 10 points.");
}
/* 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the C.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder. */
let person_age = 32;
if (person_age <= 2) {
    console.log("Person is a baby.");
}
else if (person_age >= 2 && person_age <= 4) {
    console.log("Person is a toddler.");
}
else if (person_age >= 4 && person_age <= 13) {
    console.log("Person is a kid.");
}
else if (person_age >= 13 && person_age <= 20) {
    console.log("Person is a teenager.");
}
else if (person_age >= 20 && person_age <= 65) {
    console.log("Person is an adult.");
}
else if (person_age >= 65) {
    console.log("Person is an elder.");
}
/* 29. Favorite Fruit: Make a array of your favorite fruits,
and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
the if block should print a statement, such as You really like bananas!*/
let favoriteFruits = ["apple", "banana", "mango"];
for (let i = 0; i < favoriteFruits.length; i++)
    if (favoriteFruits[i] === "mango") {
        console.log("I really like mangoes"); //using for loop
    }
for (let i = 0; i < favoriteFruits.length; i++)
    if (favoriteFruits[i] === "banana") {
        console.log("I really like bananas");
    }
if (favoriteFruits.includes("strawberry")) {
    console.log("I really like strawberries"); // using include method
}
if (favoriteFruits.includes("apple")) {
    console.log("I really like apples");
}
if (favoriteFruits.includes("grapes")) {
    console.log("I really like grapes");
}
/* 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log in to a website.
Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
let users = ["Ahmad", "Ali", "Admin", "Asad", "Junaid"];
for (let i = 0; i < users.length; i++)
    if (users[i] === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else if (users[i] === "Ahmad") {
        console.log("Hello Ahmad, thank you for logging in again");
    }
    else if (users[i] === "Ali") {
        console.log("Hello Ali, thank you for logging in again.");
    }
    else if (users[i] === "Asad") {
        console.log("Hello Asad, thank you for logging in again.");
    }
    else if (users[i] === "Junaid") {
        console.log("Hello Junaid, thank you for logging in again.");
    }
/* 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
if (users.length == 0) {
    console.log("We need to find some users!");
}
users.pop();
users.pop();
users.pop();
users.pop();
users.pop();
console.log(users);
if (users.length == 0) {
    console.log("We need to find some users!");
}
/* 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will
need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
let current_users = ["Ahmad", "Iqra", "Ali", "Junaid", "Saqib"];
let new_users = ["Rehan", "Salman", "Ahmad", "Iqra", "Sultan"];
for (let i = 0; i < new_users.length; i++) {
    const newUser = new_users[i];
    const loweCaseNewUser = newUser.toLowerCase();
    if (current_users.includes(newUser)) {
        console.log(`${newUser} has already been used. Please enter a new username`);
    }
    else {
        console.log(`${newUser} is available`);
    }
}
/* 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line. */
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < Numbers.length; i++) {
    let number = Numbers[i];
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
/* 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
such as I really love pizza!*/
let favoritePizzas = [
    "Kebab stuffed Pizza",
    "Legend Ranch Pizza",
    "Creamy Tikka Pizza",
];
for (let i = 0; i < favoritePizzas.length; i++) {
    let pizza = favoritePizzas[i];
    console.log(pizza);
}
for (let i = 0; i < favoritePizzas.length; i++) {
    let pizza = favoritePizzas[i];
    console.log(`I like ${pizza}`);
}
console.log("I really love pizza!");
/* 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal,
such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet! */
let Animals = ["cat", "dog", "rabbit"];
for (let i = 0; i < Animals.length; i++) {
    const animal = Animals[i];
    console.log(animal);
}
for (let i = 0; i < Animals.length; i++) {
    const animal = Animals[i];
    console.log(`A ${animal} would make a great pet`);
}
console.log("Any of these animals would make a great pet!");
/* 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */
function make_shirt(size, text) {
    console.log(`The size of the shirt is ${size} and the message printed on it is: ${text}`);
}
make_shirt("Medium", "Never Give Up");
make_shirt("Large", "Pakistan Zindabad");
make_shirt("Extra Large", "Code like a pro");
