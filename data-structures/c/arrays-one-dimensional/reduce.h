#ifndef REDUCE_H
#define REDUCE_H

int reduce_to_integer(int (*fn)(int accumulated, int current), int initialValue, int array[], int count);
int sum_of_array(int *array, int count);
int product_of_array(int *array, int count);
int sum(int a, int b);
int product(int a, int b);
int sum_of_squares(int a, int b);

#endif // REDUCE_H
