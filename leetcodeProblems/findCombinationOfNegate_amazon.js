function maxMonth(pnl) {
    let numWays = 0;
    let uniqueSums = {};

    function findCombinationOfNeg(pnl, start, sum, negCount) {
        if (sum >= 0 && negCount > 0) {
            if (!uniqueSums[negCount]) {
                uniqueSums[negCount] = sum;
                numWays++;
            }
        }

        for (let i = start; i < pnl.length; i++) {
            // Flip the sign of pnl[i] and call recursively
            findCombinationOfNeg(pnl, i + 1, sum - 2 * pnl[i], negCount + 1);
        }
    }

    // Initial call without any negation
    const initialSum = pnl.reduce((a, b) => a + b, 0);
    findCombinationOfNeg(pnl, 0, initialSum, 0);

    return numWays;
}





console.log(maxMonth([3, 2, 5, 6, 1]));

// console.log(retArr);