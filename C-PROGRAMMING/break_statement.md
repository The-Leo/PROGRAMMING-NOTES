# BREAK STATEMENTS
In C programming, the break statement is used to exit or terminate the execution of a loop or a switch statement. When encountered within the body of a loop or switch, the break statement causes an immediate exit from the innermost enclosing loop or switch, and program execution resumes at the next statement after the loop or switch.

The break statement is commonly used in scenarios where you need to prematurely terminate a loop based on a certain condition. 


```c
int main(){
    int i;
    for(i=0; i<10; i++){
        printf("%d\n", i);
        if(i==6){
            {break;} //This break statement terminates the loop when the condition is met
        }
    }

    return 0;
}
```
It's worth noting that break only terminates the innermost loop or switch it is placed in. If there are nested loops, the break statement will only exit the loop in which it is specified, and the outer loops will continue executing unless they also encounter a break statement.