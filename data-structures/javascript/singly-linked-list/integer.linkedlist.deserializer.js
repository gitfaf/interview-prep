'use strict';

class LinkedListDeserializer {
    constructor(deserializable) {
        this.deserializable = deserializable;
        this.output = null;
    }
    deserialize () {
        if(!this.output) {
            this.output = JSON.parse(this.deserializable);
        }
        return this.output;
    }
}

module.exports = LinkedListDeserializer;
