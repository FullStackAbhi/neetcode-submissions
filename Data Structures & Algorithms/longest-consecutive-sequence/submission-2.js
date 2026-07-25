class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length < 1)return 0

        nums.sort((a,b) => a-b)
let maxlength  = 0
let count = 0
console.log(nums)
        for(let i = 0 ; i<nums.length ; i++) {

            if(nums[i] == nums[i-1])continue
            if(nums[i] == nums[i-1] + 1){
                count++
                if(count > maxlength){
                maxlength  = count
            }
            }else{
                count  = 0
            }
            




        }
        return maxlength+1
    }
}
