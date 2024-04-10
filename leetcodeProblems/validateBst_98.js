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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let isbst = true;
    let prev = -Infinity;
    function bst(node) {
        if (!node) {
            return;
        }
        bst(node.left);
        console.log(node.val, prev);
        isbst = isbst && node.val > prev
        prev = node.val;
        bst(node.right);
    }

    bst(root);

    return isbst;
};