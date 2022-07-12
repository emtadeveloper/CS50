class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    toArray() {
        return this.items;
    }
}

const stack = new Stack();

stack.push("product 1");
stack.push("product 2");
stack.push("product 3");
console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());
