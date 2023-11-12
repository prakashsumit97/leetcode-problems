/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const obj = {}
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                obj[i + ',' + j] = j;
            }
        }
    }

    for (let key in obj) {
        let arr = key.split(',');
        let row = arr[0];
        let column = arr[1];

        for (let i = 0; i < matrix.length; i++) {
            matrix[i][column] = 0;
        }

        for (let j = 0; j < matrix[0].length; j++) {
            matrix[row][j] = 0;
        }
    }

    return matrix;
};

console.log(setZeroes([
    [3, 7, 2, 8, 2],
    [2, 2, 4, 1, 8],
    [0, 5, 7, 6, 3],
    [8, 1, 0, 7, 7],
    [1, 3, 7, 4, 1],
    [6, 5, 5, 6, 3],
    [7, 1, 0, 1, 9],
    [5, 4, 4, 9, 7],
    [2, 2, 4, 1, 0],
    [7, 1, 1, 9, 1],
    [8, 0, 4, 7, 6],
    [7, 5, 1, 2, 3],
    [7, 2, 5, 9, 3]]))


