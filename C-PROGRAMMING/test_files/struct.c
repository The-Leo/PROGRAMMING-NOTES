#include <stdio.h>
#include <string.h>


//Structure declaration
struct Person {
    char name[50];
    int age;
    float height;
};

int main(){
//Variable structure declaration
    struct Person leo;

//Accessing and Modifying elements of the structure
    strcpy(leo.name, "Leonard Odoi");
    leo.age = 30;
    leo.height = 1.75;

    printf("%s\n", leo.name);
    printf("%d\n", leo.age);
    printf("%f\n", leo.height);

    return 0;
}