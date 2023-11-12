/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (arr, retArr = [], start = 1, combArr = []) {
    combArr.push([...retArr]);

    if (start == arr.length + 1) {
        return;
    }
    for (let i = start; i <= arr.length; i++) {
        retArr.push(arr[i - 1])
        subsets(arr, retArr, i + 1, combArr)
        retArr.pop();
    }

    return combArr;
};

const arr = subsets([0]);
console.log(arr)