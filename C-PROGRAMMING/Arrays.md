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

