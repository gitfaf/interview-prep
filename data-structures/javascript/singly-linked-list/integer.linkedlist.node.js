'use strict';

class Node {
  constructor(value) {
    if(typeof value !== typeof 1) {
      throw new TypeError('Only integers are accepted.');
    }
    this.value = value;
    this.next = NULL;
  }
}

module.exports = Node;
