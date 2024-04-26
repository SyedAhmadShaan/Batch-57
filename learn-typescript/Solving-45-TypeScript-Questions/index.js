"use strict";
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
