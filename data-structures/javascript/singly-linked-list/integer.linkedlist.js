'use strict';

const Node = require('./integer.linkedlist.node');

class LinkedList {
  constructor() {
    this.root = NULL;
  }
  createList (firstValue) {
    this.root = new Node(firstValue);
    return this.root;
  }
  append (value) {
    if(this.isEmpty()) {
      return this.createList(value);
    }
    var node = new Node(value);
    var temp = this.root;
    while(temp.next !== NULL) {
      temp = temp.next;
    }
    temp.next = node;
  }
  getValues () {
    var values = [];
    var current = this.root;
    while(current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
  getRoot () {
    return this.root;
  }
  isEmpty () {
    return this.root === NULL;
  }
}

module.exports = LinkedList;
