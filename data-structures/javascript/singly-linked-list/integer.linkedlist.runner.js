'use strict';

const LinkedList = require('./integer.linkedlist');
const LinkedListPrint = require('./integer.linkedlist.print');
const LinkedListSerializer = require('./integer.linkedlist.serializer');
const LinkedListDeserializer = require('./integer.linkedlist.deserializer');

function createSampleLinkedList () {
  var values = [1, 2, 3, 4, 5];
  var list = new LinkedList();
  if(list.isEmpty()) {
    list.createList(0);
  }
  values.forEach((i) => list.append(i));
  const printer = new LinkedListPrint(list);
  printer.print();

  var serializer = new LinkedListSerializer(list);
  console.log(serializer.serialize());
  const deserializer = new LinkedListDeserializer(serializer.serialize());
  printer.print(deserializer.deserialize());
}

module.exports = createSampleLinkedList;
