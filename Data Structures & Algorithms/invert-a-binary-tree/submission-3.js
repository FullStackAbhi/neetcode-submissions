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
     * @return {TreeNode}
     */
    invertTree(root) {

         var helper = (node) => {
            if(!node)return 
          
            let temp =  node.left
            node.left = node.right
            node.right = temp

            helper(node.left)
            helper(node.right)
                
            
           
           
            
            
         }
         helper(root)

return root


    }
}
