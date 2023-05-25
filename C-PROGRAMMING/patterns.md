# PRINT THESE PATTERNS USING LOOPS
## Pattern number 1
```
    *****
    *****
    *****
    *****
    *****
```
## For this pattern, we can use a nested for loop as follows
The trick is to print the outer loop the number of times there are rows. 
Then the inner loop handles the columns. 
For a block pattern as the one above, you will iterate the outer loop the same number of times as the inner loop. 
The Outer loop prints a new line. 

```c
#include <stdio.h> //preprocessor directive

    int main(){     //entry point
        char symbol = '*';
        int row;
        int column;

// nested for loop
        for(row=1; row<=5; row++){
            for(column=1; column<=5; column++){
                printf("%c", symbol);
            }
            printf("\n");
        }
        return 0;
    }
```


## Pattern number 2
```
    *
    **
    ***
    ****
    *****
```
To solve the pattern above, we can again use a nested for loop. 
There are 5 rows, meaning the outer loop will run 5 times. 
We can also see that the number or stars for each row is equal to the number of columns. Eg. For row 1, there is 1 column. For row 2 there are 2 columns, for row 3, there are 3 columns, etc. 
This means that for the inner loop, row = column. 

```c
include <stdio.h>

int main(){
    char symbol = '*';
    int row;
    int column;

    for(row=1; row<=5; row++){
        for(column=1; column=row; column++){
            printf("%c", symbol);
        }
        print("\n");
    }

    return 0; 
}
```

## Pattern number 3
```
    *****
    ****
    ***
    **
    *
```
To print out pattern with loops, it is important to figure out the relationship between the rows and columns. For the pattern above, _(column = n+1-row)_, where n is the number of iterations of the outer loop. 

```c
#include <stdio.h>

int main(){
    int row, column;
    char symbol = '*';

    for(row=1; row<=5; row++){
        for(column=1; column<=5+1-row; column++){
            printf("%c", symbol);
        }
        printf("\n");
    }
    return 0;
}
```

## Pattern Number 4

```
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
```

5.  *
    **
    ***
    ****
    *****
    ****
    ***
    **
    *


6.       *
        **
       ***
      ****
     *****


7.   *****
      ****
       ***
        **
         *


8.      *
       ***
      *****
     *******
    *********


9.  *********
     *******
      *****
       ***
        *


10.      *
        * *
       * * *
      * * * *
     * * * * *


11.  * * * * *
      * * * *
       * * *
        * *
         *


12.  * * * * *
      * * * *
       * * *
        * *
         *
         *
        * *
       * * *
      * * * *
     * * * * *


13.      *
        * *
       *   *
      *     *
     *********


14.  *********
      *     *
       *   *
        * *
         *


15.      *
        * *
       *   *
      *     *
     *       *
      *     *
       *   *
        * *
         *


16.           1
            1   1
          1   2   1
        1   3   3   1
      1   4   6   4   1
```