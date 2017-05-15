#include <stdio.h>
#include <stddef.h>
#include "node.test.c"


int main () {
    printf("\n[START{running tests");
    test_1();
    test_2();
    test_3();
    test_4();
    test_5();
    test_6();
    printf("}END]\n");
    return 0;
}
