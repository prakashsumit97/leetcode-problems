
var maxProfit = function (prices) {
    let sold = Number.MIN_SAFE_INTEGER;
    let held = Number.MIN_SAFE_INTEGER;
    let sitOut = 0;
    for (const price of prices) {
        let preSold = sold;
        // Current sold state is: state if held + current price
        sold = held + price;
        // Current held start is: max between previous held state 
        // and state if bought at current price.
        held = Math.max(held, sitOut - price);
        // Current sitOutState is: max between previous sitOut state and previous
        // sold state.
        sitOut = Math.max(sitOut, preSold);
    }
    return Math.max(sold, sitOut);
};

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//     let resArr = new Array(prices.length).fill(0);
//     let newArr = Array.from({ length: prices.length }, () => new Array(prices.length).fill(0));
//     let obj = {};
//     let latIndex;
//     let max = 0;

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i; j < prices.length; j++) {
//             if (!obj[j]) {
//                 obj[j] = 0;
//             }
//             if (prices[j] - prices[i] > 0) {
//                 if (latIndex > 0) {
//                     newArr[i][j] = prices[j] - prices[i] + (obj[latIndex - 2] || 0);
//                 } else {
//                     newArr[i][j] = prices[j] - prices[i];
//                 }
//                 max = Math.max(max, newArr[i][j]);

//                 obj[j] = Math.max(obj[j], newArr[i][j])
//                 resArr[j] = Math.max(resArr[j], newArr[i][j])
//             } else {
//                 if (j > 0) {
//                     obj[j] = Math.max(obj[j - 1], obj[j])
//                 }
//                 latIndex = j;
//             }
//         }
//     }
//     return max;
// };


console.log(maxProfit([1, 2, 3, 0, 2]))



// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//     let max = 0;
//     let retSum = 0;


//     function findMaxProfile(arr, sum) {
//         if (arr?.length <= 1) {
//             return;
//         }
//         let min = arr[0]
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] < min) {
//                 min = arr[i];
//             } else {
//                 max = sum + Math.max(arr[i] - min);
//                 retSum = Math.max(retSum, max);
//                 findMaxProfile(arr.slice(i + 2), max);
//             }
//         }
//     }

//     findMaxProfile(prices, 0)

//     return retSum;
// };