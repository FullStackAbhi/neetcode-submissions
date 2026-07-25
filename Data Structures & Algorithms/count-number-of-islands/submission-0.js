class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
     
    var dfs = (grid, vis, i, j) => {
        if (i >= grid.length || i < 0 || j < 0 || j >= grid[0].length || grid[i][j] == "0" || vis[i][j]) return

        vis[i][j] = true

        dfs(grid, vis, i + 1, j)
        dfs(grid, vis, i - 1, j)
        dfs(grid, vis, i, j + 1)
        dfs(grid, vis, i, j - 1)

    }
    let count = 0
    let vis = Array.from({ length: grid.length }, () => Array.from({ length: grid[0].length }).fill(false))
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == "1" && !vis[i][j]) {
                dfs(grid, vis, i, j)
                count++
            }
        }
    }
return count
    }
}
