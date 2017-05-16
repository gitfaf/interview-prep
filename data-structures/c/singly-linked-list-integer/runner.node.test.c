#include <stdio.h>
#include <stddef.h>
#include "node.test.c"


int main () {
    printf("\n[START{running tests");
    test_1();
    test_2();
    test_3();
    test_append_node_1();
    test_5();
    test_6();
    test_append_1();
    test_append_2();
    printf("}END]\n");
    return 0;
}
