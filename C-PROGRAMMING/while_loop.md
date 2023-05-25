# WHILE LOOP IN C

Loops are used to execute a block of code multiple times. 
A while loop in programming is a control flow statement that repeatedly executes a block of code as long as a specified condition is true. 
The syntax for a while loop typically includes the keyword **"while"**, followed by a *boolean expression* that defines the condition to be checked, and then a block of code inside curly braces { } that will be executed repeatedly as long as the condition is true. 
Once the condition becomes false, the loop will exit and the program will continue to execute the code that follows the loop.

Syntax
```c
while (condition) {
    //statements inside while
}
```


```c
#include <stdio.h>

int main() {
    // Write C code here
    while (1<5) {
        printf("while loop in C\n");
    }

    return 0;
}
```
This statement will be executed *infinitely* because the condition is true. 
This is called an *infinite while loop*. To avoid this, we need to make sure our condition becomes false at some point. 

```c
#include <stdio.h>

int main() {
    // Write C code here
    int count = 1;

    while (count<5) {
        printf("while loop in C\n");
        printf("Count = %d\n", count);
        count += 1;
}
    return 0;
}
```

Create a Multiplication Table
```c
int number;
printf("Enter the number: ");
scanf("%d", &number);

int count = 1;

while (count <= 10) {
    int product = number * count;
    printf("%d\n", product);
    count = count + 1;
}

```