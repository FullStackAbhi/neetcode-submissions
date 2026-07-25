class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let height  = 0
        let maxheight = 0
        let left  = 0
        let right   = heights.length -1

        while(left<right) {
             
            height = Math.min(heights[left] , heights[right])
            let water  = height * (right - left)
            console.log(water)

            if(heights[left] < heights[right]){
                left++
            }else if(heights[left] == heights[right]){
                right--
                left++
            }else{
                right--
            }
            maxheight = Math.max(water ,maxheight)
        
        }
        return maxheight

    }
}
