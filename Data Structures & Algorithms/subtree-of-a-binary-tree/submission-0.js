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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root)return false

        if(this.isTreeSame(root , subRoot)) return true

        return this.isSubtree(root.left , subRoot) || this.isSubtree(root.right , subRoot) 
    }



    isTreeSame(root , subRoot){
            if(!root && !subRoot)return true
            if(!root || !subRoot)return false
            if(root.val !== subRoot.val)return false

            return this.isTreeSame(root.left , subRoot.left) && this.isTreeSame(root.right , subRoot.right)
        
    
        }


}
