class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.unshift(value);
    }

    dequeue() {
        return this.items.shift();
    }

    toArray() {
        return this.items;
    }
}

const queue = new Queue();

queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(10);

console.log(queue.toArray());
queue.dequeue();
console.log(queue.toArray());
