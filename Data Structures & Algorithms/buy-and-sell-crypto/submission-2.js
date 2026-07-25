class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let minprice  = Infinity
       let maxprofit = -Infinity

       for(let price of prices) {
        if(price < minprice) {
            minprice = price
        }
        let profit = price - minprice
        if(profit > maxprofit){
            maxprofit = profit
        }
       }
       return maxprofit
    }
}
