#include "reduce.h"

int reduce_to_integer (int (*fn)(int accumulated, int current), int initialValue, int array[], int count) {
    int i = 0;
    int reduced = initialValue;
    for(i = 0; i < count; i++) {
        reduced = fn(reduced, array[i]);
    }
    return reduced;
}
