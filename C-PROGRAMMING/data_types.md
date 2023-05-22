# DATA TYPES IN C
In C, data types are used to define the type of data that a variable can hold.
**Basic Data Types**: Integers and Floating point numbers, characters

## BASIC DATA TYPES
**Integers**: Integers represent whole numbers without any fractional part. C provides various integer data types with different storage sizes, including:
	- int** Used to store integers with a typical size of 4 bytes.
	- short: Used to store smaller integers with a typical size of 2 bytes.
	- long: Used to store larger integers with a typical size of 4 bytes or 8 bytes.
	- char: Used to store single characters, which are actually small integers.


**Floating-Point Numbers**: Floating-point data types are used to represent numbers with fractional parts. C provides two primary floating-point types:
	- float: Used to store single-precision floating-point numbers with a typical size of 4 bytes.
	- double: Used to store double-precision floating-point numbers with a typical size of 8 bytes.


## WHY UNSIGNED DATA TYPES MAY BE NECESSARY
1. Representing only non-negative values: If a variable or data entity should only hold non-negative values, using an unsigned data type ensures that negative values cannot be assigned or accidentally introduced. This can provide clarity and enforce constraints in your code.
2. Bit manipulation and bitwise operations: Unsigned data types are often used when performing bit manipulation or bitwise operations on binary representations of values. Since the sign bit is not present in unsigned types, bitwise operations can be performed without worrying about sign extension or unintended behavior.
3. Representing larger positive values: Unsigned data types allow for a larger positive range compared to their signed counterparts. For example, an unsigned int can represent values from 0 to UINT_MAX (the maximum value for an unsigned int), which is typically greater than the maximum positive value of a signed int.
4. Interfacing with external systems: Some external systems or hardware interfaces may specify that certain data should be represented as unsigned values. In such cases, using an unsigned data type ensures compatibility and proper interpretation of data.
5. Bit flags and flag-based operations: When using bit flags to represent multiple Boolean states or options, unsigned data types can be used to store and manipulate these flags efficiently using bitwise operations.

## FORMAT SPECIFIERS FOR DATATYPES
1. Integer Types:
	- %d or %i: Signed integer ().
	- %u: Unsigned integer (decimal).
	- %o: Unsigned integer (octal).
	- %x or %X: Unsigned integer (hexadecimal).
2. Floating-Point Types:
	- %f: Decimal floating-point number.
	- %e or %E: Scientific notation (exponential) floating-point number.
	- %g or %G: Compact decimal or scientific notation (based on value) floating-point number.
3. Character Types:
	- %c: Single character. 
	- %s: String of characters (null-terminated).
4. Pointer Type:
	- %p: Pointer value (memory address).
5. Other Types:
	- %lld or %llu: Long long integer (signed or unsigned).
	- %lf: Long double (decimal floating-point number).



## DERIVED DATA TYPES
- Arrays - Arrays allow you to store multiple values of the same type in a contiguous block of memory. You can define arrays of any data type, including integers, characters, or custom data types.
- Pointers - Helps us to know the exact memory location of a variable. Pointers are variables that store memory addresses. They allow you to work with memory directly and facilitate dynamic memory allocation and manipulation.
- Unions
- Structures - Structures (structs) are used to group multiple variables together under one name. They enable you to create custom data types by combining different types of data.
- 

## ENUMERATION DATA TYPES
Enums (enumerations) are used to define a set of named constant values. They allow you to create a list of values that can be assigned to variables.

## VOID
An empty data type which has no value

DATA TYPES
Data is stored inside of variables
```c
int age = 40; //integer data type

float

double gpa = 3.7;

char grade = 'A'; //this can only store a single character

char phrase [ ] = "Hyperspace Creative Lab" // this creates a string

```

 


## CHARACTER
char is used to specify a character
characters are internally stored as integers according to ASCII
single quotes are used to represent characters ' '
if you use %d instead of %c, an integer will be printed according to ASCII. 

```c
char character  = 'z'
printf("%c", character);
printf("%d", character); // this will print 122
```

## SIZE OF OPERATOR
This is used to determine the size of a data type. 
```c
int age  = 25;
double number;

printf("int size =  %zu", sizeof (age));
printf("double size = %zu", sizeof(number));
```

## TAKING INPUT FORM USERS
To take input from users in C programming, we use the scanf  function. 
```c
#include <stdio.h>

int main() {

int age;
double height;

printf("Enter the age: ");
scanf("%d", &age);

printf("Enter the height: ");
scanf("%lf", &height);

printf("Age = %d", age);
printf("Height = %.2lf", height);

return 0;
}
```
