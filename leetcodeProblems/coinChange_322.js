/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]])
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};


console.log(coinChange([1, 2, 5], 11))
