class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */

    minWindow(s, t) {
        let left  = 0
        let right = 0
        let minlength = Infinity
        let subStr = ""
        let map = new Map()

        for(let i  = 0; i < t.length ; i++) {
            map.set(t[i] , (map.get(t[i]) || 0) +1)
        }

        let map2 = new Map()
        let counter = 0

        while(right < s.length) {
            let char  = s[right]
            if(map.has(char)){
                map2.set(char , (map2.get(char) || 0) +1)
                if(map.get(char) == map2.get(char)){
                counter++
             }
        } 
            
            while(counter == map.size){
                if((right - left + 1) < minlength) {
                minlength = right - left + 1
                subStr = s.substring(left , right+1)
                }

                let leftchar = s[left]
                if(map.has(leftchar)){
                    map2.set(leftchar , map2.get(leftchar)- 1)
                    if(map2.get(leftchar) < map.get(leftchar))counter--
                }
                left++  
            }

            right++

        }

    return subStr
    }
}
