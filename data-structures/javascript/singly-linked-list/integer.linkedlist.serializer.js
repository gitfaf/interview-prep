'use strict';

class LinkedListSerializer {
    constructor(list) {
        this.list = list;
        this.serialized = null;
    }
    serialize() {
        if(!this.serialized) {
            this.serialized = JSON.stringify({ value: this.list.getValues() });
        }
        return this.serialized;
    }
}

module.exports = LinkedListSerializer;
