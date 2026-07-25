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
     * @return {void}
     */
    reorderList(head) {
        // to solve this we have to do 
        // 1. find middle of LL
        // 2. reverse 2nd half 
        // 3. merge alternative 1st and 2nd half

        // let temp  = head
        let slow  = head
        let fast  = head
        let midd;

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        let mid  = slow
        let prev  = null
        let curr  = mid
        let next  = curr.next

        while(curr) {
            next  = curr.next
            curr.next = prev
            prev  = curr
            curr = next
        }
         let first  = head
         let second  = prev

        while(second.next) {
           let temp1 = first.next
           let temp2 = second.next

           first.next = second
           second.next = temp1

           first  = temp1
           second  = temp2
        }



    }
}
