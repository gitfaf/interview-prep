#include "reduce.h"

int reduce_to_integer(int (*fn)(int accumulated, int current), int initialValue, int array[], int count)
{
    int i = 0;
    int reduced = initialValue;
    for (i = 0; i < count; i++)
    {
        reduced = fn(reduced, array[i]);
    }
    return reduced;
}

int sum_of_array(int *array, int count)
{
    return reduce_to_integer(sum, 0, array, count);
}

int product_of_array(int *array, int count)
{
    return reduce_to_integer(product, 1, array, count);
}

int sum(int a, int b)
{
    return a + b;
}

int product(int a, int b)
{
    return a * b;
}

int sum_of_squares(int a, int b)
{
    return a * a + b * b;
}
