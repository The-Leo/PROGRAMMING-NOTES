#include <stdio.h>
#include <string.h>

struct Date{
    int day;
    int month;
    int year;
};

struct Employee{
    int id;
    char name[50];
    struct Date DOB;
};

int main(){
    struct Employee leo;

    strcpy(leo.name, "Leonard Odoi");
    leo.id = 101;
    leo.DOB.day = 17;
    leo.DOB.month = 7;
    leo.DOB.year = 1995;

    printf("Name: %s\n", leo.name);
    
    printf("ID: %d\n", leo.id);
    printf("DOB: %d-%d-%d\n", leo.DOB.day, leo.DOB.month, leo.DOB.year);


    return 0;
}