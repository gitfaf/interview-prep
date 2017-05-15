#ifndef NODE_H
#define NODE_H

struct node {
    int value;
    struct node * next;
};

struct node * create_empty_node ();
struct node * create_node (int value);
struct node * clone_node (struct node * clone_this);
struct node * clone_node (struct node * clone_this);
struct node * from_array (int * array, int count, int startIndex);

void append_node (struct node * root, struct node * toAppend);
void append (struct node * root, int value);
int * to_array (struct node * root, int count);

#endif // NODE_H
