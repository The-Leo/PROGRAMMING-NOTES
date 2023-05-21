# INTRODUCTION TO C PROGRAMMING

## WHY C PROGRAMMING IS AWESOME! 

* 500,000 lines of C code powers NASA's Mars curiosity rover. 
* It is the coding language of choice for kernel development. 
* Writing code in C tells you how a computer really works
* You have to manage your memory and allocate it 
* You can appreciate higher level languages like python, Javascript and C#
* It is in high job demand
* C code is portable and efficient. It's ideal for applications which require high 
performance and low memory overhead
* C handles the burden of running anywhere


## WHO INVENTED C?
The C programming language was developed by Dennis Ritchie at Bell Laboratories in the early 1970s. 
Along with Ken Thompson, Ritchie was also one of the co-creators of the Unix operating system, 
which was developed at Bell Labs. The development of C was closely tied to the development of Unix, 
as C was used to implement much of the operating system. 
C quickly became a popular language for system programming and remains widely used today.



### Who are Dennis Ritchie, Brian Kernighan and Linus Torvalds
**Dennis Ritchie**, **Brian Kernighan**, and **Linus Torvalds** are all computer scientists who have made significant contributions to the field of computer science.

__Dennis Ritchie__ was an American computer scientist who is best known for creating the C programming language and for his work on the Unix operating system. 
Ritchie received numerous awards for his work, including the Turing Award in 1983, 
which is considered the highest honor in computer science.

__Brian Kernighan__ is a Canadian computer scientist who has made important contributions to the development of several programming languages, including C and Unix.
 Kernighan co-authored several influential books on computer programming, 
 including "The C Programming Language" and "The Unix Programming Environment."

__Linus Torvalds__ is a Finnish-American software engineer who is best known for 
creating the Linux kernel, which is the core component of the Linux operating system. 
Torvalds released the first version of the Linux kernel in 1991, and the project has since grown into a large and active open-source community. 
Torvalds has received numerous awards for his work, including the Millennium Technology Prize in 2012.


## What happens when you type gcc main.c
**GNU's Compiler Collection** 
**GNU's Not Unix**
When you type gcc main.c in the command line, the gcc command invokes the GNU Compiler Collection 
to compile the source code in main.c file and produce an executable program.

1. The gcc command looks for the file main.c in the current directory.
2. If main.c is found, gcc reads the contents of the file and checks it for syntax errors.
3. If there are no syntax errors, gcc compiles the code into an object file (which has a .o file extension). 
This involves translating the source code into machine code that can be executed by the computer.
4. If there are multiple source files, gcc will compile each file into a separate object file.
5. Finally, gcc links the object files together to create an executable program. 
This involves resolving any references between the different object files and producing a single 
file that can be executed.
Once the compilation and linking process is complete, you should see an executable file 
in your current directory (usually named a.out by default). 
You can run this executable by typing ./a.out in the command line. 


## What is an Entry Point?
**An entry point** is a specific location in a program's code where the operating system starts 
executing the program. It is the first instruction that is executed when a program is run, 
and it is typically specified in the program's header file or executable file.

In C and C++ programs, the entry point is typically the main() function. 
When you run a C or C++ program, the operating system first loads the program into memory 
and then jumps to the main() function to start executing the program's code.

In other programming languages, such as Java or Python, the entry point may be specified differently. 
For example, in Java, the entry point is the main() method of the class specified on the 
command line. 
In Python, the entry point is the first statement in the main module.

The entry point is a critical part of any program, as it determines where execution begins 
and how the program interacts with the operating system and other programs.



## What is main?
In C and C++, main is a special function that serves as the entry point of a program. It is the first function to be executed when a C or C++ program is run, and it is where program execution begins. The main function has a specific signature and syntax, and it typically takes no arguments or accepts two arguments: int argc, char* argv[].

The main function is where you typically define the actions that your program will perform. For example, you might use main to initialize program variables, read input from the user or a file, perform some computation or processing, and then write output to the console or a file. Once the main function completes its execution, the program terminates and returns control to the operating system.

Here's an example of a simple main function in C that prints a message to the console:

### A SIMPLE C PROGRAM
Any file you create in C must have an extension of .c
```C
#include <stdio.h>

int main() {
printf("Hello, world!\n"); 
return 0;
}
```


