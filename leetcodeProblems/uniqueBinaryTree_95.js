class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function generateTrees(n) {
    if (n === 0) {
        return [];
    }

    return generateTreesHelper(1, n);
}

function generateTreesHelper(start, end) {
    const result = [];

    if (start > end) {
        result.push(null);
        return result;
    }

    for (let i = start; i <= end; i++) {
        const leftSubtrees = generateTreesHelper(start, i - 1);
        const rightSubtrees = generateTreesHelper(i + 1, end);

        for (const left of leftSubtrees) {
            for (const right of rightSubtrees) {
                const root = new TreeNode(i);
                root.left = left;
                root.right = right;
                result.push(root);
            }
        }
    }

    return result;
}

// Example usage:
const n = 3;
const uniqueBSTs = generateTrees(n);
console.log(uniqueBSTs);
