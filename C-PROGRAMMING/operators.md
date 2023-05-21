# OPERATORS IN C
Operators are special symbols that are used to perform operations on values and variables. 
1. Arithmetic Operators
2. Relational Operators
3. Logical Operators
4. Assignment Operators
5. Bitwise Operators
6. Miscellaneous Operators

Arithmetic Operators
``` C
Addition +
Subtraction -
Multiplication *
Division /
% Remainder
Increment ++ (increment by 1)
Decrement -- (decrement by 1)
```



## Addition Operator 
```C
#include <stdio.h>

int main() {
    // Write C code here
    //printf("Hello world");

int x = 12;
int result = x+8;

printf("%d", result);

    return 0;
}
```

We can also add floating point numbers. We can add integers and floating point numbers. When we add integers and floating point numbers, the result is converted to a floating point number. 

Division Operator
Division operator works a little different. When you declare the data type as an integer, only the quotient of a division operator will be returned. 
eg. 

```C
#include <stdio.h>
int main() {

int x = 12;
int result = x/8;
printf("%d", result);

return 0
}
```

This piece of code will return 1 but that is not the exact result. To get the exact result, we have to use the double data type. 

```C
#include <stdio.h>
int main() {

double x = 12.00;
double result = x/8.00;

printf("%.2lf", result);

return 0;
}
```


## Remainder Operator %
The remainder operator is also called modulus operator. It only works with integer data types. If you use it with a floating point number, you will get an error. 


Increment Operator ++


Decrement Operator --



# RELATIONAL OPERATORS

## Assignment Operator
The assignment operator is represented by the = symbol in C. It is used to assign a value to a variable. 
```C
int x;
x = 5;
```

The assignment operator can also be used in combination with other operators to modify the value of a variable. For example:
```C
int x = 5;

x += 3;

// This simply means 
x = x + 3;



x *= 3 //This also means
x = x * 3;

result *= 3
result = result * 3;

```
It's important to note that the assignment operator always works from right to left. That is, the value on the right-hand side of the operator is evaluated first, and then assigned to the variable on the left-hand side.

```C
x += 1
x = x+1

x -= 1
x = x-1

x *= 1
x = x *1

x /= 1
x=x/1
```



## TYPE CONVERSION IN C - IMPLICIT AND EXPLICIT TYPE CONVERSION
Implicit Type Conversion
Adding int and char
When you try to add int and char data types, the char is converted to an ASCII value and an int is returned. 

```C
int a = 5;
char b = "4";

int result = a+b;
printf("%d", result);
```
In this piece of code, 4, which is a character will be converted to ASCII value ... and added to 5. 

```
int a = 5;
double b = 4.54;

int result = a+b;
printf("%d", result);
```
The result of this piece of code will be an int because it is stored in an int variable, result. 

```C
int a = 5;
double b = 4.54;

double result = a+b;
printf("%lf", result);
```
In this piece of code, the int data type is converted to double. This is because the data type conversion occurs according to hierarchy. 
```
long double
double 
float
long
int
short
char
```
Between char and int, the data type is converted to int. And between int and double, the data type is converted to double. 

However, it is also possible for a higher data type to be demoted to a lower data type depending on the format specifier. 
```C
double b = 4.54;

printf("%d", b);
```
During the conversion from the higher data type to the lower data type, there might be some loss of data. Thus, we should be careful doing this type of conversion. 

## Explicit Type Conversion
We can force the conversion of a specific data type. 
```C
int a = 5;
double b = 4.54;

double result = a+(int)b;
printf("%lf", result);
```
This will change the data type of b to int before adding to a. So the result will be 9.000000 because the result is %lf. 

Division
If you divide two integers, you will get an integer even if you specify the format as a double. You must use explicit type conversion to convert one of the variables to double. 
```C
int a = 5;
int b = 4;

double result = (double)a / b;
printf("%lf", result);
```

## BOOLEAN AND COMPARISON OPERATORS
Boolean is a data type that can store either true or false
To create a boolean data type is C, we first have to import <stdbool.h>
To print a boolean, we use the format specifier "%d"
```C
#include  <stdio.h>
#include <stdbool.h>

int main() {
    bool value1 = true;
    bool value2 = false;

    printf("%d", value1);
    printf("%d", value2);

return 0;
}
```
C is a case sensitive language. You cannot say True. It must be a small case true. 

true evaluates to 1
false evaluates to 0


## COMPARISON OPERATORS
Greater than > and Less than <
```C
#include  <stdio.h>
#include <stdbool.h>

int main() {
    bool value1 = (12 > 9);
    bool value2 = (12 < 9);

    printf("%d", value1);
    printf("%d", value2);

return 0;
}
```

## Equal to and Not equal to operator
```C
#include  <stdio.h>
#include <stdbool.h>


int main() {
    bool value1 = (12 == 12);
    bool value2 = (12 != 9);

    printf("%d", value1);
    printf("%d", value2);

return 0;
}
```

## Greater than or equal to and Less than or equal to 
```C
#include  <stdio.h>
#include <stdbool.h>

int main() {
    bool value1 = (12 >= 12); 1
    bool value2 = (12 <= 9); 0

    printf("%d", value1);
    printf("%d", value2);

return 0;
}
```

## The comparison operators can also be used to compare variables. 
```

```




## LOGICAL OPERATORS
## AND OPERATOR &&.      &&  || !
The operator returns true only if both expressions are true. 
```C
#include  <stdio.h>
#include <stdbool.h>

int main() {
    int age = 31;
    double height = 5.91;

    bool acceptedCandidate = (age>30) && (height > 5);

    printf("%d", acceptedCandidate);

    return 0;
}
```


## OR OPERATOR ||
This returns true is only one of the expressions are true. 
```C
#include  <stdio.h>
#include <stdbool.h>

int main() {
    int age = 25;
    double height = 5.91;

    bool acceptedCandidate = (age>30) || (height > 5);

    printf("%d", acceptedCandidate);

    return 0;
}
```

## NOT OPERATOR !
This is used with only one boolean expression. It returns the opposite of the boolean. 

```C
int age = 31;
bool result = !(age > 40);
```
This returns true since the expression is false. 

## Why learn about Booleans?
They are really useful. Supposed you want to check if someone can vote or not or if someone is eligible for a loan. 



## BITWISE OPERATORS
In C, bitwise operators are used to perform operations on individual bits of integer types. They manipulate the binary representation of the numbers at the bit level. C provides several bitwise operators:

1. Bitwise AND (&): Performs a bitwise AND operation on each pair of corresponding bits. The result is 1 only if both bits are 1; otherwise, the result is 0.
2. Bitwise OR (|): Performs a bitwise OR operation on each pair of corresponding bits. The result is 1 if at least one of the bits is 1; otherwise, the result is 0.
3. Bitwise XOR (^): Performs a bitwise exclusive OR (XOR) operation on each pair of corresponding bits. The result is 1 if the bits are different; otherwise, the result is 0.
4. Bitwise NOT (~): Performs a bitwise complement (NOT) operation on each bit. It flips each bit from 0 to 1 and from 1 to 0.
5. Left Shift (<<): Shifts the bits of the left-hand operand to the left by a specified number of positions. The vacant positions are filled with zeros.
6. Right Shift (>>): Shifts the bits of the left-hand operand to the right by a specified number of positions. The vacant positions are filled with zeros (logical right shift) or the sign bit is copied (arithmetic right shift) for signed types.



MISCELLENEOUS OPERATORS
sizeof() 

int martin = 6;
sizeof(int);
4 bytes

