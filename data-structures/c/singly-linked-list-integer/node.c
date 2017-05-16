#include <stdlib.h>
#include <stddef.h>
#include "node.h"

struct node * create_empty_node () {
    struct node * tmp = NULL;
    tmp = (struct node *) malloc(sizeof(struct node));
    tmp -> next = NULL;
    tmp -> value = 0;
    return tmp;
}

struct node * create_node (int value) {
    struct node * tmp = create_empty_node();
    tmp -> value = value;
    return tmp;
}

struct node * clone_node (struct node * clone_this) {
    struct node * tmp = create_empty_node();
    tmp -> value = clone_this -> value;
    tmp -> next = clone_this -> next;
    return tmp;
}

void append_node (struct node * root, struct node * toAppend) {
    if(root && toAppend) {
        struct node * tmp = root;
        while(tmp -> next) {
            tmp = tmp -> next;
        }
        tmp -> next = toAppend;
    }
}

void append (struct node * root, int value) {
    if(root) {
        struct node * tmp = create_node(value);
        append_node(root, tmp);
    }
}

int * to_array (struct node * root, int count) {
    int * array = (int *) malloc(sizeof(int) * count);
    int i = 0;
    struct node * first = root;
    while(first && count--) {
        array[i++] = first -> value;
        first = first -> next;
    }
    return array;
}

struct node * from_array (int * array, int count, int startIndex) {
    int i = 0;
    struct node * root = NULL;
    struct node * tmp = root;
    for(i = startIndex; i < count; i++) {
        append_node(root, create_node(array[i]));
    }
    return root;
}
