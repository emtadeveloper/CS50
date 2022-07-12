class LinkedList {
    //
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //
    append(value) {
        const newElement = { value: value, next: null };
        if (this.tail) {
            this.tail.next = newElement;
        }
        this.tail = newElement;
        if (!this.head) {
            this.head = newElement;
        }
    }

    //
    prepend(value) {
        const newElement = { value: value, next: this.head };
        this.head = newElement;
        if (!this.tail) {
            this.tail = newElment;
        }
    }

    //
    find(value) {
        if (!this.head) {
            return null;
        }
        let curElement = this.head
        while(curElement){
            if(curElement.value === value){
                return curElement
            }
            curElement = curElement.next
        }
        return "not found"
    }

    //
    delete(value) {
        if (!this.head) {
            return null;
        }
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }
        let curElement = this.head;

        while (curElement.next) {
            if (curElement.next.value == value) {
                curElement.next = curElement.next.next;
            } else {
                curElement = curElement.next;
            }
        }
        if (this.tail.value === value) {
            this.tail = curElement;
        }
    }

    //
    toArray() {
        const elements = [];
        let curElement = this.head;
        while (curElement) {
            elements.push(curElement);
            curElement = curElement.next;
        }
        return elements;
    }

    insertAfter(value,afterValue){
        const existingElement = this.find(afterValue);
        if(existingElement){
            const newElement = { value : value , nex : existingElement.value}
            existingElement.next = newElement;
        }
    }
}


const linkedlist = new LinkedList();

linkedlist.append(2);
linkedlist.append("s");
linkedlist.append("s");
linkedlist.append(true);
linkedlist.prepend("Frist Value");
linkedlist.prepend("Frist Value");
linkedlist.delete("s");
linkedlist.delete("Frist Value");
linkedlist.delete(true);
// console.log(linkedlist.toArray());
// console.log(linkedlist.find("s"))
// console.log(linkedlist.find(2))

linkedlist.insertAfter("new Value",2)
console.log(linkedlist.toArray());
