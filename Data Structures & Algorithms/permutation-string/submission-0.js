class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false;

        let map1 = new Map();
        for (let i = 0; i < s1.length; i++) {
            map1.set(s1[i], (map1.get(s1[i]) || 0) + 1);
        }
        let map2 = new Map();
        let right = 0;
        let left = 0;


        var helper = (m1, m2) => {
            for (let key of m1.keys()) {
                if (!m2.has(key) || m1.get(key) !== m2.get(key)) return false;
            }
            return true;
        };






        while (right < s1.length) {
            map2.set(s2[right], (map2.get(s2[right]) || 0) + 1);
            right++;
        }
        if(helper(map2 , map1))return true

        while (right < s2.length) {                  
                map2.set(s2[right], (map2.get(s2[right]) || 0) + 1);
                map2.set(s2[left], map2.get(s2[left]) - 1);
                if (map2.get(s2[left]) == 0) {
                    map2.delete(s2[left]);
                }
                left++;
                right++
                if(helper(map1 , map2))return true

            }
        
        return false
    }
}
