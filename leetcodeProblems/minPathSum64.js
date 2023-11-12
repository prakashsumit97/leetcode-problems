/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let dp = new Array(m).fill(null).map(_ => new Array(n).fill(0));

    dp[0][0] = grid[0][0];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) {
                continue;
            } else {
                let result = 0;
                let left, right;
                if (i > 0 && j > 0) {
                    left = dp[i - 1][j];
                    right = dp[i][j - 1]
                    result = left > right ? right : left;
                } else if (i == 0) {
                    result = dp[i][j - 1];
                } else if (j == 0) {
                    result = dp[i - 1][j];
                }
                dp[i][j] = grid[i][j] + result;
            }
        }
    }
    return dp[m - 1][n - 1];
};


console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))



// name - reshunewly@gmail.com
// password - Jawaan@2023
