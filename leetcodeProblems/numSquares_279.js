function numSquares(n) {
    let dp = new Array(n + 1).fill(n + 1);
    dp[0] = 0;
    let count = 1;
    while (count * count <= n) {
        let sq = count * count;
        for (let i = sq; i <= n; i++) {
            dp[i] = Math.min(dp[i - sq] + 1, dp[i]);
        }
        count++;
    }
    return dp[n];
};

console.log(numSquares(43))