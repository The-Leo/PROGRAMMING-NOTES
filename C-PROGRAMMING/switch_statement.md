# SWITCH STATEMENTS IN C
In C programming, a **switch statement** is a control flow statement that allows you to select one of several code blocks to execute based on the value of a specific expression or variable. 
It provides an alternative to using multiple if-else statements when you have a series of conditions to evaluate.

## The General syntax of a switch statement is as follows:
```C
switch (expression) {
    case constant1:
        // Code block executed when expression equals constant1
        break;
    case constant2:
        // Code block executed when expression equals constant2
        break;
    case constant3:
        // Code block executed when expression equals constant3
        break;
    // ...
    default:
        // Code block executed when none of the above cases match
        break;
}
```


## A switch statement that gives messages to students based on their grades
```c
#include <stdio.h>

/** A Switch statement program that gives messages to students based on their grade
*Return: 0
*/

int main(){

    char grade;
    printf("Please enter your grade: ");
    scanf("%c", &grade);

    switch(grade){
        case 'A':
        printf("Excellent");
        break;

        case 'B':
        printf("Very Good");
        break;

        case 'C':
        printf("Good");
        break;

        case 'D':
        printf("Fair");
        break;

        default: 
        printf("Invalid Grade");
        break;
    }

    return (0);
}
```

## The break Statement
The break statement is used in the switch statement to terminate the execution of the switch block once a matching case has been found and executed.

**Without the break statement, the code execution would continue to the next case**, and all following cases, regardless of whether they match or not. This could lead to unintended behavior, such as executing code in the wrong case or multiple times.
The break statement is used to exit the switch statement once a match is found. This ensures that only the code associated with the matching case is executed and no other cases are executed by mistake.

It's also worth noting that break also works as a fall through mechanism, where if you don't want to break the execution after a match, you can skip the break statement, and the execution will continue to the next case statement. 


## A Switch Statement with Multiple Cases

### Write a code to determine if it is a Weekday or weekend

```c
int day;
printf("Input a number from 1 to 7");
scanf("%d", &day);

switch(day) {
	case 1:
	case 7:
		printf("Weekend");
		break;
	case 2:
	case 3:
	case 4:
	case 5: 
	case 6:
		printf("Weekday");
	break;
	default: 
	printf("Invalid Number");
}
```


## A switch Statement to create a simple calculator
```c
#include <stdio.h>

int main() {

  char operator;
  printf("Choose an operator ['+', '-', '*', '/']: ");
  scanf("%c", &operator);
  
  double num1, num2;
  
  printf("Enter first number: ");
  scanf("%lf", &num1);
  
  printf("Enter second number: ");
  scanf("%lf", &num2);
  
  double result;

  switch(operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '*':
      result = num1 * num2;
      break;

    default:
      printf("Invalid Operator");
  }
  
  printf("%.2lf", result);

return 0;
}
```