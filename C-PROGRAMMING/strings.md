# WORKING WITH STRINGS IN C
A string is an array of characters stored in consecutive memory locations. The ending characters is  always the null character. ```'\0'```. It acts as a string terminator. The compiler defines this character on its own. 

In C, strings are represented as arrays of characters, terminated by a null character ('\0'). C does not have a built-in string data type like some other programming languages, so strings are typically manipulated as character arrays using various library functions. Here are some common operations and techniques for working with strings in C:

**Declaration and Initialization:** Strings are declared as character arrays, and you can initialize them in various ways:

```c
char str1[] = "Leonard"; //Initializing Using a string literal

char str2[10]; //Declaration of an empty string with a determined size

strcpy(str3, "Odoi"); // Assigning a value using strcpy() function. 

```

**String Input:** You can read strings from the user using scanf() or fgets() functions:
```c
char name[50];
printf("Please enter your name: ");
scanf("%s", name); // This reads a string without white spaces
fgets(name, sizeof(name), stdin);

```

