/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let ans = null

        var helper = (node, p, q) => {
            if (!node) return 0;

            let left = helper(node.left, p, q);
            let right = helper(node.right, p, q);

            let self = 0;
            if (node.val == p.val || node.val == q.val) self = 1;
            let total = left + right + self;

            if (total == 2 && ans == null) {
                ans = node
            };
            return total
        };
         helper(root, p, q);
         return ans
    }
}
