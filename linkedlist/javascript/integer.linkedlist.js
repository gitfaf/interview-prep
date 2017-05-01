'use strict';

class Node {
  constructor(value) {
    if(typeof value !== typeof 1) {
      throw new TypeError('Only integers are accepted.');
    }
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
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
    while(temp.next !== null) {
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
  deserialize (deserializableObj) {
    var values = JSON.parse(deserializableObj).values;
    var list = new LinkedList();
    values.forEach(v => list.append(v));
    return list;
  }
  print () {
    var current = this.root;
    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }
  getRoot () {
    return this.root;
  }
  isEmpty () {
    return this.root === null;
  }
}

class LinkedListSerializer {
  constructor(list) {
    this.list = list;
    this.serialized = null;
  }
  serialize () {
    var values = this.list.getValues();
    var obj = { values };
    this.serialized = JSON.stringify(obj);
  }
}

function createSampleLinkedList () {
  var values = [1, 2, 3, 4, 5];
  var list = new LinkedList();
  if(list.isEmpty()) {
    list.createList(0);
  }
  values.forEach((i) => list.append(i));
  list.print();

  var serialized = list.serialize();
  console.log(serialized);
  list.deserialize(serialized).print();
}
