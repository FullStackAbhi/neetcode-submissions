class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, "");
        s = s.toLocaleLowerCase()
        let left  = 0
        let right  = s.length-1

        while(right > left) {
            
            // console.log(left , right , s[left] , s[right])
            if(s[left] !== s[right])return false
            right--
            left++
        }
        return true
    }
}
