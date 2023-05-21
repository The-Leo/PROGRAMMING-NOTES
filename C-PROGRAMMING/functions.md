# FUNCTIONS IN C PROGRAMMING

## PREREQUISITE KNOWLEDGE
- Data Types (int, float, double, char, void)
- How to declare variables (data_type variable_name = value) 
- Basic Arithmetic Operators (+, -, *, /, %, <, >, **, )
- Control Structure (If else, while and for loops)
- Arrays
- Basic Debugging Techniques eg. How to use a debugger.

## TIPS
- You become good at writing functions when you write more functions. 
- Start with very simple functions and build gradually to writing more complex functions. 
- Eg, Simple - A function that greets "Hello Dorcas" "Hello Lily"
- Complex - A function that calculates the factorial of a certain number
- Broaden your Math Knowledge

# WHAT ARE FUNCTIONS?
In C programming, a function is a self-contained block of code that performs a specific task. 
A group of related statements that perform a specific task. 
They help us break code into smaller chunks
Functions are used to break down complex programs into smaller, more manageable pieces, and to modularize code for easier maintenance and reusability.

Eg, A function that calculates the area of various shapes, Triangle, Rectangle, Circle, etc, 
Instead of writing one huge block of code, we can break them down into functions. 



## A function is defined by its 
- name, 
- return type, 
- parameters, and 
- body. 



Syntax
```C
returnType functionName ( ) {
// function body
}
```
- **Return type** indicates the date type of the value that is returned by this function. (eg, int, float, char, double, void).
-  If a function does not return any value we use a void as the return type. 
- Function Name is the name of the function. (It must be a valid identifier)
- **Parameter List**: is a comma-separated list of input parameters to the function, each parameter consisting of a data type and a parameter name
- **Function Body** is the code block that defines the operations of the function.


## Naming Conventions
camelCase houseAddress
under_scores first_name
mixed1 - num1 num2 num3
Use descriptive Names!!!! 
Never separate Function names with spaces!!!
It's advisable not to start with a Numeral. 

## TYPES OF FUNCTIONS
1. User Defined Functions - Functions created by the user
2. Standard Library Functions - Pre-defined functions in C


COMMON EXAMPLES OF FUNCTIONS
``` C
#include <stdio.h>

int main( ) {
printf("Hello Leo");
return 0;
}
```

```
printf()
```

```
scanf()
```


## USER DEFINED FUNCTIONS
A SIMPLE GREET FUNCTION
``` C
void greet() {
	printf("Good Morning\n");
}
```
To call the Function:
```
	greet ( );
```

## FUNCTION PARAMETERS
A parameter is simply a value accepted by the function.
```C
returnType funcName (Parameters) {
...
}
```

## A FUNCTION WITH ONE PARAMETER
A FUNCTION THAT CALCULATES THE SQUARE OF A NUMBER
``` C
#include <stdio.h>

void squareNumber (int number) {
    int square = number * number;
    printf("The Square of %d is %d", number, square);
}

int main() {

squareNumber(6);
}
```


## A FUNCTION THAT TAKES TWO INTEGER PARAMETERS AND RETURNS THEIR SUM
```C
void addNumber(int number1, int number2) {
	int sum = number1 + number2;
	printf("The sum of %d and %d is %d", number1, number2, sum);
	}
```
	To call the function, 
```
	addNumber(number1, number2);
```

The name of the function is used to call it from other parts of the program, the return type specifies the data type of the value that the function will return (if any), the parameters (also called arguments) are variables that are passed into the function for it to operate on, and the body of the function is where the code that performs the task is written.

## RETURN STATEMENTS OF FUNCTIONS
A return statement in a function is used to return a value from the function back to the calling program. When a return statement is executed, it causes the function to immediately exit and return control to the calling program, along with the value specified in the return statement.

```C
int addNumber(int number1, int number2) {
	int sum = number1 + number2;
        return sum;
}
```

```C
int result = addNumber(8, 9);
printf("Result = %d", result);
```

After the return statement, the function ceases. The datatype of the return type should be the same as the datatype of the function call. 


# FUNCTION PROTOTYPE
- In C programming, a function prototype is a declaration of a function that specifies its name, return type, and parameter types, but not its actual code. 
- The purpose of a function  prototype is to allow the compiler to check for errors and generate code correctly. 

