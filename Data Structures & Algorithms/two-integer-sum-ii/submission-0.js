class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let map  = new Map()

        for(let i  = 0 ; i <numbers.length ; i++) {
            map.set(numbers[i] ,i+1)
        }

        for(let i  = 0 ; i<numbers.length ; i++) {
            if(map.has(target - numbers[i])){
                return [i+1,map.get(target - numbers[i])]
            }
        }


    }
}
