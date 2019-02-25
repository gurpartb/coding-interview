// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const width = []

    let arr = [root];
    width.push(arr.length)

    // Similar to BFS
    while(arr.length){
        let arr2 = [];

        while(arr.length){
            let node = arr.shift();
            arr2.push(...node.children)
        }

        arr = arr2;
        width.push(arr.length);
    }
    // remove '0' from the last spot in width[]
    width.pop();

    return width;
}

module.exports = levelWidth;
