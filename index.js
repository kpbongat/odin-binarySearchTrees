class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  buildTree(array) {
    if (array.length === 0) {
      return null;
    }
    let middle = parseInt((array.length - 1) / 2);

    return new Node(
      array[middle],
      this.buildTree(array.slice(0, middle)),
      this.buildTree(array.slice(middle + 1))
    );
  }

  insert(value) {
    const newNode = new Node(value);

    let currentNode = this.root;
    while (true) {
      const direction = newNode.data > currentNode.data ? "right" : "left";

      if (currentNode[direction] === null) {
        currentNode[direction] = newNode;
        break;
      }
      currentNode = currentNode[direction];
    }
  }
  delete(value) {
    let currentNode = this.root;
    while (true) {
      const direction = value > currentNode.data ? "right" : "left";
      if (currentNode[direction].data === value) {
        console.log(currentNode[direction]);
        let children = 0;
        if (currentNode[direction].left) {
          children = children + 1;
        }
        if (currentNode[direction].right) {
          children = children + 1;
        }

        switch (children) {
          case 0:
            currentNode[direction] = null;
            break;
          case 1:
            currentNode[direction] =
              currentNode[direction].left || currentNode[direction].right;
            console.log(currentNode[direction]);
            break;
        }
        break;
      }

      currentNode = currentNode[direction];
    }
  }
  find(value) {
    let currentNode = this.root;
    while (true) {
      const direction = value > currentNode.data ? "right" : "left";
      if (currentNode[direction].data === value) {
        return currentNode[direction];
      }

      currentNode = currentNode[direction];
    }
  }

  levelOrder(callback) {
    const queue = [];
    queue.push(this.root);
    while (queue.length != 0) {
      const currentNode = queue.shift();
      callback(currentNode);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  inOrder(callback, currentNode = this.root) {
    if (currentNode.left) {
      this.inOrder(callback, currentNode.left);
    }
    callback(currentNode);
    if (currentNode.right) {
      this.inOrder(callback, currentNode.right);
    }
  }

  preOrder(callback, currentNode = this.root) {
    callback(currentNode);
    if (currentNode.left) {
      this.inOrder(callback, currentNode.left);
    }
    if (currentNode.right) {
      this.inOrder(callback, currentNode.right);
    }
  }

  postOrder(callback, currentNode = this.root) {
    if (currentNode.left) {
      this.inOrder(callback, currentNode.left);
    }
    if (currentNode.right) {
      this.inOrder(callback, currentNode.right);
    }
    callback(currentNode);
  }
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const leftHalf = mergeSort(array.slice(0, array.length / 2));
    const rightHalf = mergeSort(array.slice(array.length / 2));
    let mergedArray = [];

    while (array.length != mergedArray.length) {
      if (leftHalf[0] < rightHalf[0] || rightHalf.length === 0) {
        mergedArray.push(leftHalf.shift());
      } else {
        mergedArray.push(rightHalf.shift());
      }
    }
    return mergedArray;
  }
}
