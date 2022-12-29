/*WHAT IS JAVASCRIPT?
JavaScript (take note of the spelling) is a scripting language that enables
you to create dynamically updating content, control multimedia, animate images,
create online games, log user behavior, validate form inputs before the data 
is sent to a server, etc. 
JavaScript is considered as one of the three foundational pillars running the web. 
The ECMA naming convention is what determines how the programming language is named.
eg. ECMA2016, ECMA2017, etc. 
You can build full web/mobile Apps, real-time networking apps, command line tools, 
and games with JavaScript. 

JavaScript was originally designed to work in browsers. Every browser has a 
JavaScript Engine. The JS engine in Firefox is called SpiderMonkey, and in google 
is called v8. 
A clever engineer in 2009, embedded google's v8 in a C++ program to enable the 
running of JS outside a browser.  He called it Node. 
Node - a C++ program that includes google's v8 engine to run JavaScript code. 
This allows JS to be used to build backend applications. Thus, you can either run 
JavaScript in the browser or in node. 
You can write script in the developer tools console.
*/

// VARIABLES - There are 3 main ways of declaring variables; var, let and const
var myName = 'Leonard';
let age = 28;
const email = 'odoi.leonard1@gmail.com';

// The preferred ways are "let" and "const"





// DATA TYPES - There are two main kinds of Data; Primitive and Reference Types
// Primitive Type are as follows:  

let myFirstName = 'Leo'; // String Literal
let myAge = 28; // Number
let isMale = true; //Boolean
let myLastNmae = undefined; 
let myHomeTown = null;


/* Reference Data Types are as follows: 
Objects
Arrays 
Functions*/


// This is an example of an object; Objects have key-value pairs. 
const person = {
    firstName: 'Leonard',
    lastName: 'Odoi',
    age: 29,
    hobbies: ['reading', 'chess', 'social media'], //an array within an object
    address: {
        street: '1214 Cypress tree',
        state: 'VA',
        city: 'Ashburn'
    } //an object within an object
}

//to log the object and it's properties to the console
console.log(person);

// to log the length of an array within the object
console.log(person.hobbies.length);

// to log the first index of the array in the object
console.log(person.hobbies[1]);

// to log a key of an object within the object
console.log(person.address.city);

// to update the properties of the object
person.email = 'leonard.odoi@gmail.com';
console.log(person.email)

console.log(person.address);

// to DE-STRUCTURE the object and create variables out of the keys
const { firstName, address: {city} } = person;
console.log(firstName);


// Creating objects within an array
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meet with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Learn JavaScript',
        isCompleted: false
    }
];
console.log(todos);

// Assuming you wanted to log the text of index[1] on the console
console.log(todos[1].text);


// Converting Objects to JSON Format
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);


// For Loop



//While Loop
