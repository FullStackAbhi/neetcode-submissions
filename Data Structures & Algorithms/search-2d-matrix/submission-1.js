class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m  = matrix.length 
        let n  = matrix[0].length

        for(let i = 0 ; i < m ; i++) {
            if(target >= matrix[i][0] && target <= matrix[i][n-1]){
                for(let j = 0 ; j < n ; j++) {
                    if(matrix[i][j] == target)return true
                }
            }

        }
        return false
    }
}
