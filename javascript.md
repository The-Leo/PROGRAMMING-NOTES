# WHAT IS JAVASCRIPT?

**JavaScript** not **Javascript** (take note of the spelling) is a scripting language that enables
you to create dynamically updating content, control multimedia, animate images,
create online games, log user behavior, validate form inputs before the data 
is sent to a server, etc. 

JavaScript is considered one of the three foundational pillars running the web. 
The ECMA naming convention is what determines how the programming language is named.
eg. ECMA2016, ECMA2017, etc. 
You can build full web/mobile Apps, real-time networking apps, command line tools, 
and games with JavaScript. 

JavaScript was originally designed to work in browsers. Every browser has a 
JavaScript Engine. The JS engine in Firefox is called SpiderMonkey, and in Google 
is called v8. 

A clever engineer in 2009, embedded Google's v8 in a C++ program to enable the 
running of JS outside a browser.  He called it Node. 

**Node** - a C++ program that includes Google's v8 engine to run JavaScript code. 
This allows JS to be used to build backend applications. Thus, you can either run 
JavaScript in the browser or in --Node--. 
You can write a script in the developer tools console.

## VARIABLES
There are 3 main ways of declaring variables; var, let and const
```JavaScript
var myName = 'Leonard';
let age = 28;
const email = 'odoi.leonard1@gmail.com';
```
**The preferred ways are ```let``` and ```const```. ```var``` might give problems in the future**


## DATA TYPES
There are two main kinds of Data; 

### Primitive and Reference Types

### Primitive Type are as follows:  

```JavaScript
let myFirstName = 'Leo'; // String Literal
let myAge = 28; // Number
let isMale = true; //Boolean
let myLastName = undefined; 
let myHomeTown = null;
```

## String Concatenation
The first way of concatenating strings is by using the plus(+) sign
```
console.log("Hello," + " New York City");
```

### Template Strings
Template String - instead of using quotes, template strings use backticks
Use ${} in place of any variable
```
console.log(`My first name is ${myFirstName}. I am ${myAge}.`);
```

## String indexing
```JavaScript
const quote1 = "The future belongs to those who believe in the beauty of their dreams.";
console.log(quote1[4]);
```

### Alternatively, you can use the string's charAt() to index
```JavaScript
console.log(quote1.length);
console.log(quote1.charAt(4));
console.log(quote1.charAt(12));
console.log(quote1.charAt(70));
```

## Escaping special characters
You can use the backslash to escape special characters
```
console.log('I want to escape this \'. I\'m male')
// You don't have to memorize these special characters but here are a few / " ' 
```

```
// Quiz - Converting Celsius to Fahrenheit
const celsius = 30;
const fahrenheit = celsius * 1.8+32;
console.log(fahrenheit);
```

## Implicit Type Coercion
JavaScript is a loosely typed language. Basically, this means that when you’re 
writing JavaScript code, you do not need to specify data types. 
Instead, when your code is interpreted by the JavaScript engine it will automatically 
be converted into the "appropriate" data type. This is called implicit type coercion. 

```JavaScript
console.log('julia' + 1);
/* In this example, JavaScript takes the string "julia" and adds the number 1 to it 
resulting in the string "julia1". 
*/
```

## Strict Equality
In JavaScript, it’s better to use strict equality to see if numbers, 
strings, or booleans, etc. are identical in type and value without doing the 
type conversion first. To perform a strict comparison, simply add an additional 
equals sign = to the end of the == and != operators.
```JavaScript
console.log('1'===1); //returns false
console.log('1'==1); // returns true - type conversions occurs
```


## Reference Data Types are as follows: 
* Objects
* Arrays 
* Functions

```JavaScript
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
```

//to log the object and its properties to the console
```
console.log(person);
```

```
// to log the length of an array within the object
console.log(person.hobbies.length);
```

```
// to log the first index of the array in the object
console.log(person.hobbies[1]);
```
```
// to log a key of an object within the object
console.log(person.address.city);
```
```
// to update the properties of the object
person.email = 'leonard.odoi@gmail.com';
console.log(person.email)
```
```
console.log(person.address);
```

