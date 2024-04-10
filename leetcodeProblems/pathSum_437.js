/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let total = 0;
    function dfs(node, sum, arr) {
        if (!node) {
            return;
        }
        sum += node.val;

        arr.push(node.val)
        if (sum == targetSum) {
            total++;
        } else if (sum > targetSum) {
            while (sum > targetSum && arr?.length) {
                sum -= arr.shift();
                console.log('dfd', node.val, sum, arr)
                if (sum == targetSum && arr?.length) {
                    total++;
                }
            }
        }
        console.log('mfd', node.val, targetSum, sum, arr)
        dfs(node.left, sum, arr);
        dfs(node.right, sum, arr);
        arr.pop();
    }

    dfs(root, 0, [])
    return total;
};
