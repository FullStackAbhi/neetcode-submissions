class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map  = new Map()
        let maxVal = 0
        let maxnum= nums[0]

        for(let num of nums) {
            if(map.has(num))map.set(num , map.get(num)+1)
            else map.set(num , 1)
            if(map.get(num) > maxVal){
                maxnum =  num
                maxVal = map.get(num)
                }
        }
        return maxnum
    }
}
