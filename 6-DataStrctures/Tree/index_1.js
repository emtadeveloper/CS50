class Node {
    constructor(value, parentnode = null) {
        this.value = value;
        this.children = []
        this.parent = parentnode;

    }
    addNode(value) {
        const node = new Node(value, this);
        this.children.push(node)
        return { node: node, index: this.children.length - 1 }

    }
    removeNode(index) {
        this.children.splice(index, 1)
    }
}


class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue)
    }
}

const user = new Tree("root")
const userInfoNodeData = user.root.addNode("userInfo")
const cartNodeData = user.root.addNode("cart")

userInfoNodeData.node.addNode("Emad Ta")
cartNodeData.node.addNode("Book 1")
console.log(user);