## WHAT IS COMPILATION?

* To compile a file type

```gcc <file_name.c>```

* To test
```./a.out```
Before this happens, there are several steps in between. 

There are 4 processes in the compilation of C files
1. PRE-PROCESSING
```gcc -E <file_name> -o hello.e```
This file is a preprocessed file. This REMOVES COMMENTS, INCLUDES HEADER FILES, REPLACES MACRO NAME WITH CODE

2. COMPILATION
```gcc -S <file_name> -o test.s```
Generates mnemonic code

3. ASSEMBLY
```gcc -c <file_name> -o test.o```
Converts to binary code


4. LINKING
```gcc <file_name> -o test.exe```

## printf( );
You can print out a number with a format specifier
```printf("%d", 500);```

```printf("My favorite %s is %d", "Number", 500)```



## How to print text using printf, puts and putchar
In C, there are several ways to print text to the console, including printf, puts, and putchar. Here's how to use each of these functions:

1. **printf**: The printf function is a versatile function that can be used to print formatted text to the console. It takes a format string as its first argument, followed by a comma-separated list of values that correspond to the format specifiers in the format string. Here's an example:

```C
#include <stdio.h> 
int main() {
     int x = 42;
     printf("The value of x is %d\n", x);
     return 0; 
}
```
In this example, the %d format specifier indicates that an integer value should be printed. The value of x is substituted for the %d specifier in the format string, and the resulting string is printed to the console.

2. **puts**: The puts function is a simple function that prints a string to the console followed by a newline character. Here's an example:

```C
#include <stdio.h>
 int main() {
     puts("Hello, world!");
     return 0; }
```

In this example, the string "Hello, world!" is printed to the console followed by a newline character.

3. **putchar**: The putchar function is a function that prints a single character to the console. Here's an example:

```C
#include <stdio.h>
 int main() {
     putchar('H');
     putchar('i');
     putchar('\n');
     return 0; }
```



## What is the default program name when compiling with gcc? 

When compiling a C program with GCC using the default options, the resulting executable file is named a.out. This is because the -o option, which specifies the name of the output file, is not specified on the command line.

For example, if you compile a program called myprogram.c with the following command:
```gcc myprogram.c```
The resulting executable file will be named a.out. You can then run the program by typing ./a.out in the command line.

If you want to specify a different name for the executable file, you can use the -o option followed by the desired name. For example:
```gcc -o myprogram myprogram.c```
This will compile myprogram.c and create an executable file named myprogram. You can then run the program by typing ./myprogram in the command line.



## Betty Style
To check your C code against the Linux kernel coding style, you can use a tool called betty-style. 
betty-style is a script that checks your code for compliance with the Linux kernel coding style and provides suggestions for improvement.

To use betty-style, you need to install it on your system first. You can download the script from the official repository:

[https://github.com/holbertonschool/Betty.git](https://github.com/holbertonschool/Betty.git)

Once you have downloaded the betty-style script, you can use it to check your C code by running the following command:
```betty file.c```

Replace *file.c* with the name of your C source file. The betty-style script will output any style violations it finds in your code, along with suggestions for how to fix them.

Note that betty-style checks only for coding style issues and does not check for syntax errors or other types of programming errors. To check for those issues, you can use other tools like gcc or a linter like clang-format.

## WHAT DOES EXIT DO?
It ends the program


## HOW DOES THE MAIN FUNCTION INFLUENCE THE RETURN VALUE OF A PROGRAM? 

The main function in a program is a special function that serves as the entry point of execution. Its return value can influence the overall return value of the program. The return value of the main function typically indicates the success or failure of the program's execution.
1. In C and C++:
	- If the main function executes without any errors, returning 0 is a convention to indicate successful program execution.
	- Returning a non-zero value (usually a positive integer) from main typically signifies an error or abnormal termination of the program. The specific non-zero value can provide additional information about the error or the program's state.
	- 
- In summary, by convention, returning 0 from the main function indicates success, while a non-zero value suggests an error or abnormal termination. 
- However, the specific interpretation of return values may vary depending on the programming language, development environment, or specific conventions followed within a project. It's essential to consult the documentation or guidelines specific to your programming language or project to understand the expected behavior of the main function's return value.
