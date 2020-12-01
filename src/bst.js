export default class BST {
  constructor() {
    this.root = null;
  }
  insertNode(node) {
    if (this.root === null) {
      this.root = node;
    }else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > node.data) {
          if (currentNode.left === null) {
            currentNode.left = node;
            return this;
          }else {
            currentNode = currentNode.left;
          }
        }else if (currentNode.data < node.data) {
          currentNode.right = node;
          return this;
        }
      }
    }
  }
}