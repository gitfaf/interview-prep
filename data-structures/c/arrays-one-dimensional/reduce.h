#ifndef REDUCE_H
#define REDUCE_H

int reduce_to_integer (int (*fn)(int accumulated, int current), int initialValue, int array[], int count);
#endif // REDUCE_H
