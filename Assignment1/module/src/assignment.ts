// Description: Create a function that takes a string and an optional boolean.

// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.


function formatString(input: string, toUpper?: boolean):string{
    if(toUpper || toUpper===undefined){
        return `${input.toUpperCase()}`
    }
   return `${input}`
}

const result1 = formatString("Hello");          // Output: "HELLO"
const result2= formatString("Hello", true);   // Output: "HELLO"
const resutl3 = formatString("Hello", false);  // Output: "hello"
// console.log(result1, result2, resutl3);

// Description: Create a function that filters an array
//  of objects by the rating property, returning only items with a rating of 4 or more.


type Input ={
    title:string;
    rating:number;
}

function filterByRating(items:Input[]): Input[]{
    const output = items.filter((item:Input)=> {
        if(item.rating>=4){
            return item;
        }
    })
    return output
    
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

const result = filterByRating(books); 
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
// console.log(result);

// Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.

type Person ={
    Name:string;
    Address:string;
    Hair:string;
    Eye:string;
    Color:string,
    Income:number;
    Expense:number;
    Hobbies:string;
    FamilyMembers:number,
    Job:"yes"| "no";
    Skills:{html:boolean;css:boolean,js:boolean};
    MaritalStatus:boolean;
    Friends:boolean;
}

const person:Person={
    Name:"Azad",
    Address:"Dhaka",
    Hair:"Black",
    Eye:"brown", 
    Color:"Brown",
    Income:12000,
    Expense:9000,
    Hobbies: "Reading Books",
    Job: "yes",
    Skills:{html:true, css:false, js:true},
    MaritalStatus:true,
    Friends:true,
    FamilyMembers:5

}
// console.log(person);


// Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.

// Instructions:

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.

interface Book{
    Name:string;
    pages:number;
    author:string;
    publish:boolean;
}

interface Magazine{
    name:string;
    pages:number;
    price:number;
    publish:boolean;
}

// unior type
type Documents = Book | Magazine;
// intersection type 

type IntersectedDocuments = Book & Magazine;
// Task 5: Function Type
// Objective: Write a function that reverses a string.

// Instructions:

// Write a function reverseString that:
// Takes a single string argument.
// Returns the string in reverse order.
// Example:
// Input: "hello"
// Output: "olleh"

function reverseString (input:string):string{
    const names: string[] = [];
    let finalOutput: string="";

    const splitString = input.split("");

    for(let i:number=splitString.length-1; i>=0; i--){
         names.push(splitString[i])
    }
    for(let i:number=0; i<names.length; i++){
         finalOutput +=  [names[i]]
    }

    return finalOutput;
    
}

const reversedString= reverseString("hello")
console.log(reversedString);


