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

HOW TO INITIALIZE A STRING AT RUN TIME

GETS AND SCANF(ACCEPTING INPUT)
SCANF
```
char name[30];
printf("Please enter your name: ");
scanf("%s", name);
```
With the code above, if you enter a double word, the function will not recognize a white space. 
That is one draw back if the scanf function. 

To overcome this we can use the gets() function. 
GETS
```
char name[];
printf("Please enter your name: ");
gets(name);
printf("%s", name);

```

The draw back for this as well is a buffer overflow. 
It does not check the buffer size before printing the string. It goes ahead to print any number of characters no matter the buffer size indicated. And this can be risky since it can overwrite data in another memory location. 

This option will only print a specified number of characters due to the width indicator. 
```
int main(){
    char name[5];
    printf("Please enter your name: ");
    scanf("%3s", name);
    printf("%s\n", name);
    return 0;
}
```

To use the printf function to reduce the number of character, such is the way:
```
int main(){
    char name[30];
    printf("Please enter your name: ");
    scanf("%s", name);
    printf("%.3s\n", name);
    return 0;
}
```


PUTS
This prints a string with a new line. 
```
char name[30];
printf("please enter your name");
scanf("%s", name);
puts(name); // this will print string with a new line
```