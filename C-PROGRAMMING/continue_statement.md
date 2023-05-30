# CONTINUE STATEMENT

In C programming, the continue statement is used to skip the remaining code within the current iteration of a loop and move on to the next iteration. When encountered within the body of a loop, the continue statement causes the loop to immediately jump to the next iteration, ignoring the rest of the statements within the loop for the current iteration.

```C
#include <stdio.h>

int main(){
    int i;
    for(i=0; i<=5; i++){
        if(i==3){
            continue;
        }

        printf("%d", i);
    }
    return 0;
}
```

```c
#include <stdio.h>

int main(){
    int i = 10;
    while(i>=0){
        if(i==6){ 
            i--; // Decrement to prevent an infinite loop because i will remain 6
            continue; // skips the current iteration when i is 3
        }
        printf("%d", i);
        i--
    }
    return 0;
}