/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = new Array(m).fill(null).map(_ => new Array(n).fill(0));

    for (var i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (var j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};


console.log(uniquePaths(3, 7))