'use strict';

class LinkedListPrint {
    constructor(list) {
        this.list = list;
    }
    print() {
        var current = this.list.root;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

module.exports = LinkedListPrint;
