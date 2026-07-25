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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        let temp1 = l1
        let temp2 = l2
        let res = new ListNode(0)
        let temp  = res 
        let carry  = 0


        while(temp1  && temp2) {
            let sum  = temp1.val  + temp2.val
            if(carry){
                sum += carry
                carry = 0
            }

            if(sum < 10) {
                temp.next  =new ListNode(sum)
                temp = temp.next
            }else{
                sum  = sum - 10
                temp.next  =new ListNode(sum)
                temp = temp.next
                carry  += 1
            }
            
            temp1 = temp1.next
            temp2 = temp2.next
        }
         if(temp1){
            while(temp1){
            let sum  = temp1.val
            if(carry){
                sum  += carry
                carry  = 0
            }
            if(sum  < 10){
                temp.next  =new ListNode(sum)
                temp = temp.next
            }else{
                sum  = sum - 10
                temp.next  = new ListNode(sum)
                temp = temp.next
                carry  += 1
            }
            temp1 = temp1.next
            }
        }else if(temp2){
          while(temp2) {
            let sum  = temp2.val
            if(carry){
                sum  += carry
                carry  = 0
            }
            if(sum  < 10){
                temp.next  =new ListNode(sum)
                temp = temp.next
            }else{
                sum  = sum - 10
                temp.next  = new ListNode(sum)
                temp = temp.next
                carry  += 1
            }
            temp2 = temp2.next
         }

        }
        if(carry) {
            temp.next  = new ListNode(carry)
        }
        return res.next
    }
}