A function prototype typically appears at the beginning of a program, before the main() function, or in a header file. 

It allows the compiler to know about the existence of the function before it is actually called in the program.


```C
#include <stdio.h>

int addNumber(number1, number2); //this is the prototype

int main(){

int addNumber(number1, number2){
    int sum = number1 + number1;
    return sum;
}

int result = addNumber(6, 7);
printf("The Result is %d\n", result);

}
```


# Assignments: 
1. Write a function that calculates the area of a circle
2. Write a function that calculates the square root of a number
3. Write a function that calculates the factorial of the number 5
4. Write a function that checks which number is the greatest among 3 numbers

## WHY ARE FUNCTION PROTOTYPES IMPORTANT?
Function prototypes are important in C because they provide information to the compiler about the function before it is actually defined in the code. 

1. Helps the compiler catch errors: When a function is used before it is defined, the compiler may not have enough information to properly check the function call and may produce errors or warnings. However, when a function prototype is included, the compiler can check the function call against the prototype to ensure that the correct number and type of arguments are being used. This can help catch errors early in the development process.

2. Improves code organization: Including function prototypes at the top of the file can make the code more organized and easier to read. It provides a clear list of all the functions used in the code, along with their parameters and return types.

3. Enhances code maintainability: When a function prototype is included, any changes made to the function signature (e.g. parameter types or return type) must be reflected in the prototype as well. This helps ensure that all function calls in the code are consistent with the updated function definition, which can make the code easier to maintain and update over time.

4. Helps with large projects: For larger projects with many functions and files, function prototypes can help ensure that functions in different files are properly linked together. By including function prototypes at the top of each file, the code can be compiled and linked correctly even if the function definitions are located in separate files.
## Summary
Catch errors
Improve code organization
Enhance code maintainability
Help with larger projects 


# STANDARD LIBRARY FUNCTION
- In C programming, the __standard library functions__ are a set of functions that are part of the C standard library, which is a collection of pre-written functions that can be used in a C program without having to write them from scratch. 
- The C standard library provides a wide range of functions for performing common operations such as input/output, string manipulation, memory allocation, and mathematical calculations, among others.
- The standard library functions are specified by the C standard and are available on any platform that supports C programming. 
- They are included in the standard C header files such as <stdio.h>, <string.h>, <stdlib.h>, and so on.
```c
#include <math.h>

float result = sqrt(25);
printf("The Square root is %f", result);
```



<stdio.h> 
This header provides functions for 
- input and output, such as printf(), scanf(), getc(), putc(), puts(), gets()
- File handling functions - fopen(), fclose(),  

<string.h> 
This header provides functions for manipulating strings, such as strlen(), strcpy(), strcat(), and strcmp().


<math.h> 
This header provides mathematical functions, such as sqrt(), sin(), cos(), and tan().

<stdlib.h>
This header provides functions for dynamic memory allocation, such as malloc(), calloc(), and realloc(). It also includes functions for converting strings to numbers, such as atoi() and atof().
General utility


<ctype.h>
This header provides functions for classifying characters, such as isalpha(), isdigit(), and isspace().

<time.h> 
This header provides functions for working with dates and times, such as time(), ctime(), localtime(), and strftime().

<assert.h> 
This header provides a macro called assert() that can be used for debugging purposes.



## MAIN FUNCTION

Some Examples
A program in C that computes the result of a number raised to the power of the square root of a number

```c
#include <stdio.h>
#include <math.h>

int main() {
double base, 
double exponent, 
double result;
    
printf("Enter the base number: ");
scanf("%lf", &base);

printf("Enter the exponent (the number whose square root will be used): ");
scanf("%lf",  &exponent);

   
double sqrt_exponent = sqrt(exponent);

    result = pow(base, sqrt_exponent);

printf("%g raised to the power of %g is %g\n", base, sqrt_exponent, result);
return 0;

}
```


# C HEADER FILES
Header files are also known as include files. 

A header file is a file with extension .h which contains C function declarations and macro definitions to be shared between several source files. 

There are two types of header files: 
- the files that the programmer writes and 
- the files that comes with your compiler.

Header files are typically included in a C program using the **#include preprocessor** directive. 

```c
include <file> 
```
This form is used for system header files. 

```
include "file"
```
This form is used for header files of your own program.
