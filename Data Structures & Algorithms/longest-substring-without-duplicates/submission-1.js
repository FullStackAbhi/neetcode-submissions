class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxCount = 0
        let left  = 0
        let right  = 0
        let set  = new Set()
       

        while(right < s.length) {
           
            if(set.has(s[right])){
                while(set.has(s[right])){
                    set.delete(s[left])
                    left++
                }
            }else{
                set.add(s[right])
                maxCount = Math.max((right-left+1) , maxCount)   
                right++
            }
        }
        return maxCount    
    }
}
