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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {

    function dfs(node, value) {
        if (!node) {
            return null;
        }

        if (value < node.val) {
            node.left = dfs(node.left, node);
        } else if (value > node.val) {
            node.right = dfs(node.right, node);
        } else {
            if (!node.left && !node.right) {
                return null;
            } else if (!node.right) {
                return node.left;
            } else if (!node.left) {
                return node.right;
            } else {
                node.val = findMin(node.right);
                node.right = dfs(node.right, node.val)
            }
        }

        return root;
    }

    function findMin(roots) {
        if (!roots.left) {
            return roots.val;
        }
        return findMin(roots.left);
    }

    dfs(root, key);

    return root;
};