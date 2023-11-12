
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k, arr = [], start = 1, combArr = []) {
    if (!k) {
        combArr.push([...arr]);
        return;
    }
    for (let i = start; i <= n; i++) {
        arr.push(i)
        combine(n, k - 1, arr, i + 1, combArr)
        arr.pop();
    }

    return combArr;
};

const arr = combine(4, 2)
console.log(arr)