```
// to DE-STRUCTURE the object and create variables out of the keys
const { firstName, address: {city} } = person;
console.log(firstName);
```
```
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
```

```
// Assuming you wanted to log the text of index[1] on the console
console.log(todos[1].text);
```


```
// Converting Objects to JSON Format
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);
```

```
// ARRAYS - a data structure that we use to refer to a list of items
let selectedColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(selectedColors);
console.log(selectedColors[4]);
```

```
// You can push new items into the Array
selectedColors.push('cyan');
console.log(selectedColors);
```

```
// You can push new items to the beginning of the Array
selectedColors.unshift('magenta');
console.log(selectedColors);
```

```
// You can delete the last item in the Array by:
console.log(selectedColors.pop()); 
console.log(selectedColors);
```

```
// To check if an item is in the array
console.log(Array.isArray('yellow'));
```

```
// To know the index of an item
console.log(selectedColors.indexOf('indigo'));
```

```
// Different data types can be stored in an array though
const randomList = ['1', 'farm', true, 12, 'mango', 1, undefined, null];
console.log(randomList);
```


## FUNCTIONS
A function performs a task or calculates a value 

```
function greet() {
    console.log('Hello World!');
}
greet();
```

// function greet(parameter){
//     console.log('Hello' + parameter);
// }
// greet(argument);

// function shout(firstName){
//     console.log('Hey' + firstName);
// }  
// shout(leonard);


//ARITHMETIC OPERATORS
let x = 10;
let y = 3;

console.log(x+y); //addition
console.log(x-y); //subtraction
console.log(x*y); //multiplication
console.log(x/y); // division
console.log(x%y); //remainder of division
console.log(x**y); //exponentiation

//Increment Operators
console.log(++x);
console.log(x++);
console.log(x);


//Decrement Operators
console.log(x--);
console.log(x);


//ASSIGNMENT OPERATOR
z=10;
w=10;
a=10;
b=10;
c=10;
z += 5;
console.log(z);
console.log(z+=5);
console.log(z*=5);
console.log(w-=5);
console.log(a/=5);
console.log(b%=5);
console.log(c**=5);

//COMPARISON OPERATORS - the result of comparison operators is a boolean
d = 5;
console.log(d>0);
console.log(d>=0);
console.log(d<0);
console.log(d<=0);

//Strict Equality operators (Same Type and Value)
console.log(d === 5);
console.log(d !== 5);

console.log(1 === 1); // this will evaluate to true
console.log('1' === 1); // this will evaluate to false because they are different types

//Lose Equality Operator (only checks the value, after converting the other to the same type)
console.log(1==1);
console.log('1'==1); //this will stil evaluate to true

//TERNARY OPERATORS - This is a conditional operator. Assuming we wanted to set a customer to gold if their 
//point is greater than 100

let points = 90;
let typeCustomer = points > 100 ? 'gold' : 'silver';
console.log(typeCustomer);

//LOGICAL OPERATORS
//Logical AND (&&) - This returns true if both operands are true
console.log(true && true);

//A real world scenario of one were to apply for a loan. 
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

//Logical OR (||)
// This returns true if just one of the operands are true
let Income = true;
let CreditScore = false;
let eligibleLoan = Income || CreditScore;
console.log(eligibleLoan);

//NOT Operator - this negates a boolean
let applicationRefused = !eligibleForLoan;
console.log('eligible', eligibleForLoan);
console.log('application refused', applicationRefused);


// //CONTROL FLOW
// In JavaScript, there are two types of conditional statements;
// if ... else
// switch ... case

/*IF ELSE
Assuming we wanted to greet a user with 'good morning' or 'good evening' 
depending on the hour
if hour is between 6am and 12pm, good morning! 
if hour is between 12pm and 6pm, good evening!
otherwise; good evening
*/

/* if (condition){
    statement
}
else if (anotherCondition){
    statement
}
else if (yetAnotherCondition){ // we can have as many conditions as we want. There is no limitation! 
    statement
}
else
statement
*/

let hour = 20;
if(hour >= 6 && hour <= 12) {
    console.log('Good Morning!');
}
else if(hour >= 12 && hour <= 18){
    console.log('Good Afternoon!');
}
else {
    console.log('Good Evening');
}
