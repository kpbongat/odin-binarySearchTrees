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
