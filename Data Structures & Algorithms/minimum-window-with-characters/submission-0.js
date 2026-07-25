class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let left  = 0
        let right = 0
        let formed = 0
        let minLength = Infinity
        let substr = ""

        let map = new Map()
        let map2 = new Map()

        for(let i  = 0 ; i < t.length ; i++){
            map.set(t[i] , (map.get(t[i]) || 0) + 1)
        }

        while(right < s.length) {
            let char  = s[right]
            map2.set(char , ( map2.get(char) || 0) +1)

            if(map.has(char) && map2.get(char) === map.get(char)){
                formed++
            }

            while(formed == map.size){
                if (right - left + 1 < minLength) {
                 minLength = right - left + 1;
                 substr = s.slice(left, right + 1);
                }
                let leftchar  = s[left]
                map2.set(leftchar , map2.get(leftchar) -1)

                if(map.has(leftchar) && map.get(leftchar) > map2.get(leftchar)){
                    formed--
                }
                left++
            }
            right++

        }
       return substr
    }
}
