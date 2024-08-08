class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
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
