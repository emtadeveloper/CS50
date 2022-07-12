import { LinkedList } from "./linkedList";

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        return this.list.deletedHead();
    }

    toArray() {
        return this.list.toArray();
    }
}

const queue = new Queue();

queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(10);

console.log(queue.toArray());
queue.dequeue();
console.log(queue.toArray());
