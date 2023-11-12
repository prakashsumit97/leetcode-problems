/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    const dp = new Array(n).fill(0);
    dp[0] = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (obstacleGrid[i][j] === 0) {
                if (j > 0) {
                    dp[j] = dp[j] + dp[j - 1];
                }
            } else {
                dp[j] = 0;
            }
        }
    }
    return dp[n - 1];
};

[[1, 3, 1],
[1, 5, 1],
[4, 2, 1]]

[[1, 4, 5],
[2, 7, 6],
    [6, 8, 7]
]