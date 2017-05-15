#include <assert.h>
#include "node.h"

/* create_empty_node */
void test_1 () {
    /* test that node can be created by create_empty_node and that it is empty */
    struct node * tmp = create_empty_node();
    assert(tmp != NULL);
    assert(tmp -> next == NULL);
    assert(tmp -> value == 0);
}

/* create_node */
void test_2 () {
    int value = 10;
    struct node * tmp = create_node(value);
    assert(tmp != NULL);
    assert(tmp -> next == NULL);
    assert(tmp -> value == value);
}

void test_3 () {
    /* this shouldn't let the compilation pass if uncommented. */
    // struct node * tmp = create_node();
    // assert(tmp != NULL);
    // assert(tmp -> next == NULL);
    // assert(tmp -> value == value);
}

/* append_node */

void test_4 () {
    int value = 10;
    struct node * tmp;
    struct node * root = create_node(value);
    assert(root != NULL);
    assert(root -> next == NULL);
    assert(root -> value == value);
    tmp = create_node(value * value);
    assert(tmp != NULL);
    assert(tmp -> next == NULL);
    assert(tmp -> value == value * value);
    append_node(root, tmp);
    assert(root -> next != NULL);
    assert(root -> next == tmp);
    assert(root -> next -> value == root -> value * root -> value);
}

/* to_array */

void test_5 () {
    int count = 4;
    int value = 10;
    int * array = NULL;
    int i = 0;
    struct node * root = create_node(value);
    root -> next = create_node(value * 2);
    root -> next -> next = create_node(value * 3);
    root -> next -> next -> next = create_node(value * 4);
    assert(array == NULL);
    array = to_array(root, 4);
    for(i = 0; i < count; i++) {
        assert(array[i] == root -> value * (i+1));
    }
    assert(array[0] == root -> value);
    assert(array[1] == root -> value * 2);
    assert(array[2] == root -> value * 3);
    assert(array[3] == root -> value * 4);
}


/* clone_node */
void test_6 () {
    int value = 10;
    struct node * root = create_node(value);
    struct node * tmp = create_node(value * 2);
    append_node(root, tmp);
    struct node * rootClone =  clone_node(root);
    assert(rootClone -> value == root -> value);
    assert(rootClone -> next == root -> next);
    assert(rootClone -> next -> value = root -> next -> value);
}
