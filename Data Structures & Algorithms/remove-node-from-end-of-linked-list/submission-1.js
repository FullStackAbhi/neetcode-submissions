/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let temp  = head
        let len  = 0

        while(temp){
            temp  = temp.next
            len++
        }
        
        temp  = head
        let prev = null
        if(len  == n){
            return head.next
        }

        while(len > n){
            prev  = temp
            temp  = temp.next
            len--
            
        }
        

        prev.next  = temp.next

        return head

        
        
    }
}
