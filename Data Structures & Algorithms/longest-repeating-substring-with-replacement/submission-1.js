class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left  = 0
        let right  = 0
        let maxfreq = 0
        let maxLength = 0
        let map  = new Map()

        while(right < s.length) {
            let char  = s[right]
            map.set(char , (map.get(s[right]) || 0) +1)

            maxfreq = Math.max(maxfreq , map.get(char))

        while((right - left + 1) -maxfreq > k){
            let char   = s[left]
            map.set(char , map.get(char) - 1)
            left++
        }
        maxLength = Math.max(maxLength , right-left +1)
        right++
        }
        return maxLength
        
    }
}
