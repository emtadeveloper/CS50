class Node {
    constructor(value, parentNode = null) {
        this.children = []
        this.value = value
        this.parent = parentNode
    }

    addNode(value) {
        const segments = value.split('/')

        if (segments.length === 0) {
            return
        }

        if (segments.length === 1) {
            const node = new Node(segments[0], this)
            this.children.push(node)
            return { node: node, index: this.children.length - 1 }
        }

        const existingChildNode = this.children.find((item) => {
            return item.value === segments[0]
        })

        if (existingChildNode) {
            existingChildNode.addNode(segments.slice(1).join('/'))
        } else {
            const node = new Node(segments[0], this)
            node.addNode(segments.slice(1).join('/'))
            this.children.push(node)
            return { node: node, index: this.children.length - 1 }
        }
    }

    removeNode(value) {
        const segments = value.split('/')

        if (segments.length === 0) {
            return
        }

        if (segments.length === 1) {
            const existingNodeIndex = this.children.findIndex((item) => {
                return item.value === segments[0]
            })

            if (existingNodeIndex < 0) {
                throw new Error('Could not find.')
            }

            this.children.splice(existingNodeIndex, 1)
        }

        if (segments.length > 1) {
            const existingChildNode = this.children.find((item) => {
                return item.value === segments[0]
            })

            if (!existingChildNode) {
                throw new Error('Could not find.')
            }

            existingChildNode.removeNode(segments.slice(1).join('/'))
        }
    }

    find(value) {
        for (const item of this.children) {
            if (item.value === value) {
                return item
            }
        }

        for (const item of this.children) {
            const nestedChildNode = item.find(value)

            if (nestedChildNode) {
                return nestedChildNode
            }
        }
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue)
    }

    add(path) {
        this.root.addNode(path)
    }

    remove(path) {
        this.root.removeNode(path)
    }

    find(value) {
        if (this.root.value === value) {
            return this.root
        }

        return this.root.find(value)
    }
}

const user = new Tree('root')

user.add('/userInfo/username/MasoodSadri')
user.add('/cart/Book 1')
user.add('/cart/Book 2')

user.remove('/cart/Book 2')

console.log(user.find('username'))

console.log(user)
 