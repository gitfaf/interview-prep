class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
    isEmptyOrNull () {
        return !this.value;
    }
    isUnlinked () {
        return !this.next;
    }
}

class LinkedList {
    constructor(root) {
        this.first = root;
    }
    append (value) {
        let tmp = this.first;
        while(tmp.next) {
            tmp = tmp.next;
        }
        tmp.next = new Node(value);
    }
    prepend (value) {
        let tmp = new Node(value);
        tmp.next = this.first;
        this.first = tmp;
    }
    get length() {
        let tmp = this.first;
        let count = 0;
        while(tmp) {
            tmp = tmp.next;
            count++;
        }
        return count;
    }
    toString() {
        let str = '-> ';
        let tmp = this.first;
        while(tmp) {
            str += tmp.value + ' -> ';
            tmp = tmp.next;
        }
        str += 'null';
        return str;
    }
    reverse () {
        let tmp = this.first;
        let stack = [];
        while(tmp) {
            stack.push(tmp);
            tmp = tmp.next;
        }
        let newList = new LinkedList(stack.pop());
        while(stack.length) {
            newList.append(stack.pop().value);
        }
        return newList;
    }
}

class LinkedListTest {
    static t1 () {
        let list = new LinkedList(new Node(1));
        console.log(list.length);
        list.append(2);
        list.prepend(3);
        console.log(list.length);
        console.log(list.toString());
    }
    static t2_reverse () {
        let list = new LinkedList(new Node(1));
        list.append(2);
        list.prepend(3);
        console.log(list.reverse().toString());
    }
}

LinkedListTest.t1();
LinkedListTest.t2_reverse();
