// /**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @return {number[]}
//  */
// var findMinHeightTrees = function (n, edges) {
//     let obj = {};

//     for (let i = 0; i < edges.length; i++) {
//         if (!obj[edges[i][0]]) {
//             obj[edges[i][0]] = [];
//         }

//         if (!obj[edges[i][1]]) {
//             obj[edges[i][1]] = [];
//         }

//         obj[edges[i][0]].push(edges[i][1]);
//         obj[edges[i][1]].push(edges[i][0])

//     }
//     let minHeight = Infinity;
//     let minNode = Infinity;
//     function dfs(node, arr = [], h, nodeCover = []) {
//         let edgeArr = obj[node];
//         arr.push(node);
//         nodeCover.push(node)


//         for (let i = 0; i < edgeArr.length; i++) {
//             let index = arr.indexOf(edgeArr[i]);
//             if (index == -1) {
//                 nodeCover[edgeArr[i]];
//                 dfs(edgeArr[i], arr, h + 1, nodeCover);

//                 if (i == edgeArr.length - 1) {
//                     if (nodeCover.length == n) {
//                         minHeight = Math.min(minHeight, arr.length - 1);
//                         minNode = nodeCover[0];
//                     }
//                     console.log(arr, 'hnode', nodeCover, 'height', h)
//                     nodeCover.pop();
//                 }
//                 arr.pop();

//             }

//         }

//         return;
//     }
//     for (let key in obj) {
//         dfs(Number(key), [], 1);
//     }
//     return [minHeight, minNode];
// };


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    if (n === 1 || !edges) return [0]

    const adj = {}
    for (let i = 0; i < n; i++) {
        adj[i] = []
    }
    //populate map
    for (let [n1, n2] of edges) {
        if (adj[n1]) adj[n1].push(n2)
        if (adj[n1]) adj[n2].push(n1)
    }
    const edgeCount = {}
    let leaves = [] // queue
    for (let [src, neighbor] of Object.entries(adj)) {
        if (neighbor.length === 1) {
            leaves.push(src)

        }
        edgeCount[src] = neighbor.length
    }

    // build graph with queue
    while (leaves.length) {
        if (n <= 2) {
            return leaves
        }

        let len = leaves.length
        for (let i = 0; i < len; i++) {
            let node = leaves.shift()
            console.log(node)
            n -= 1

            for (let nei of adj[node]) {
                edgeCount[nei] -= 1
                if (edgeCount[nei] === 1) {
                    leaves.push(nei)
                }
            }
        }
    }
};


console.log(findMinHeightTrees(2, [[0, 1]]))