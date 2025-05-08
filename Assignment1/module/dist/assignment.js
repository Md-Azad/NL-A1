"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// ---------------
function concatenateArrays(...arrays) {
    return [].concat(...arrays);
}
// -----------
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `this vehicle is made by: ${this.make} in the year of: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return this.model;
        ;
    }
}
const car = new Car("bmw", 2012, "Bmw 7");
car.getModel();
car.getInfo();
// ------------
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    if (typeof value === "number") {
        return value * 2;
    }
}
processValue("asd");
function getMostExpensiveProduct(products) {
    if (products.length !== 0) {
        const highestPrice = products.reduce((prev, cur) => {
            if (prev.price > cur.price) {
                return prev;
            }
            return cur;
        });
        return highestPrice;
    }
    return null;
}
const products = [
    { name: "Pen", price: 100 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
getMostExpensiveProduct(products);
// -----------
var Day;
(function (Day) {
    Day["Monday"] = "Weekday";
    Day["Tuesday"] = "Weekday";
    Day["Wednesday"] = "Weekday";
    Day["Thursday"] = "Weekday";
    Day["Friday"] = "Weekday";
    Day["Saturday"] = "Weekend";
    Day["Sunday"] = "Weekend";
})(Day || (Day = {}));
function getDayType(day) {
    return day;
}
// ------------
function squareAsynce(value) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (value > 1) {
                setTimeout(() => {
                    resolve(value * value);
                }, 1000);
            }
            else {
                reject("Error: Negative number not allowed");
            }
        });
    });
}
squareAsynce(-5).then(console.log).catch(console.error);
