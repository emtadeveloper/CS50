
class HashTabel {
    constructor() {
        this.size = 10000;
        this.products = Array(1000).fill(null);
    }

    hash(key) {
        let hash = 0;
        for (const char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key, value) {
        const keyHash = this.hash(key);
        this.products[keyHash] = value;
    }

    get(key) {
        const keyHash = this.hash(key)
        return this.products[keyHash]
    }
}

let message = "Hello World";

function findFristChar(str) {
    const tabel = new HashTabel();

    for (let char of str) {
        if (tabel.get(char)) {
            return char;
        }
        tabel.set(char, 1);
    }

}
console.log(findFristChar(message));