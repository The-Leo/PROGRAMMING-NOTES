#  IF ELSE STATEMENTS IN C

In C programming, **"if-else"** statements are control structures used to make decisions based on certain conditions. They allow the program to execute different blocks of code depending on whether a given condition is true or false. 
**You would typically use an if-else statement when you want your program to make a decision and execute different blocks of code based on whether a certain condition is true or false**. Here are a few scenarios where if-else statements are commonly used:

1. **Conditionally executing code**: If you have a situation where you want to execute a certain block of code only if a specific condition is met, you can use an if-else statement. For example, checking if a number is positive or negative and performing different actions based on the result.
2. **Handling multiple conditions**: If you have multiple conditions that need to be checked, you can use if-else statements to handle each condition separately. This allows you to execute different code blocks depending on the outcome of each condition.
3. **Making mutually exclusive choices**: If you have a set of choices where only one of them should be executed, you can use if-else statements to handle these choices. The program will evaluate each condition in order, and only the code block associated with the first condition that is true will be executed.
4. **Providing fallback options**: If you have a primary condition that you want to check, but also want to provide a default or fallback option in case the condition is not met, an if-else statement can be used. The else part of the statement allows you to specify what should be done if the condition evaluates to false.

The syntax of an if - else statement is as follows: 
```c
if (condition){
// execute this block of code}
else {
// execute this one
```


## An if else statement that determines if a number is positive, negative or zero. 
```c
if (n>0) {
 //printf("n is positive");
}
else if (n = 0) {
 // printf("n is zero");
else {
 // printf("n is negative");
}
```


# An if-else statement that determines if one is eligible to vote

```c
#include <stdio.h> //preprocessor directive

/**
* A program that checks eligibility to vote
* Return: 0
*/

int main(){  //entry point of program
    int age;
    printf("Please enter your age: ");
    scanf("%d", &age);

    if(age>=18){
        printf("You are eligible to vote!");
    }
    else if(age<0){
        printf("Invalid Age: Please enter a number greater than zero");
    }
    else
    {
        printf("Sorry, you are not eligible to vote at this time");
    }
    return (0);
}
```

## Another way to write this program with a logical operator
```c
#include <stdio.h>

/**A program that checks eligibility to vote
*Return: 0
*/

int main(){
int age;
printf("Please enter your age: ");
scanf("%d", &age);

if(age >= 18 && age <= 120){ //Assuming a person above 120 cannot vote
    printf("You are eligible to vote!");
}
else if(age < 0){
    printf("Invalid age");
}
else{
printf("Sorry, you are not eligible to vote");
}
    return (0);
}
```