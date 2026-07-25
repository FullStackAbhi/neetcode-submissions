class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxleft = 0
        let maxright = 0
        let left = 0
        let right  = height.length-1
        let water = 0

        while(right >= left) {
            if(height[left] <= height[right]){
                if(height[left] >= maxleft){
                maxleft = height[left]
                
            }else{
                water += maxleft - height[left]
            }
            left++

            }else{
                if(height[right] >= maxright){
                maxright = height[right]
            }else{
                water += maxright - height[right]
            }
            right--

            }
            
            
            
        }
        return water
    }
}
