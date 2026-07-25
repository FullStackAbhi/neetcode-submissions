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
        let required = map1.size;
        let formed = 0;
        let map2 = new Map();
        let right = 0;
        let left = 0;

        while (right < s1.length) {
            map2.set(s2[right], (map2.get(s2[right]) || 0) + 1);
            if (map1.has(s2[right]) && map1.get(s2[right]) == map2.get(s2[right])) {
                formed++;
            }
            right++;
        }
        if (formed == required) return true;

        while (right < s2.length) {
            console.log(formed , required)
            map2.set(s2[right], (map2.get(s2[right]) || 0) + 1);
            if (map1.has(s2[right]) && map1.get(s2[right]) == map2.get(s2[right])) {
                formed++;
            }
            if (map1.has(s2[left]) && map1.get(s2[left]) == map2.get(s2[left])) {
                formed--;
            }
            map2.set(s2[left], map2.get(s2[left]) - 1);
            
            if (map2.get(s2[left]) == 0) {
                map2.delete(s2[left]);
            }
            if (formed === required) return true;
            left++;
            right++;
            
        }

        return false;
    }
}
