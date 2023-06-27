#include <stdio.h> //preprocessor directive


int main(void){ //main function -Entry point

int n[5] = {1, 2, 3, 4, 5};

int numbers[5];
printf("Please enter 3 numbers\n");
scanf("%d", &numbers[0]);
scanf("%d", &numbers[1]);
scanf("%d", &numbers[2]);

printf("The value in index [0] is %d\n", numbers[0]);
printf("The value in index [1] is %d\n", numbers[1]);
printf("The value in index [2] is %d\n", numbers[2]);
    return 0;
}
