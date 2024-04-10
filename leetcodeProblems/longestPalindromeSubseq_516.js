function longestPalindromeSubseq(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Base case: single characters are palindromes of length 1
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    // Fill the table for substrings of length > 1
    for (let length = 2; length <= n; length++) { // Substring lengths
        for (let i = 0; i <= n - length; i++) {
            let j = i + length - 1; // End index of the substring
            if (s[i] === s[j]) {
                dp[i][j] = 2 + (i + 1 <= j - 1 ? dp[i + 1][j - 1] : 0);
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[0][n - 1];
}

console.log(longestPalindromeSubseq("bbbab"))

