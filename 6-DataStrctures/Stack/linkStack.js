import { LinkedList } from "./linkedList";

export class Stack {
    constructor() {
        this.list = new LinkedList();
    }
    push(value) {
        this.list.push(value);
    }
    pop() {
        return this.list.deletedHead();
    }
    toArray() {
        this.list.toArray();
    }
}

stack.push("product 1");
stack.push("product 2");
stack.push("product 3");
console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());
