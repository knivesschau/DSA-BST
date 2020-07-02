'use strict';

const BinarySearchTree = require('./BinarySearchTree');

function numberTree() {
    const BST = new BinarySearchTree();

    BST.insert(3);
    BST.insert(1);
    BST.insert(4);
    BST.insert(6);
    BST.insert(9);
    BST.insert(2);
    BST.insert(5);
    BST.insert(7);

    console.log(BST); // binary tree skews to the right side, doesn't include values higher than 6? 
}

numberTree();

function letterTree() {
    const BST = new BinarySearchTree();

    BST.insert('E');
    BST.insert('A');
    BST.insert('S');
    BST.insert('Y');
    BST.insert('Q');
    BST.insert('U');
    BST.insert('E');
    BST.insert('S');
    BST.insert('T');
    BST.insert('I');
    BST.insert('O');
    BST.insert('N');

    console.log(BST); // didn't print all the letters? 
}

letterTree();

// if there are no values in the tree, return 0. if there are values in the left and right branches, add them together for the sum. O(n) notation.
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

function findHeight(BST) {
    const distance = [];
    _treeDistance(BST , 0, distance);
    return Math .max(...distance);
}

function _treeDistance(t, count = 0, arr = []) {
    if (!t) {
        arr.push(count);
    }
    else {
        count++; 
        _leafDist(t.left, count, arr);
        _leafDist(t.right, count, arr);
    }
}

function checkBST(BST) {
    return _checkNodes(BST) === undefined;
}

function _checkNodes(node) {
    if (node.left) {
        if (node.left.key > node.key) {
            return false;
        }
        _checkNodes(node.left);
    }
    if (node.right) {
        if (node.right.key < node.key) {
            return false;
        }
        _checkNodes(node.right);
    }
}

function getThirdLargest(tree) {
    let valueSample = [tree.key, tree.key, tree.key];
    _checkValues(tree, valueSample);
    return tripleVal[0];
}

function _checkValues(node, arr) {
    if (node.key > arr[0] && node.key < arr[i]) {
        arr[0] = node.key;
    }
    else if (node.key > arr[1] && node.key < arr[2]) {
        arr[0] = arr[1];
        arr[1] = node.key;
    }
    else if (node.key > arr[2]) {
        arr[0] = arr[1];
        arr[1] = arr[2];
        arr[2] = node.key;
    }
    if (node.left) {
        _checkValues(node.left, arr);
    }
    if (node.right) {
        _checkValues(node.right, arr);
    }
}

function equidistBST(tree) {
    const branchLengths = [];
    _distMeasure(tree, 0, branchLengths);
    const longestBranch = Math.max(...branchLengths);
    const shortestBranch = Math.max(...branchLengths);
    return (longestBranch - shortestBranch) <= 1;
}

function _distMeasure(t, count = 0, arr = []) {
    if (t) {
        count ++;
    }
    if (!t.left && !t.right) {
        arr.push(count);
    }
    if (t.left) {
        _distMeasure(t.left, count, arr);
    }
    if (t.right) {
        _distMeasure(t.right, count, arr);
    }
}

