'use strict';

const BinarySearchTree = require('./BinarySearchTree');

function numberTree() {
    const BST = new BinarySearchTree();

    BST.insert("3", "3");
    BST.insert("1", "1");
    BST.insert("4", "4");
    BST.insert("6", "6");
    BST.insert("9", "9");
    BST.insert("2", "2");
    BST.insert("5", "5");
    BST.insert("7", "7");

    return BST;
}

// console.log(numberTree());

function letterTree() {
    const BST = new BinarySearchTree();

    BST.insert('E', 'E');
    BST.insert('A', 'A');
    BST.insert('S', 'S');
    BST.insert('Y', 'Y');
    BST.insert('Q', 'Q');
    BST.insert('U', 'U');
    BST.insert('E', 'E');
    BST.insert('S', 'S');
    BST.insert('T', 'T');
    BST.insert('I', 'I');
    BST.insert('O', 'O');
    BST.insert('N', 'N');

    return BST;
}

// console.log(letterTree());

// if there are no values in the tree, return 0. if there are values in the left and right branches, add them together for the sum. 
// O(log(n)) or O(n) notation depending on if the tree is skewed or balanced.
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

function findHeight(tree) {
    if (!tree) {
        return 0;
    }

    if (!tree.left && !tree.right) {
        return 1;
    }

    let height = 0;

    if (tree.right) {
        let rightHeight = 1 + findHeight(tree.right);

        if (rightHeight > height) {
            height = rightHeight;
        }
    }
    
    if (tree.left) {
        let leftHeight = 1 + findHeight(tree.left);
        
        if (leftHeight > height) {
            height = leftHeight;
        }
    }
    return height;
}

console.log(findHeight(letterTree()));
console.log(findHeight(numberTree()));

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

function checkBST(tree) {
    if (!tree) {
        return false;
    }

    if (tree.right) {
        if (tree.right.key > tree.key) {
            checkBST(tree.right);
        }
        else {
            return false;
        }
    }

    if (tree.left) {
        if (tree.left.key < tree.key) {
            checkBST(tree.left);
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(checkBST(numberTree()));
console.log(checkBST(letterTree()));

function getThirdLargest(tree) {
    const height = findHeight(tree);

    if (height < 2) {
        return null;
    }
    else if (height < 3) {
        if (tree.left && tree.right) {
            return tree.left.value;
        }
        else {
            return null;
        }
    }
    else if (height > 3) {
        return getThirdLargest(tree.right);
    }
    else {
        return tree.key;
    }
}

console.log(getThirdLargest(numberTree()));

function balancedTree(tree) {
    if (!tree) {
        return false; 
    }

    if (!tree.right && !tree.left) {
        return true;
    }

    if (Math.abs(findHeight(tree.right) - findHeight(tree.left)) > 1) {
        return false;
    }
    return true;
}

const treeBalance = new BinarySearchTree();

treeBalance.insert(5);
treeBalance.insert(10);
treeBalance.insert(2);

console.log(balancedTree(numberTree()));
console.log(balancedTree(letterTree()));
console.log(balancedTree(treeBalance));

function matchingTrees(array1, array2) {
    if (array1.length !== array2.length || array1[0] !== array2[0]) {
        return false;
    }

    if (array1.length === 0 || array2.length === 0) {
        return true;
    }

    const largerArray1 = [];
    const largerArray2 = [];
    const smallerArray1 = [];
    const smallerArray2 = [];

    for (let i = 1; i < array1.length; i++) {
        if (array1[i] > array1[0]) {
            largerArray1.push(array1[i]);
        }
        else {
            smallerArray1.push(array1[i]);
        }
    }

    for (let i = 1; i < array2.length; i++) {
        if (array2[i] > array2[0]) {
            largerArray2.push(array2[i]);
        }
        else {
            smallerArray2.push(array2[i]);
        }
    }

    return (
        matchingTrees(largerArray1, largerArray2) && matchingTrees(smallerArray1, smallerArray2)
    );
}

const array1 = [3, 5, 4, 6, 1, 0, 2];
const array2 = [3, 1, 5, 2, 4, 6, 0];

console.log(matchingTrees(array1, array2));