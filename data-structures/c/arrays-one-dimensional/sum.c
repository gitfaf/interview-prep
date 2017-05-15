#include <stdio.h>
#include "reduce.h"

int sum (int a, int b) {
    return a + b;
}
int product (int a, int b) {
    return a * b;
}
int sum_of_squares (int a, int b) {
    return a * a + b * b;
}

int main () {
    int array [] = { 1, 2, 3, 4, 5 };
    int count = 5;
    printf("\n~Begin~\n");
    printf("Reduce to integer:\n");
    printf("sum: reduce_to_integer(sum, 0, array, count) = %d\n", reduce_to_integer(sum, 0, array, count));
    printf("sum: reduce_to_integer(sum, -15, array, count) = %d\n", reduce_to_integer(sum, -15, array, count));
    printf("product: reduce_to_integer(product, 0, array, count) = %d\n", reduce_to_integer(product, 0, array, count));
    printf("product: reduce_to_integer(product, 1, array, count) = %d\n", reduce_to_integer(product, 1, array, count));
    printf("sum_of_squares: reduce_to_integer(sum_of_squares, 1, array, count) = %d\n", reduce_to_integer(sum_of_squares, 0, array, count));
    printf("~END~\n");
    return 0;
}
