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
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
// console.log(result);
// Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.
function concatenateArrays(...arrays) {
    return [].concat(...arrays);
}
// console.log(concatenateArrays([1, 2], [3, 4], [5])); 
// Create a Vehicle class with private make and year properties and a getInfo() method.
// Create a Car class extending Vehicle, adding a private model property and a getModel() method.
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`this vehicle is made by: ${this.make} in the year of: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        console.log(this.model);
        ;
    }
}
const car = new Car("bmw", 2012, "Bmw 7");
car.getModel();
car.getInfo();
// Description: Write a function that takes a string | number and returns:
// The length if it's a string
// The number multiplied by 2 if it's a number
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    if (typeof value === "number") {
        return value * 2;
    }
    return 0;
}
const finalvalue = processValue("asd");
