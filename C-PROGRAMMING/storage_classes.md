# STORAGE CLASSES OF VARIABLES
**Storage class** defines the **scope** (visibility) and **lifetime** of a variable within a C program. 

1. **auto**: The auto storage class is the default for local variables declared within a block or function. Variables declared with the auto storage class are automatically allocated and deallocated when the block or function in which they are defined is entered and exited, respectively. The auto keyword is rarely used explicitly since it is the default behavior.

```C
int age = 5; // is the same as:
auto int age = 5; //the auto class is automatically assigned
```

2. **register**: The register storage class is used to suggest to the compiler that a variable should be stored in a **CPU register for faster access**. However, the compiler has the final say in whether to allocate the variable in a register or in memory. The register keyword is rarely used in modern C programming since compilers are generally capable of optimizing register allocation on their own.
In most modern programming languages, including C and C++, the concept of "register variables" has been largely deprecated or removed. The "register" keyword was used in older versions of C and C++ to suggest to the compiler that a particular variable should be stored in a CPU register for faster access.

However, modern compilers are highly optimized and can automatically determine the most efficient way to store variables in registers or memory. As a result, the "register" keyword is no longer necessary or widely used. In fact, many modern compilers ignore the "register" keyword altogether.

If you're working with a recent version of C or C++, you don't need to explicitly declare a register variable. Instead, the compiler will make its own decisions about how to optimize variable storage based on the specific code and hardware.

If you still encounter legacy code that includes the "register" keyword, it is best to remove it, as it is unlikely to have any significant impact on performance and may even hinder the compiler's optimization process.

```C
register int variable_name;
printf("%u", &variable_name);
```

3. **static**: The static storage class is used to declare variables that __retain their values between function calls__. When a variable is declared as static within a function, it is allocated memory once and retains its value even after the function call ends. It is commonly used for variables that need to maintain their values across multiple function calls or variables with a long lifetime within a block.

```C
void someFunction(){  
static int count = 0; // static variable declaration and initialization
    count++;
    printf("Count: %d\n", count);
}
```

4. extern: The extern storage class is used to declare variables that are defined in another source file or module. When a variable is declared as extern, it means that the variable is defined in another file, and the current file should use the externally defined variable. The extern keyword is typically used to provide access to global variables or functions across multiple files. 

```C
extern int month;
```
