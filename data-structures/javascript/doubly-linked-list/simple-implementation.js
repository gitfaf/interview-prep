/* paste as a snippet in chrome */
class Node {
    constructor(value, prev, next) {
        this.prev = prev || null;
        this.value = value;
        this.next = next || null;
    }
    isNullOrEmpty() {
        return (this.value === undefined || this.value === null);
    }
    isUnlinked() {
        return !this.prev && !this.next;
    }
    toString() {
        let str = '';
        if (this.prev) {
            str += ' <- ';
        } else {
            str += ' null <- ';
        }
        str += this.value;
        if (this.next) {
            str += ' -> ';
        } else {
            str += ' -> null';
        }
        return str;
    }
    toValue() {
        return this.value;
    }
}

class DoublyLinkedList {
    constructor(root) {
        this.first = this.last = root;
    }
    get length() {
        let tmp = this.first;
        let count = 0;
        while (tmp) {
            count++;
            tmp = tmp.next;
        }
        return count;
    }
    append(node) {
        this.last.next = node;
        node.prev = this.last;
        this.last = node;
    }
    prepend(node) {
        node.next = this.first;
        this.first.prev = node;
        this.first = node;
    }
    print() {
        let tmp = this.first;
        while (tmp) {
            console.log(tmp.value);
            tmp = tmp.next;
        }
    }
    printBackwards() {
        let tmp = this.last;
        while (tmp) {
            console.log(tmp.value);
            tmp = tmp.prev;
        }
    }
    toString() {
        let tmp = this.first;
        let str = '';
        while (tmp) {
            str += tmp.toString();
            tmp = tmp.next;
        }
        return str;
    }
    toValue() {
        let value = [];
        let tmp = this.first;
        while (tmp) {
            value.push(tmp.toValue());
            tmp = tmp.next;
        }
        return value;
    }
    rotateLeft(times = 1) {
        times = times % this.length;
        for (let i = 0; i < times; i++) {
            this.makeCircular();
            this.last = this.last.prev;
            this.first = this.first.prev;
            this.breakCircular();
        }
    }
    rotateRight(times = 1) {
        times = times % this.length;
        for (let i = 0; i < times; i++) {
            this.makeCircular();
            this.first = this.first.next;
            this.last = this.last.next;
            this.breakCircular();
        }
    }
    makeCircular() {
        this.last.next = this.first;
        this.first.prev = this.last;
    }
    breakCircular() {
        this.last.next = null;
        this.first.prev = null;
    }
}

/* Node Tests */
class NodeTests {
    static test1() {
        console.log('test1');
        let list = new Node(1);
        console.log('should be unlinked:', list.isUnlinked() ? 'unlinked' : 'linked');
    }
}

class DoublyLinkedListTests {
    static test1() {
        console.log('test1');
        let list = new DoublyLinkedList(new Node(1));
        console.log("Length:", list.length);
        list.append(new Node(2));
        console.log("Length:", list.length);
        list.prepend(new Node(3));
        list.print();
        list.printBackwards();
        console.log('list:', list, 'Length:', list.length);
    }
    static test2_toString() {
        console.log('test2_toString');
        let list = new DoublyLinkedList(new Node(1));
        list.append(new Node(2));
        list.append(new Node(3));
        list.append(new Node(3));
        list.append(new Node(4));
        console.log('list:', list, 'list.toString:', list.toString());
    }
    static test3_toValue() {
        console.log('test3_toValue:');
        let list = new DoublyLinkedList(new Node(10));
        list.append(new Node(20));
        list.append(new Node(30));
        list.append(new Node(31));
        list.append(new Node(40));
        console.log('list:', list, 'list.toValue:', list.toValue());
    }
    static test4() {
        console.log('test4:');
        let list = new DoublyLinkedList(new Node(11));
        list.append(new Node(12));
        list.append(new Node(13));
        list.append(new Node(13));
        list.append(new Node(14));

        console.log(1 + list);
        console.log("abc" + list);
    }
    static test5_rotateLeft() {
        console.log('test5_rotateLeft:');
        let list = new DoublyLinkedList(new Node(10));
        list.append(new Node(20));
        list.append(new Node(30));
        list.append(new Node(31));
        list.append(new Node(40));
        console.log('list:', list, 'original list:', list.toString());
        list.rotateLeft();
        console.log('list:', list, 'list.rotateLeft():', list.toString());
    }
    static test6_rotateLeft3() {
        console.log('test6_rotateLeft3:');
        let list = new DoublyLinkedList(new Node(10));
        list.append(new Node(20));
        list.append(new Node(30));
        list.append(new Node(31));
        list.append(new Node(40));
        console.log('list:', list, 'original list:', list.toString());
        list.rotateLeft(3);
        console.log('list:', list, 'list.rotateLeft(3):', list.toString());
    }
    static test7_rotateRight() {
        console.log('test7_rotateRight:');
        let list = new DoublyLinkedList(new Node(10));
        list.append(new Node(20));
        list.append(new Node(30));
        list.append(new Node(31));
        list.append(new Node(40));
        console.log('list:', list, 'original list:', list.toString());
        list.rotateRight();
        console.log('list:', list, 'list.rotateRight():', list.toString());
    }
    static test8_rotateRight3() {
        console.log('test8_rotateRight3:');
        let list = new DoublyLinkedList(new Node(10));
        list.append(new Node(20));
        list.append(new Node(30));
        list.append(new Node(31));
        list.append(new Node(40));
        console.log('list:', list, 'original list:', list.toString());
        list.rotateRight(3);
        console.log('list:', list, 'list.rotateRight(3):', list.toString());
    }
}

NodeTests.test1();
DoublyLinkedListTests.test1()
DoublyLinkedListTests.test2_toString();
DoublyLinkedListTests.test3_toValue();
DoublyLinkedListTests.test4();
DoublyLinkedListTests.test5_rotateLeft();
DoublyLinkedListTests.test6_rotateLeft3();
DoublyLinkedListTests.test7_rotateRight();
DoublyLinkedListTests.test8_rotateRight3();
