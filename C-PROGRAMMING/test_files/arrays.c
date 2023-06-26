#include <stdio.h> //preprocessor directive


int main(void){ //main function -Entry point

int i, j;
int n[5]; //array declaration

for(i=0; i<5; i++){
    n[i]=i+100; //Array initialization
}

for(j=0; j<5; j++){
    printf("Element[%d] = %d\n" ,j ,n[j]); //Accessing the array
}

    return 0;
}