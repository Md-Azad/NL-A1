"use strict";
// Description: Create a function that takes a string and an optional boolean.
// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.
function formatString(input, toUpper) {
    if (toUpper || toUpper === undefined) {
        return `${input.toUpperCase()}`;
    }
    return `${input}`;
}
const result1 = formatString("Hello"); // Output: "HELLO"
const result2 = formatString("Hello", true); // Output: "HELLO"
const resutl3 = formatString("Hello", false); // Output: "hello"
function filterByRating(items) {
    const output = items.filter((item) => {
        if (item.rating >= 4) {
            return item;
        }
    });
    return output;
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
const result = filterByRating(books);
const person = {
    Name: "Azad",
    Address: "Dhaka",
    Hair: "Black",
    Eye: "brown",
    Color: "Brown",
    Income: 12000,
    Expense: 9000,
    Hobbies: "Reading Books",
    Job: "yes",
    Skills: { html: true, css: false, js: true },
    MaritalStatus: true,
    Friends: true,
    FamilyMembers: 5
};
// Task 5: Function Type
// Objective: Write a function that reverses a string.
// Instructions:
// Write a function reverseString that:
// Takes a single string argument.
// Returns the string in reverse order.
// Example:
// Input: "hello"
// Output: "olleh"
function reverseString(input) {
    const names = [];
    let finalOutput = "";
    const splitString = input.split("");
    for (let i = splitString.length - 1; i >= 0; i--) {
        names.push(splitString[i]);
    }
    for (let i = 0; i < names.length; i++) {
        finalOutput += [names[i]];
    }
    return finalOutput;
}
const reversedString = reverseString("hello");
console.log(reversedString);
