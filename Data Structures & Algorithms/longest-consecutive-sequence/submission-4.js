class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length < 1)return 0

        let set = new Set(nums)

        let maxlength = 0
        for(let num of set) {
            if(!set.has(num-1)){
                let currnum  = num
                let count  = 1
                while(set.has(currnum+1)){
                    currnum++
                    count++
                }
                maxlength  = Math.max(maxlength , count)

            }

        }
        return maxlength
    }
}
