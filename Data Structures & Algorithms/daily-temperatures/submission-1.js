class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let res = new Array(n).fill(0);
        res[n - 1] = 0;
        let stack = [];
        stack.push([temperatures[n-1] , n-1])
        // console.log(stack)

        for (let i = n - 2; i >= 0; i--) {
            // console.log(temperatures[i])
            // console.log(stack , res , i)

            while(stack.length &&  stack[stack.length-1][1] > i && temperatures[i] >= stack[stack.length-1][0]) {
                stack.pop()
            }
            if(stack.length == 0 || temperatures[i] == stack[stack.length-1][0]){
                res[i] = 0
                stack.push([temperatures[i] , i])

            }else{
                res[i] = stack[stack.length-1][1] - i
                stack.push([temperatures[i] , i])

            }
            
            
            
        }
        return res;
    }
}
