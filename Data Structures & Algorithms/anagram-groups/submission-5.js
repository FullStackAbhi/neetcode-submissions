class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map  = new Map()

        for(let word of strs) {

            let freq = new Array(26).fill(0)

            for(let char of word) {
                freq[char.charCodeAt(0) - 97]++
            }
            let key = freq.join(' ')

            if(!map.has(key))map.set(key , [])
            map.get(key).push(word)
        }
        return Array.from(map.values())
    }
}
