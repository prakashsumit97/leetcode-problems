/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let singArr = [];
    for (let i = 0; i < matrix.length; i++) {
        singArr.push(...matrix[i]);
    }
    singArr.sort((a, b) => a - b)
    return singArr[k - 1];
};



console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8))