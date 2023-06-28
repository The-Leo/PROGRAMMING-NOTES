# ARRAYS 

## UNDERSTANDING ARRAYS
In C programming, an array is a collection of elements of the same type that are stored in contiguous memory locations. It is a fundamental data structure used to store and manipulate a fixed-size sequence of elements. 

## Arrays in C have the following characteristics:

1. **Fixed Size:** When you declare an array, you specify the number of elements it can hold, and this size remains fixed throughout the program execution.
2. **Contiguous Memory:** The elements of an array are stored in adjacent memory locations. This contiguous storage allows efficient and direct access to any element using the array's index.
3. **Zero-based Indexing:** The indexing of arrays in C starts from zero. The first element is accessed using index 0, the second with index 1, and so on.

## Arrays are defined using the following syntax:

```C
datatype arrayName[arraySize];
```
For example, to declare an integer array named "numbers" that can store 5 elements, you would write:

```
int numbers[5];
```


## Can the size of an Array be 0?
The declaration int ```a[0];``` is not valid in C. In C, the size of an array must be a positive integer. Declaring an array with a size of 0 is not allowed because it would mean that the array has no elements.

The size of an array determines the amount of memory allocated to store its elements, and having a size of 0 would result in an empty array that cannot hold any elements. It would be illogical and lead to undefined behavior if you try to access or manipulate elements of such an array.

To declare an array, you should specify a size greater than 0, indicating the number of elements the array can hold. For example:

```c
int a[5];  // Declares an integer array named 'a' with 5 elements.
```

## You cannot specify a variable as the size of an array
The size of an array must be a constant expression. This means that the size of an array cannot be specified using a variable. The size must be known at compile time and cannot change during the execution of the program.

For example, the following code is not valid:

```c
int size = 5;
int a[size];  // Invalid: size is a variable, not a constant expression.
```

To create an array with a variable size, you would typically use **dynamic memory allocation** functions, such as _malloc(_)_ or _calloc()_, which allow you to allocate memory for an array at runtime. Here's an example:

```c
int size = 5;
int* a = (int*)malloc(size * sizeof(int));
```

In this case, the size variable is used to determine the number of elements to allocate dynamically. However, remember that dynamic memory allocation requires explicit memory management, and you should free the allocated memory using free() when you're done using it:

```c
free(a);  // Don't forget to free the dynamically allocated memory.
```

Using dynamic memory allocation for arrays provides flexibility in adjusting the size at runtime, but it also adds the responsibility of managing memory explicitly.

