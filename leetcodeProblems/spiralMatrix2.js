/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let i = 0;
    let j = 0;
    let count = 1;

    while (true) {
        if (i < 0 || j < 0 || i > matrix.length - 1 || j > matrix[i].length - 1) {
            return matrix;
        }
        // going right
        while (j < matrix[i]?.length) {
            if (matrix[i][j]) {
                break;
            }
            matrix[i][j] = count;
            count++;
            j++;
        }

        i++;
        j--;

        // going down
        while (i < matrix.length) {
            if (matrix[i][j]) {
                break;
            }
            matrix[i][j] = count;
            count++;
            i++;
        }

        j--;
        i--;

        // going left
        while (i > -1 && j > -1) {
            if (matrix[i][j]) {
                break;
            }
            matrix[i][j] = count;
            count++;
            j--;
        }
        i--;
        j++;

        // going up
        while (i > -1 && j > -1) {
            if (matrix[i][j]) {
                break;
            }
            matrix[i][j] = count;
            count++;
            i--;
        }
        i++;
        j++;

        if (matrix[i][j]) {
            break;
        }
    }
    return matrix;
};


console.log(generateMatrix(4))