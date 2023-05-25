# PRINT THESE PATTERNS USING LOOPS

1. ```
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

2. ```
     *
    **
    ***
    ****
    *****
```

3.  *****
    ****
    ***
    **
    *


4.  1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5


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
