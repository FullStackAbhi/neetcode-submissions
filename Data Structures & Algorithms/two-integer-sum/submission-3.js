class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map  = new Map()

        for(let i  = 0 ; i<nums.length ; i++) {
            map.set(nums[i] , i)
        }
console.log(map)
        for(let i  = 0 ; i<nums.length ; i++) {
            let left  = (target  - nums[i])
            if(map.has(left) && i !== map.get(left)){
                return [map.get(left) , i]
            }
            

        }
        
    }
}
